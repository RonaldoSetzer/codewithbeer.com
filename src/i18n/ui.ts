import type { LocationPaths } from "types"

export interface PagesPaths {
  [slugMaster: string]: LocationPaths
}

export interface UITranslations {
  en: Record<string, string>
  de: Record<string, string>
  pt: Record<string, string>
}

export const pagesPaths: PagesPaths = {
  about: {
    en: { lang: "en", slug: "about", fullpath: "/en/about" },
    de: { lang: "de", slug: "uber-uns", fullpath: "/de/uber-uns" },
    pt: { lang: "pt", slug: "sobre", fullpath: "/pt/sobre" },
  },
  tags: {
    en: { lang: "en", slug: "tags", fullpath: "/en/tags" },
    de: { lang: "de", slug: "tags", fullpath: "/de/tags" },
    pt: { lang: "pt", slug: "tags", fullpath: "/pt/tags" },
  },
  home: {
    en: { lang: "en", slug: "", fullpath: "/en/" },
    de: { lang: "de", slug: "", fullpath: "/de/" },
    pt: { lang: "pt", slug: "", fullpath: "/pt/" },
  },
  contact: {
    en: { lang: "en", slug: "contact", fullpath: "/en/contact" },
    de: { lang: "de", slug: "contact", fullpath: "/de/contact" },
    pt: { lang: "pt", slug: "contact", fullpath: "/pt/contact" },
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
      "Hello everybody, my name is Ronaldo and I'm just an ordinary developer who wants to write something bla bla bla",
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
      "Hello everybody, my name is Ronaldo and I'm just an ordinary developer who wants to write something bla bla bla",
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
      "Hello everybody, my name is Ronaldo and I'm just an ordinary developer who wants to write something bla bla bla",
  },
} as const
