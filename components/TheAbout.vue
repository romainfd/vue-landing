<template>
  <section class="about-area pt-70">
    <div class="about-shape-2">
      <img src="~/assets/basic/assets/images/about-shape-2.svg" alt="shape">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6" :class="{ 'order-lg-last': right }">
          <div
            class="about-content mt-50 wow"
            :class="[right ? 'fadeInRight' : 'fadeInLeft']"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div class="section-title">
              <div class="line" />
              <h3 class="title">
                {{ title }}
              </h3>
            </div> <!-- section title -->
            <p class="text">
              {{ content }}
            </p>
            <a href="#" class="main-btn">Try it Free</a>
          </div> <!-- about content -->
        </div>
        <div class="col-lg-6" :class="{ 'order-lg-first': right }">
          <div
            class="about-image text-center mt-50 wow"
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
</template>

<script>
export default {
  props: {
    right: Boolean,
    title: String,
    img: String,
    content: String
  },
  data () {
    return {}
  }
}
</script>
