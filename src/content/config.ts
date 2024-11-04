import { z, defineCollection } from 'astro:content';

const templateCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    width: z.number(),
    height: z.number(),
    tags: z.array(z.string())
  }),
});

export const collections = {
  'templates': templateCollection
};