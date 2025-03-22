const colors = require('vuetify/es5/util/colors')
const path = require('path')
require('dotenv').config()

module.exports = {
  env: {
    BASE_URL: process.env.LOTTO_URL,
    GIT_TOKEN: process.env.GIT_TOKEN,
  },

  server: {
    port: process.env.NODE_ENV === 'production' ? null : 3000,
    host: '0.0.0.0',
  },

  head: {
    titleTemplate: '%s - nuxt-front',
    title: 'nuxt-front',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/reset.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios'],

  axios: {
    proxy: true,
    baseURL: '/',
  },

  proxy: {
    '/repos': {
      target: 'https://api.github.com',
    },
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {
    postcss: null,
  },

  serverMiddleware: [
    {
      path: '/api',
      handler: path.resolve(__dirname, 'serverMiddleware/api/lotto.js'),
    },
  ],
}
