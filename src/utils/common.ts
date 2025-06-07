import { defaultLanguage, ui } from "../i18n/ui"

export function getReadingTime(text: string): string {
  const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "")
  const words = cleanText.split(/\s+/).length

  const minutes = Math.ceil(words / 200)
  return minutes === 1 ? "1 min" : `${minutes} min`
}

export function getSlugByPostSlug(slug: string): string {
  const [lang, fileName] = slug.split("/")
  const match = fileName.match(/^(\d{4})(\d{2})\d{2}-(.+)$/)

  if (match) {
    const [_, year, month, postSlug] = match
    return `/${lang}/${year}/${month}/${postSlug}`
  }
  return ""
}

export function useTranslations(lang: string) {
  const language = lang as keyof typeof ui
  return function t(key: keyof (typeof ui)[typeof defaultLanguage]) {
    return ui[language][key] || ui[defaultLanguage][key]
  }
}
