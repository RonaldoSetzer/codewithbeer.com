import type { Path, Language } from "types"
import { pagesPaths, ui } from "./ui"

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)["en"]) {
    return ui[lang][key] || ui["en"][key]
  }
}

export function getPagePaths(slugMaster: string, lang: Language): Path {
  const locationPaths = pagesPaths[slugMaster]
  return locationPaths[lang]
}
