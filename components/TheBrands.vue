<template>
  <div class="brand-area pt-90">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
            <div v-for="brand in brands" :key="brand.name" class="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <img :src="brand.img" :alt="brand.name">
            </div> <!-- single logo -->
          </div> <!-- brand logo -->
        </div>
      </div>   <!-- row -->
    </div> <!-- container -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      brands: [{
        img: require('~/assets/basic/assets/images/brand-1.png'),
        name: 'Brand1'
      }, {
        img: require('~/assets/basic/assets/images/brand-2.png'),
        name: 'Brand2'
      }, {
        img: require('~/assets/basic/assets/images/brand-3.png'),
        name: 'Brand3'
      }, {
        img: require('~/assets/basic/assets/images/brand-4.png'),
        name: 'Brand4'
      }, {
        img: require('~/assets/basic/assets/images/brand-5.png'),
        name: 'Brand5'
      }]
    }
  }
}
</script>
