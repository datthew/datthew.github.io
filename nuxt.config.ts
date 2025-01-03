import {defineNuxtConfig} from 'nuxt/config'
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // ssr: true,
  app: {
      baseURL: '/',
  },

  nitro: {
      preset: 'github_pages'
  },

  components: true,

  //...
  build: {
      transpile: ['vuetify'],
  },

  modules: [
      (_options, nuxt) => {
          nuxt.hooks.hook('vite:extendConfig', (config) => {
              // @ts-expect-error
              config.plugins.push(vuetify({autoImport: true}))
          })
      },
      //...
  ],

  vite: {
      vue: {
          template: {
              transformAssetUrls,
          },
      },
  },

  compatibilityDate: '2024-11-16',
})