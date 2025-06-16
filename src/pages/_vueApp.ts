import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
// import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css'
import '@/styles/main.scss'


export default (app: App) => {
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });
};