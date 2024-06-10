// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  css: ['@/assets/styles/main.scss'],

  modules: ['vuetify-nuxt-module', 'nuxt-simple-robots'],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts',
  },
  app: {
    baseURL: import.meta.env.PROD ? process.env.GITHUB_URL + '/' : '/',
    cdnURL: process.env.GITHUB_URL + '/',
  },
});
