<template>
  <div id="about">
    <section class="about-area pt-70">
      <div :class="`about-shape-${nb}`">
        <img :src="require(`~/assets/basic/assets/images/about-shape-${nb}.svg`)" alt="shape">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7" :class="{ 'order-lg-last': right }" style="padding: 8px 24px;">
            <div
              class="about-content mt-50 wow"
              :class="[right ? 'fadeInRight pl-36' : 'fadeInLeft']"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div class="section-title">
                <div class="line" />
                <h3 class="title" v-html="title" />
              </div> <!-- section title -->
              <p class="text" v-html="content" />
              <a href="#footer" class="main-btn">Essayer <span class="logo-font">eliXcir</span> </a>
            </div> <!-- about content -->
          </div>
          <div class="col-lg-5" :class="{ 'order-lg-first': right }">
            <div
              class="about-image text-center mt-50 wow pt-50"
              :class="[right ? 'fadeInLeft' : 'fadeInRight']"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img :src="img" :alt="title">
            </div> <!-- about image -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    title: {
      type: String,
      default: 'About'
    },
    img: {
      type: String,
      default: require('~/assets/basic/assets/images/about2.svg')
    },
    content: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.'
    }
  },
  data () {
    return {}
  },
  computed: {
    nb () {
      return this.right ? 2 : 1
    }
  }
}
</script>
