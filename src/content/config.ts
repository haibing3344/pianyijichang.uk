import { defineCollection, z } from 'astro:content'

import { CATEGORIES } from '@/site.config'

const blogCollection = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(CATEGORIES),
  }),
})

const jichangCollection = defineCollection({
  type: 'content',
  // 使用与blog相同的schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(CATEGORIES),
  }),
})

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = {
  'blog': blogCollection,
  'jichang': jichangCollection,
  'page': pageCollection
}
