import { defineCollection, z } from "astro:content"

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = {
  pages: pagesCollection,
  blog: blogCollection,
}
