import type { Slug, Language } from "types"
import { pagesPaths, ui } from "./ui"

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)["en"]) {
    return ui[lang][key] || ui["en"][key]
  }
}

export function getPagePaths(mslug: string, lang: Language): Slug {
  const locationPaths = pagesPaths[mslug]
  return locationPaths[lang]
}
