<template>
  <section id="testimonial" class="testimonial-area pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="section-title text-center pb-10">
            <div class="line m-auto" />
            <h3 class="title">
              <span>Ils nous</span> recommandent
            </h3>
          </div> <!-- section title -->
        </div>
      </div> <!-- row -->
      <div class="row testimonial-active wow fadeInUp d-flex" data-wow-duration="1s" data-wow-delay="0.5s">
        <div v-for="testimonial in testimonials" :key="testimonial.author" class="px-2">
          <div class="single-testimonial">
            <div class="testimonial-review d-flex align-items-center justify-content-between">
              <div class="quota">
                <v-icon color="#3E8C8C">
                  mdi-comment-quote
                </v-icon>
              </div>
              <div class="star">
                <ul>
                  <li v-for="index in 5" :key="index">
                    <v-icon color="#D2BCE0">
                      mdi-star
                    </v-icon>
                  </li>
                </ul>
              </div>
            </div>
            <div class="testimonial-text">
              <p class="text" v-html="testimonial.quote" />
            </div>
            <div class="testimonial-author d-flex align-items-center">
              <div class="author-image">
                <img class="shape" src="~/assets/basic/assets/images/textimonial-shape.svg" alt="shape">
                <img class="author" :src="testimonial.img" :alt="testimonial.author">
              </div>
              <div class="author-content media-body">
                <h6 class="holder-name">
                  {{ testimonial.author }}
                </h6>
                <p class="text">
                  {{ testimonial.position }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div> <!-- single testimonial -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      testimonials: [{
        quote: "L'utilisation d'<span class='logo-font'>eliXcir</span> nous a permis de gagner un temps précieux, d'avoir une meilleure gestion de nos budgets, d'avoir une meilleure visibilité sur l'impact du CIR sur notre trésorerie et donc gérer de façon plus cohérente nos investissements",
        author: 'Paul Rinaudo',
        position: 'CEO',
        company: 'ADLIN Science',
        img: require('~/assets/basic/assets/images/paul.png')
      }, {
        quote: "J'ai donc supprimé tous mes tableaux de suivi sur Excel. C'est un véritable confort et une vraie valeur ajoutée d'utiliser cette application.",
        author: 'Valérian Giesz',
        position: 'CEO',
        company: 'Quandela',
        img: require('~/assets/basic/assets/images/valerian.png')
      }, {
        quote: "L'application <span class='logo-font'>eliXcir</span> est très simple d'utilisation. Elle nous permet de renseigner nos temps et dépenses de R&D.",
        author: 'Cyril Martini',
        position: 'CEO',
        company: 'Novecal',
        img: require('~/assets/basic/assets/images/cyril.png')
      }]
    }
  },

  mounted () {
    this.activateCarousel(this.testimonials.length)
  }
}
</script>
