export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // ParticlesJS was failing otherwise. Ref.: https://stackoverflow.com/a/53807449
  // A better solution might something similar to Ref.: https://github.com/scaccogatto/vue-waypoint#how-to-use-with-nuxt
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - eliXcir',
    title: 'Maîtriser vos financements',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Maîtriser vos financements avec eliXcir : l'expertise comptable à portée de clic !" }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    extend (config, { isDev, isClient }) {
      // relative links (for stage) | Ref.: https://github.com/nuxt/nuxt.js/issues/2892#issuecomment-372504455
      config.output.publicPath = './_nuxt/'
      return config
    }
     */
  }
}
