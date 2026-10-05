import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    github: z.url(),
    youtube: z.url().optional(),
  }),
});

export const collections = { projects };
