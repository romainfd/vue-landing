<template>
  <header class="header-area">
    <div id="home" class="header-hero bg_cover">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="header-hero-content text-center">
              <h3 class="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                Basic - SaaS
                Landing Page
              </h3>
              <h2 class="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                Kickstart Your SaaS
                or App Site
              </h2>
              <p class="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
              <a href="#" class="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get Started</a>
            </div> <!-- header hero content -->
          </div>
        </div> <!-- row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
              <img src="~/assets/basic/assets/images/header-hero.png" alt="hero">
            </div> <!-- header hero image -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
      <Particles
        id="particles-1"
        class="particles"
        url="particles.json"
      />
    </div> <!-- header hero -->
  </header>
</template>

<script>
import Particles from 'particles.vue'
import Vue from 'vue'
Vue.use(Particles)

export default {}
</script>

<style scoped>
.bg_cover {
  background-image: url('~assets/basic/assets/images/banner-bg.svg');
}
</style>
