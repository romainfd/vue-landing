<template>
  <section id="facts" class="video-counter pt-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <img class="dots" src="~/assets/basic/assets/images/dots.svg" alt="dots">
            <div class="video-wrapper">
              <div class="video-image">
                <img :src="videoPreview" alt="video">
              </div>
              <div class="video-icon">
                <a :href="videoUrl" class="video-popup">
                  <v-icon>mdi-play</v-icon>
                </a>
              </div>
            </div> <!-- video wrapper -->
          </div> <!-- video content -->
        </div>
        <div class="col-lg-6">
          <div class="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
            <div class="counter-content">
              <div class="section-title">
                <div class="line" />
                <h3 class="title" v-html="title" />
              </div> <!-- section title -->
              <p class="text" v-html="content" />
            </div> <!-- counter content -->
            <div class="row no-gutters">
              <div v-for="(counter, index) in counters" :key="counter.name" class="col-4">
                <div
                  class="single-counter d-flex align-items-center justify-content-center"
                  :class="'counter-color-' + (index + 1)"
                >
                  <div class="counter-items text-center">
                    <span class="count"><span class="counter">{{ counter.count }}</span>{{ counter.units }}</span>
                    <p class="text">
                      {{ counter.name }}
                    </p>
                  </div>
                </div> <!-- single counter -->
              </div>
            </div> <!-- row -->
          </div> <!-- counter wrapper -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
</template>

<script>
import $ from 'jquery'
import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'

export default {
  data () {
    return {
      videoPreview: require('~/assets/basic/assets/images/video.png'),
      videoUrl: 'https://www.youtube.com/watch?v=k9JfhixSqRQ',
      title: "Quelques chiffres <span>à propos d'</span><span class='logo-font'>eliXcir</span>",
      content: "Lancé en 2019 par <a href='https://www.gmba-allinial.com/fr/qui-sommes-nous/le-groupe-en-bref'>GMBA</a> et des étudiants de l'École polytechnique puis validé sur l'exercice comptable de 2020, <span class='logo-font'>eliXcir</span> est le soutien des start-up de R&D pour leurs financements.",
      counters: [{
        count: 120,
        units: '+',
        name: 'utilisateurs'
      }, {
        count: 70,
        units: 'k+',
        name: 'heures rentrées'
      }, {
        count: 800,
        units: 'k€',
        name: 'sécurisés'
      }],
      wp: null
    }
  },
  mounted () {
    // Video popup
    $('.video-popup').magnificPopup({
      type: 'iframe'
      // other options
    })
  }
}
</script>

<style>
a.video-popup:hover {
  background-color: #eee;
  text-decoration: none;
}
</style>
