export default {
  env: {
    baseURL: process.env.NODE_ENV === 'dev'
      ? process.env.API_URL
      : 'https://my-domain.com',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'news-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/normalize.css',
    'swiper/dist/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/utils.js', mode: 'client' },
    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/chat.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/fonts.scss',
      '~/assets/scss/vars.scss',
      '~/assets/scss/mixins.scss',
      '~/assets/scss/styles.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    baseURL: process.env.API_URL
    // baseURL: "http://localhost:3000",
    // browserBaseURL: "http://localhost:3000",
  },

  image: {
    screens: {
      xs: 480,
      sm: 768,
      md: 992,
      lg: 1024,
      xl: 1280
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
