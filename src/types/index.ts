export type Language = "en" | "de" | "pt"
export type ContentType = "post" | "page"

export interface Tag {
  label: string
  slug: string
}

export interface Path {
  lang: Language
  slug: string
  fullpath: string
}

export interface Frontmatter {
  title: string
  publishedAt: Date
  description: string
  tags: Tag[]
  reading: string
  image?: string
  author?: string
  featured?: boolean
}

export interface PageData {
  title: string
  type: ContentType
  slug: Slug
  frontmatter?: Frontmatter
}

export type LanguageSlugs  = {
  [key in Language]: Slug
}

export interface Slug {
  mslug: string
  slug: string
  lang: string
}
