import { defineCollection, reference, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const features = defineCollection({
  loader: file('src/content/features.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
})

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string(),
      href: z.string(),
    }),
})

const blog = defineCollection({
  loader: glob({
    pattern: 'src/content/blog/*.md',
  }),
  schema: ({ image }) => z.object({
    title: z.string().max(65),
    description: z.string().max(160),
    image: image(),
    pubDate: z.date(),
    isDraft: z.boolean(),
    slug: z.string(),
    author: reference('authors').optional(),
  }),
})

const authors = defineCollection({
  /* loader: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return data.map((user: any) => ({ id: user.name, name: user.name }))
  }, */
  loader: file('src/data/users.json', {
    parser: (fileContent: string) => {
      return JSON.parse(fileContent).map((user: any) => ({ id: user.name, name: user.name }))
    },
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
  }),
})

export const collections = { features, projects, blog, authors }
