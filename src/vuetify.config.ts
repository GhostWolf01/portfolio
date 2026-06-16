import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
  /* vuetify options */
  theme: {
    defaultTheme: 'dark',
  },
  ssr: {
    clientWidth: 1920,
    clientHeight: 1080,
  },
  icons: {
    defaultSet: 'fa',
  },
});
