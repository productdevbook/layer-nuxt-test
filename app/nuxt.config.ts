// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '../primitives',
    '../share-layer',
  ],
  devtools: { enabled: true }
})
