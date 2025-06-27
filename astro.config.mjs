import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import vue from '@astrojs/vue'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig } from 'astro/config'
import AutoImport from 'unplugin-auto-import/astro'
import {
  PrimeVueResolver as PrimeVueComponentResolver,
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [AutoImport({
    resolvers: [PrimeVueResolver()],
  }), vue({
    appEntrypoint: '/src/pages/_vueApp',
    template: {
      compilerOptions: {
        // treat any tag that includes with iconify-icon as custom elements
        isCustomElement: tag => tag.includes('iconify-icon'),
      },
    },
    devtools: true,
  }), react({
    experimentalReactChildren: true,
    include: ['**/react/*'],
  }), mdx(), sitemap()],

  vite: {
    plugins: [
      tailwindcss(),
      Components({
        dirs: ['src/components'],
        dts: true,
        // Allow subdirectories as namespace prefix for components.
        directoryAsNamespace: true,
        deep: true,
        resolvers: [
          PrimeVueComponentResolver(),
        ],
      }),
    ],
  },

  adapter: vercel(),
})