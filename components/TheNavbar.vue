<template>
  <header class="header-area">
    <div class="navbar-area" :class="{ sticky: scrolled }">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <NuxtLink class="navbar-brand" to="/">
                <img :src="logo" alt="Logo" style="height: 70px;">
              </NuxtLink>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon" />
                <span class="toggler-icon" />
                <span class="toggler-icon" />
              </button>

              <div id="navbarSupportedContent" class="collapse navbar-collapse sub-menu-bar">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="page-scroll" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#features">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#facts">Why</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#team">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#blog">Blog</a>
                  </li>
                </ul>
              </div> <!-- navbar collapse -->

              <div class="navbar-btn d-none d-sm-inline-block">
                <NuxtLink class="main-btn" data-scroll-nav="0" to="/accueil">
                  Se connecter
                </NuxtLink>
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
      scrolled: false
    }
  },
  computed: {
    logo () {
      return this.scrolled ? require('~/assets/img/logo.png') : require('~/assets/img/logo-white.png')
    }
  },
  mounted () {
    // Sticky headesr
    $(window).on('scroll', () => {
      this.scrolled = $(window).scrollTop() > 20
    })
  }
}
</script>
