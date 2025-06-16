// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import viteVue from "@vitejs/plugin-vue";


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/pages/_vueApp',
      devtools: true
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});