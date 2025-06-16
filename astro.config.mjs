import vue from '@astrojs/vue'

import tailwindcss from '@tailwindcss/vite'

// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/pages/_vueApp',
      devtools: true,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
