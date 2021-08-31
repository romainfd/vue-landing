import smoothscroll from 'smoothscroll-polyfill'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
import $ from 'jquery'

import 'slick-carousel/slick/slick.css'

import { WOW } from 'wowjs'
require('slick-carousel')

// Safari doesn't support scroll-behavior: smooth | Ref.: https://stackoverflow.com/a/56011281
// kick off the polyfill!
smoothscroll.polyfill()

export default {
  methods: {
    smoothScroll (querySelector) {
      document.querySelector(querySelector).scrollIntoView({ behavior: 'smooth' })
    },
    activateMagnificPopup () {
      $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
      })
    },
    activateCarousel (lenght) {
      $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: length,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              centerMode: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
    },
    activateWow () {
      const wow = new WOW()
      wow.init()
    }
  }
}
