<template>
  <div>
    <div class="preloader">
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
    <nuxt />
  </div>
</template>

<script>
import $ from 'jquery'
import { WOW } from 'wowjs'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
    $(window).on('load', function (event) {
      $('.preloader').delay(100).fadeOut(200)
    })

    // WOW
    const wow = new WOW()
    wow.init()
  }
}
</script>
