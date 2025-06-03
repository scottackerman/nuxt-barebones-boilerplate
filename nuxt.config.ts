// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },
  modules: ['@zadigetvoltaire/nuxt-gtm', '@hypernym/nuxt-gsap'],
  vite: {
    plugins: [svgLoader()]
  },
  gtm: {
    id: 'GTM-XXXXX',
    defer: true
  },
  css: [
    '~/assets/css/main.scss'
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },
  app: {
    head: {
      titleTemplate: '%s · Insmed Clinical trials',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicon-16x16.png' },
        { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'stylesheet', href: '/cookieconsent.css' },
      ],
      script: [{ src: '/cookieconsent.js' }]
    },
  },
  build: {
    transpile: ['gsap']
  },
})

