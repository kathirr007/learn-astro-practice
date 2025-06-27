import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

export const collections = {
  team: defineCollection({
    loader: file('src/data/team.json'),
    schema: z.object({
      name: z.string(),
      role: z.string(),
      email: z.string().email(),
      department: z.enum([
        'Engineering',
        'Software Development',
        'Product Design',
      ]),
    }),
  }),
}
