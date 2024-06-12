import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
  /* vuetify options */
  ssr: {
    clientWidth: 1920,
    clientHeight: 1080,
  },
  icons: {
    defaultSet: 'fa',
  },
});
