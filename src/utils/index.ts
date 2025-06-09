import type {
  PageData,
  ContentType,
  Tag,
  Frontmatter,
  Slug,
  LanguageSlugs,
  Language,
} from "types"
import type { CollectionEntry } from "astro:content"

export function generateRouteMap<T extends string>(
  collectionItems: CollectionEntry<"blog" | "pages">[]
): Record<string, LanguageSlugs> {
  const routeMap = collectionItems.reduce(
    (map, item) => {
      const page = createPageData(item)
      const { mslug, lang } = page.slug

      if (!map[mslug]) {
        map[mslug] = {} as LanguageSlugs
      }

      map[mslug][lang as Language] = page.slug

      return map
    },
    {} as Record<string, LanguageSlugs>
  )

  return routeMap
}

// AFTER REFACTORING
export function createPageSlugs( id: string, title: string): Slug {
  const [lang, fileSlug] = id.split("/")
  const mslug = fileSlug.replace(/\.mdx$/, "")

  return {
    lang,
    mslug,
    slug: slugify(title),
  }
}

export function createPostSlugs( id: string, title: string): Slug {
  const regex = /^(\d{4})(\d{2})\d{2}-(.+)\.mdx$/
  const [lang, fileSlug] = id.split("/")
  const [_, year, month, mslug] = fileSlug.match(regex) || []

  return {
    lang,
    mslug : `${year}/${month}/${mslug}`,
    slug : `${year}/${month}/${slugify(title)}`,
  }
}

export function createPageData<T extends string>(
  item: CollectionEntry<"blog" | "pages">
): PageData {
  const title = item.data.title
  const slug = item.collection === "blog" 
    ? createPostSlugs(item.id, title) 
    : createPageSlugs(item.id, title)

  return {
    title,
    slug,
    type: item.collection as ContentType,
    frontmatter: item.collection === "blog" ? createFrontmatter(item) : undefined,
  }
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

export function createFrontmatter<T extends string>(
  item: CollectionEntry<"blog">
): Frontmatter {
  const { title, publishedAt, description, tags, author } = item.data
  const reading = getReadingTime(item.body)

  return {
    title,
    publishedAt,
    description,
    author,
    reading,
    tags: generateTags(tags || []),
  }
}

export function sortByRecent(a: PageData, b: PageData): number {
  const dateA = new Date(a.frontmatter!.publishedAt).getTime()
  const dateB = new Date(b.frontmatter!.publishedAt).getTime()
  return dateB - dateA
}

export function formatDate(date: Date, lang?: string) {
  const dateObj = date instanceof Date ? date : new Date(date)

  return new Intl.DateTimeFormat(lang || "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj)
}

export function getReadingTime(text: string): string {
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "")
  const words = cleanText.split(/\s+/).length

  const minutes = Math.ceil(words / 200)
  return minutes === 1 ? "1 min" : `${minutes} min`
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/ß/g, "ss")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50)
}

export function generateBasicPaths(slug: string): LanguageSlugs {
  return {
    en: { lang: "en", slug, mslug: slug },
    de: { lang: "de", slug, mslug: slug },
    pt: { lang: "pt", slug, mslug: slug },
  }
}

export function fullpath(slug:Slug): string {
  return `/${slug.lang}/${slug.slug}`
}
