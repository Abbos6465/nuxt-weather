// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: 'Nuxt Weather',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [

      ],
    },
  },
  css: [
      "~/assets/scss/app.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "~/assets/scss/_variables.scss";
              @import "~/assets/scss/_mixin.scss";
              @import "~/assets/scss/_media.scss";
              `
        }
      }
    }
  }
})
