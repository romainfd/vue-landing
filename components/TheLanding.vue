<template>
  <header class="header-area">
    <div id="home" class="header-hero bg_cover">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="header-hero-content text-center">
              <h3 class="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                <span class="logo-font">
                  eliXcir
                </span>
                - L'expertise comptable à portée de clic
              </h3>
              <h2 class="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                🚀 Maîtriser vos financements 💵
              </h2>
              <p class="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                🛠 L'outil des start-up pour la gestion des temps et projets R&D et le calcul du CIR et des subventions en temps réel ⏱
              </p>
              <a href="mailto:romain.fouilland@gmba.fr?subject=Démo%20eliXcir&body=Bnjour%20Romain,%0D%0A%0D%0ASerais-tu%20dispo%20pour%20une%20d%C3%A9mo%20d'eliXcir%20%C3%A0%20l'un%20des%20moments%20suivants%20%3A%20...%0D%0A%0D%0A%C3%80%20bient%C3%B4t%20!" class="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                Demander une démo
              </a>
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
