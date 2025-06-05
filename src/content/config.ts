import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'pt']),
    lastUpdated: z.date().optional(),
  })
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    lang: z.enum(['en', 'pt']),
    published_at: z.date(),
    lastUpdated: z.date().optional(),
    tags: z.array(z.string()).optional(),
  })
});


export const collections = {
  'pages': pagesCollection,
  'blog': blogCollection,
};
