export type Language = 'en' | 'de' | 'pt';
export type ContentType = "post" | "page"

export interface Tag {
  label: string
  slug: string
}

export interface Path {
  lang: string
  slug: string
  fullpath: string
}

export interface Frontmatter {
  title: string
  publishedAt: Date
  description: string
  tags: Tag[]
  image?: string
  author?: string
  featured?: boolean
}

export interface LocationPaths {
  en: Path 
  de: Path
  pt: Path
}

export interface PageData {
  title: string
  slugMaster: string
  type: ContentType
  reading: string
  paths: LocationPaths
  lang: string
  slug: string
  frontmatter?: Frontmatter
}
