// https://nuxt.com/docs/api/configuration/nuxt-config
import store from "~/store";
export default defineNuxtConfig({
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
  plugins: ['~/store/index'],
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
              @import "~/assets/scss/_root.scss";
              `
        }
      }
    }
  }
})
