import type {
  Path,
  LocationPaths,
  PageData,
  ContentType,
  Tag,
  Language,
} from "types"
import type { CollectionEntry } from "astro:content"

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100)
}

export function generateBasicPaths(slug: string): LocationPaths {
  return {
    en: { lang: "en", slug, fullpath: `/en/${slug}` },
    de: { lang: "de", slug, fullpath: `/de/${slug}` },
    pt: { lang: "pt", slug, fullpath: `/pt/${slug}` },
  }
}

export function extractPagePath(id: string): Path {
  const [lang, slugParts] = id.split("/")
  const slug = slugParts.replace(/\.mdx$/, "")
  const fullpath = `/${lang}/${slug}`

  return {
    lang,
    slug,
    fullpath,
  }
}

export function extractPostPath(id: string): Path {
  const [lang, slugParts] = id.split("/")
  const regex = /^(\d{4})(\d{2})\d{2}-(.+)\.mdx$/
  const [_, year, month, slug] = slugParts.match(regex) || []
  const fullslug = `${year}/${month}/${slug}`
  const fullpath = `/${lang}/${year}/${month}/${slug}`

  return {
    lang,
    fullpath,
    slug: fullslug,
  }
}

export function getReadingTime(text: string): string {
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "")
  const words = cleanText.split(/\s+/).length

  const minutes = Math.ceil(words / 200)
  return minutes === 1 ? "1 min" : `${minutes} min`
}

export function generateTags(tags: string[]): Tag[] {
  return tags.map((tag) => {
    const slug = slugify(tag)
    return {
      label: tag,
      slug,
    }
  })
}

export function formatDate(date: Date, lang?: string) {
  const dateObj = date instanceof Date ? date : new Date(date)

  return new Intl.DateTimeFormat(lang || "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj)
}

export function createPageDataByPost<T extends string>(
  item: CollectionEntry<"blog">
): PageData {
  const path = extractPostPath(item.id)
  const slugMaster = item.data.slugMaster
  const frontmatter = {
    title: item.data.title,
    publishedAt: item.data.publishedAt,
    description: item.data.description,
    tags: generateTags(item.data.tags || []),
    author: item.data.author,
    // image: item.data?.image,
    // featured: item.data?.featured,
  }
  const post: PageData = {
    title: item.data.title,
    slugMaster,
    type: item.collection as ContentType,
    reading: getReadingTime(item.body),
    lang: path.lang,
    slug: path.slug,
    frontmatter,
  }
  return post
}

export function createPageDataByPage<T extends string>(
  item: CollectionEntry<"pages">
): PageData {
  const path = extractPagePath(item.id)
  const slugMaster = item.data.slugMaster
  const page: PageData = {
    title: item.data.title,
    slugMaster,
    type: item.collection as ContentType,
    reading: getReadingTime(item.body),
    lang: path.lang,
    slug: path.slug,
  }

  return page
}

export function generateRouteMap<T extends string>(
  collectionItems: CollectionEntry<"blog" | "pages">[]
): Record<string, LocationPaths> {
  const routeMap = collectionItems.reduce((map, item) => {
    const currentPath =
      item.collection === "blog"
        ? extractPostPath(item.id)
        : extractPagePath(item.id)
    const slugMaster = item.data.slugMaster
    const lang = (currentPath?.lang || "en") as Language

    if (!slugMaster || !lang) return map
    if (!map[slugMaster]) {
      map[slugMaster] = {} as LocationPaths
    }

    map[slugMaster][lang] = currentPath

    return map
  }, {} as Record<string, LocationPaths>)

  return routeMap
}

export function sortByRecent(a: PageData, b: PageData): number {
  const dateA = new Date(a.frontmatter!.publishedAt).getTime()
  const dateB = new Date(b.frontmatter!.publishedAt).getTime()
  return dateB - dateA
}
