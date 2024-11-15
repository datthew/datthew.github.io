import {defineNuxtConfig} from 'nuxt/config'
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: true,
    app: {
        baseURL: '/', // für datthew.github.io
        buildAssetsDir: '/_nuxt/' // Wichtig für korrekte Asset-Pfade
    },
    nitro: {
        preset: 'github_pages'
    },

    // components: true,
    components: {
        dirs: [
            '~/components',
            '~/layouts'
        ]
    },
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
    }
})
