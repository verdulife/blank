import { z, defineCollection } from 'astro:content';

const templateCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    width: z.number(),
    height: z.number(),
    color: z.number()
  }),
});

export const collections = {
  'templates': templateCollection
};