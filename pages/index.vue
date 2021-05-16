<template>
  <div>
    <TheNavbar />
    <TheLanding />
    <TheBrands />
    <TheFeatures />
    <TheAbout
      v-for="about in abouts"
      :key="about.title"
      :title="about.title"
      :content="about.content"
      :img="about.img"
      :right="about.right"
    />
    <TheFacts />
    <TheTestimonials />
    <ThePosts />
    <TheFooter />
    <BackToTopButton />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheLanding from '~/components/TheLanding'
import TheBrands from '~/components/TheBrands'
import TheFeatures from '~/components/TheFeatures'
import TheAbout from '~/components/TheAbout'
import TheFacts from '~/components/TheFacts'
import TheTestimonials from '~/components/TheTestimonials'
import ThePosts from '~/components/ThePosts'
import TheFooter from '~/components/TheFooter'
import BackToTopButton from '~/components/BackToTopButton'
// Animate CSS
import 'animate.css'
// Bootstrap CSS
require('~/assets/basic/assets/css/bootstrap.min.css')
// Default CSS
require('~/assets/basic/assets/css/default.css')
// Style CSS
require('~/assets/basic/assets/css/style.css')

export default {
  components: {
    TheNavbar, TheLanding, TheBrands, TheFeatures, TheAbout, TheFacts, TheTestimonials, ThePosts, TheFooter, BackToTopButton
  },
  data () {
    return {
      abouts: [{
        title: 'Quick & Easy <span>to Use Bootstrap Template</span>',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.',
        img: require('~/assets/basic/assets/images/about1.svg'),
        right: false
      }, {
        title: 'Modern design <span>with Essential Features</span>',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.',
        img: require('~/assets/basic/assets/images/about2.svg'),
        right: true
      }, {
        title: '<span>Crafted for</span> SaaS, App and Software Landing Page',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.',
        img: require('~/assets/basic/assets/images/about3.svg'),
        right: false
      }]
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Poetsen';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/PoetsenOne-Regular.ttf') format('truetype');
}

.logo-font {
  font-family: 'Poetsen', serif;
}
</style>
