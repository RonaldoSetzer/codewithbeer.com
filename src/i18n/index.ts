import type { Slug, Language, LanguageSlugs } from "types"

export interface UITranslations {
  en: Record<string, string>
  de: Record<string, string>
  pt: Record<string, string>
}

export const pagesPaths: Record<string, LanguageSlugs> = {
  about: {
    en: { lang: "en", slug: "about", mslug: "about" },
    de: { lang: "de", slug: "uber-uns", mslug: "about" },
    pt: { lang: "pt", slug: "sobre", mslug: "about" },
  },
  tags: {
    en: { lang: "en", slug: "tags", mslug: "tags" },
    de: { lang: "de", slug: "tags", mslug: "tags" },
    pt: { lang: "pt", slug: "tags", mslug: "tags" },
  },
  home: {
    en: { lang: "en", slug: "", mslug: "" },
    de: { lang: "de", slug: "", mslug: "" },
    pt: { lang: "pt", slug: "", mslug: "" },
  },
  contact: {
    en: { lang: "en", slug: "contact", mslug: "contact" },
    de: { lang: "de", slug: "contact", mslug: "contact" },
    pt: { lang: "pt", slug: "contact", mslug: "contact" },
  },
}

export const ui: UITranslations = {
  en: {
    "pages.about": "about",
    "pages.tags": "tags",
    "pages.home": "home",
    "pages.contact": "contact",
    // ---
    "nav.posts": "posts",
    "nav.recent": "recent",
    "nav.all": "all",
    "nav.pages": "pages",
    "nav.about": "about",
    "nav.tags": "tags",
    "nav.languages": "languages",
    "nav.en": "english",
    "nav.de": "german",
    "nav.pt": "portuguese",
    "nav.social": "social",
    "nav.read-more": "read more",
    "nav.back": "back",
    "post.author": "author",
    "post.reading": "reading",
    "post.date": "date",
    "section.back.title": "",
    "about-short.title": "Who am I?",
    "about-short.": "About me",
    "about-short.description":
      "Hello World!! and welcome to Code with Beer, My name is Ronaldo Santiago, just an ordinary software engineer who loves to stay hours in front of a computer, writing several lines of code, killing bugs, creating bugs, sometimes playing games, sometimes coding some games, like anyone else. This is me, so welcome to my blog.",
  },
  de: {
    "pages.about": "über-uns",
    "pages.tags": "tags",
    "pages.home": "home",
    "pages.contact": "contact",
    // ---
    "nav.posts": "beiträge",
    "nav.recent": "aktuell",
    "nav.all": "alle",
    "nav.pages": "seiten",
    "nav.about": "über-uns",
    "nav.tags": "tags",
    "nav.languages": "sprachen",
    "nav.en": "englisch",
    "nav.de": "deutsch",
    "nav.pt": "portugiesisch",
    "nav.social": "soziale medien",
    "nav.read-more": "read more",
    "nav.back": "zurück",
    "post.author": "autor",
    "post.reading": "lesezeit",
    "post.date": "datum",
    "section.back.title": "",

    "about-short.": "About me",
    "about-short.description":
      "Hello World!! and welcome to Code with Beer, My name is Ronaldo Santiago, just an ordinary software engineer who loves to stay hours in front of a computer, writing several lines of code, killing bugs, creating bugs, sometimes playing games, sometimes coding some games, like anyone else. This is me, so welcome to my blog.",
  },
  pt: {
    "pages.about": "sobre",
    "pages.tags": "tags",
    "pages.home": "home",
    "pages.contact": "contact",
    // ---
    "nav.posts": "postagens",
    "nav.recent": "recentes",
    "nav.all": "todos",
    "nav.pages": "páginas",
    "nav.about": "sobre",
    "nav.tags": "tags",
    "nav.languages": "idiomas",
    "nav.en": "inglês",
    "nav.de": "alemão",
    "nav.pt": "português",
    "nav.social": "redes sociais",
    "nav.read-more": "read more",
    "nav.back": "voltar",
    "post.author": "autor",
    "post.reading": "tempo de leitura",
    "post.date": "data",
    "section.back.title": "",

    "about-short.": "About me",
    "about-short.description":
      "Hello World!! and welcome to Code with Beer, My name is Ronaldo Santiago, just an ordinary software engineer who loves to stay hours in front of a computer, writing several lines of code, killing bugs, creating bugs, sometimes playing games, sometimes coding some games, like anyone else. This is me, so welcome to my blog.",
  },
} as const

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)["en"]) {
    return ui[lang][key] || ui["en"][key]
  }
}

export function getPagePaths(mslug: string, lang: Language): Slug {
  const locationPaths = pagesPaths[mslug]
  return locationPaths[lang]
}
