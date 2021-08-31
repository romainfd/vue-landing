import Vue from 'vue'

import clientMixins from '~/mixins/client'

// Ref.: https://stackoverflow.com/questions/59106281/nuxt-js-global-mixin-only-working-on-the-server-side
Vue.mixin(clientMixins)
