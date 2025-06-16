import type { App } from 'vue'

import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import 'iconify-icon'

// import Material from '@primeuix/themes/material';
import '@/styles/global.css'

import 'primeicons/primeicons.css'

import '@/styles/main.scss'

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
}
