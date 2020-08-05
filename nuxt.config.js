
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '南浮宫魅影',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
render: {
        resourceHints: false,
prefetchLinks: false
    },
server:{
port:3002,
host:"0.0.0.0"
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#53a8ff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
	    '~/assets/css/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/axios',
   { src: '~/plugins/element-ui', ssr: true }
    // '@/plugins/vue-lazyload',
    // { src: '~/plugins/tip' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'http://59.110.124.156:8000',
      // target: 'http://localhost:3003',
      pathRewrite: {
        '^/api': 'api'
      }
    },
    '/music': {
      target: 'http://59.110.124.156:3000',
      pathRewrite: {
        '^/music': ''
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
babel: {
      plugins: [
        [ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
      ] 
    }
  }
}
