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
        title: 'Quick & Easy to Use Bootstrap Template',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.',
        img: require('~/assets/basic/assets/images/about1.svg'),
        right: false
      }, {
        title: 'Modern design with Essential Features',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.',
        img: require('~/assets/basic/assets/images/about2.svg'),
        right: true
      }, {
        title: 'Crafted for SaaS, App and Software Landing Page\n',
        content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.',
        img: require('~/assets/basic/assets/images/about3.svg'),
        right: false
      }]
    }
  },
  head () {
    return {
      title: 'Hello world',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'Landing page'
          // name: 'description',
          // content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
