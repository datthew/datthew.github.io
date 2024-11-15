import { defineNuxtConfig } from 'nuxt/config'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: true,

    app: {
        baseURL: '/',
        pageTransition: { name: 'page', mode: 'out-in' }
    },

    // Wichtig für GitHub Pages
    nitro: {
        preset: 'github_pages'
    },

    // Aktiviert automatisches Komponenten-Import
    components: {
        dirs: [
            '~/components',
            '~/layouts'
        ]
    },

    build: {
        transpile: ['vuetify'],
    },

    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
    ],

    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        // Optimierungen für den Build
        build: {
            chunkSizeWarningLimit: 1000,
        },
    },
})