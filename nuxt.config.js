
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:
    [
      { src: 'https://p.trellocdn.com/embed.min.js' },
      { src: 'https://unpkg.com/vue-meta@1.6.0/lib/vue-meta.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/jsonp.js',
    '~/plugins/vue-meta.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    'markdown-it',
    'nuxt-i18n'
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-155906401-1'
    }]
  ],
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@kazupon/vue-i18n-loader', 'yaml-loader']
      })
    }
  },
  env: {
    baseUrl: 'https://www.puetsua.me',
    socialMeta: [
      { hid: 'og:image', name: 'og:image', content: 'https://www.puetsua.me/logo.png' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Pue-Tsuâ' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@puetsua' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.puetsua.me/logo.png' },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: 'https://www.puetsua.me/logo.png' },
      { hid: 'theme-color', name: 'theme-color', content: '#a855ec' },
      { hid: 'author', name: 'author', content: 'Pue-Tsuâ' }
    ]
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true
    },
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
}
