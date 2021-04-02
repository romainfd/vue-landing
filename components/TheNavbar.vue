<template>
  <header class="header-area">
    <div class="navbar-area" :class="{ sticky: scrolled }">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="index.html">
                <img :src="logo" alt="Logo">
              </a>
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
                <a class="main-btn" data-scroll-nav="0" href="#pricing">Free Trial</a>
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
      return this.scrolled ? require('~/assets/basic/assets/images/logo-2.svg') : require('~/assets/basic/assets/images/logo.svg')
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
