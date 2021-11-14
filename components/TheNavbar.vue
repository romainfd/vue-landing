<template>
  <header class="header-area">
    <div class="navbar-area" :class="{ sticky: scrolled }">
      <div class="container py-0">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <NuxtLink class="navbar-brand" to="/">
                <img :src="logo" alt="Logo" style="height: 70px;">
              </NuxtLink>
              <button
                class="navbar-toggler ml-15 pl-15"
                type="button"
                @click="showMenu = !showMenu"
              >
                <span class="toggler-icon" />
                <span class="toggler-icon" />
                <span class="toggler-icon" />
              </button>

              <div
                id="navbarSupportedContent"
                class="collapse navbar-collapse sub-menu-bar"
                :class="{ show: showMenu }"
              >
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="page-scroll" @click="closeMenuAndScroll('#features')">Atouts</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" @click="closeMenuAndScroll('#about')">Utilisation</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" @click="closeMenuAndScroll('#facts')">Chiffres</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" @click="closeMenuAndScroll('#testimonial')">Recommandations</a>
                  </li>
                  <li v-if="showMenu" class="nav-item">
                    <a class="page-scroll" style="color: #c285ff !important;" href="./blog">Blog</a>
                  </li>
                  <li v-if="showMenu" class="nav-item">
                    <a class="page-scroll" style="color: #3E8C8C !important;" href="./accueil">Se connecter</a>
                  </li>
                </ul>
              </div> <!-- navbar collapse -->

              <div class="navbar-btn d-none d-sm-inline-block pr-20">
                <!-- No NuxtLink as it is a different nuxt app !! -->
                <a
                  class="secondary-btn-color main-btn"
                  data-scroll-nav="0"
                  href="./blog"
                  style="font-weight: bold;"
                >
                  Blog
                </a>
              </div>
              <div class="navbar-btn d-none d-sm-inline-block pr-20">
                <!-- No NuxtLink as it is a different nuxt app !! -->
                <a
                  class="main-btn"
                  data-scroll-nav="0"
                  href="./accueil"
                  style="font-weight: bold;"
                >
                  Se connecter
                </a>
              </div>
            </nav> <!-- navbar -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </div> <!-- navbar area -->
  </header>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      scrolled: false,
      showMenu: false
    }
  },
  computed: {
    logo () {
      return this.scrolled ? require('~/assets/img/logo.png') : require('~/assets/img/logo-white.png')
    }
  },
  mounted () {
    // Sticky headers
    $(window).on('scroll', () => {
      this.scrolled = $(window).scrollTop() > 20
    })
  },
  methods: {
    closeMenuAndScroll (querySelector) {
      this.showMenu = false
      this.smoothScroll(querySelector)
    }
  }
}
</script>

<style scoped>
.secondary-btn-color {
  background: -webkit-linear-gradient(left, #33c8c1 0%, #119bd2 50%, #33c8c1 100%) !important;
  background: -o-linear-gradient(left, #33c8c1 0%, #119bd2 50%, #33c8c1 100%) !important;
  background: linear-gradient(to right, #33c8c1 0%, #119bd2 50%, #33c8c1 100%) !important;
  background-size: 200% !important; }
  .secondary-btn-color:hover {
    color: #fff !important;
    background-position: right center !important; }
</style>
