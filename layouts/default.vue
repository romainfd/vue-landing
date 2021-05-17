<template>
  <div>
    <transition name="fade">
      <div v-if="!ready" class="preloader">
        <div class="loader">
          <div class="ytp-spinner">
            <div class="ytp-spinner-container">
              <div class="ytp-spinner-rotator">
                <div class="ytp-spinner-left">
                  <div class="ytp-spinner-circle" />
                </div>
                <div class="ytp-spinner-right">
                  <div class="ytp-spinner-circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <nuxt />
  </div>
</template>

<script>
import { WOW } from 'wowjs'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      ready: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted () {
    // Preloader
    this.ready = true

    // WOW
    const wow = new WOW()
    wow.init()
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
  transition-delay: .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
