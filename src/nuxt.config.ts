// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  css: ['@/assets/styles/main.scss'],
  modules: ['vuetify-nuxt-module', '@nuxtjs/robots'],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts',
  },
  typescript: {
    typeCheck: true,
  },
  compatibilityDate: 'latest',
});
