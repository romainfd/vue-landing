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
      <div id="particles-1" class="particles" />
    </div> <!-- header hero -->
  </header>
</template>

<script>
import 'particles.js'
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
    // Particles
    window.particlesJS('particles-1', {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000
          }
        },
        color: {
          value: ['#FFFFFF', '#FFFFFF', '#FFFFFF']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#fff'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 33,
            height: 33
          }
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1
          }
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1
          }
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: !0,
          speed: 1,
          direction: 'top',
          random: !0,
          straight: !1,
          out_mode: 'out',
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: !1,
            mode: 'bubble'
          },
          onclick: {
            enable: !1,
            mode: 'repulse'
          },
          resize: !0
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: !0
    })
  }
}
</script>

<style scoped>
.bg_cover {
  background-image: url('~assets/basic/assets/images/banner-bg.svg');
}
</style>
