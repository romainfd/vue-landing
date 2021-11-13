<template>
  <footer id="footer" class="footer-area bg_cover pt-120">
    <div class="container">
      <div class="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="row">
          <div class="col-lg-6">
            <div class="subscribe-content mt-45">
              <h2 class="subscribe-title">
                Curieux ? 🧐 <span>Je veux une démo d'<span class="logo-font">eliXcir</span></span>
              </h2>
            </div>
          </div>
          <div class="col-lg-6">
            <div v-if="!subscribed" class="subscribe-form mt-50">
              <input v-model="email" type="text" placeholder="Mon email">
              <button class="main-btn" style="font-weight: bold;" @click="subscribe">
                Go 🧪
              </button>
            </div>
            <div v-else class="subscribe-form mt-50">
              <input v-model="email" type="text" placeholder="C'est bien noté, à bientôt 👋" disabled>
              <button class="main-btn" disabled>
                👌
              </button>
            </div>
          </div>
        </div> <!-- row -->
      </div> <!-- subscribe area -->
      <div class="footer-widget pb-100">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <a class="logo" href="#">
                <img src="~/assets/img/logo-white.png" alt="logo">
              </a>
              <p class="text pb-3">
                L’outil des entreprises innovantes pour suivre en temps réel votre R&D :
                <span class="logo-font">eliXcir</span>
                s'occupe de la gestion de votre CIR et subventions pour que vous concentriez sur l'innovation !
              </p>
              <div class="row">
                <div class="col-md-6 col-sm-8 storeLogo">
                  <a href="https://apps.apple.com/us/app/elixcir/id1483622437">
                    <img
                      src="~/assets/img/appstore.png"
                      alt="Télécharger eliXcir sur votre iPhone par l'App Store d'Apple"
                    >
                  </a>
                </div>
                <div class="col-md-6 col-sm-8 storeLogo" style="padding-top: 15px;">
                  <a href="https://play.google.com/store/apps/details?id=fr.gmba.ovh.applix">
                    <img
                      src="~/assets/img/playstore.png"
                      alt="Télécharger eliXcir sur votre Android par le Play Store de Google"
                    >
                  </a>
                </div>
              </div>
              <!--
              <ul class="social">
                <li><a href="#"><v-icon>mdi-facebook</v-icon></a></li>
                <li><a href="#"><v-icon>mdi-twitter</v-icon></a></li>
                <li><a href="#"><v-icon>mdi-instagram</v-icon></a></li>
                <li><a href="#"><v-icon>mdi-linkedin</v-icon></a></li>
              </ul>
              -->
            </div> <!-- footer about -->
          </div>
          <div class="col-lg-5 col-md-7 col-sm-7">
            <div class="footer-link d-flex mt-50 justify-content-md-between">
              <div class="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                <div class="footer-title">
                  <h4 class="title">
                    Liens rapides
                  </h4>
                </div>
                <ul class="link">
                  <li>
                    <a href="./assistance">
                      ⛑ Assistance
                    </a>
                  </li>
                  <li>
                    <a href="./cgu">
                      ℹ️ Conditions Générales d'Utilisation
                    </a>
                  </li>
                  <li>
                    <a href="./accueil">
                      🧪 Se connecter
                    </a>
                  </li>
                </ul>
              </div> <!-- footer wrapper -->
              <!--
              <div class="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                <div class="footer-title">
                  <h4 class="title">
                    Resources
                  </h4>
                </div>
                <ul class="link">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Page</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div> --><!-- footer wrapper -->
            </div> <!-- footer link -->
          </div>
          <div class="col-lg-3 col-md-5 col-sm-5">
            <div class="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div class="footer-title">
                <h4 class="title">
                  Nous contacter
                </h4>
              </div>
              <ul class="contact">
                <li>+(33) 6 04 17 41 84</li>
                <li>contact@elixcir.fr</li>
                <li>www.elixcir.fr</li>
                <li>6 Boulevard Dubreuil<br>91400 Orsay</li>
              </ul>
            </div> <!-- footer contact -->
          </div>
        </div> <!-- row -->
      </div> <!-- footer widget -->
      <div class="footer-copyright">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright copyright-content d-sm-flex justify-content-between">
              <p class="text" style=" width: 100%; text-align: center">
                © {{ new Date().getFullYear() }} — <span class="logo-font">eliXcir</span>
              </p>
            </div> <!-- copyright -->
          </div>
        </div> <!-- row -->
      </div> <!-- footer copyright -->
    </div> <!-- container -->
    <Particles
      id="particles-2"
      class="particles"
      url="particles.json"
    />
  </footer>
</template>

<script>
import Particles from 'particles.vue'
import Vue from 'vue'
import Airtable from 'airtable'

Vue.use(Particles)

export default {
  data () {
    return {
      email: null,
      subscribed: false
    }
  },
  methods: {
    subscribe () {
      const base = new Airtable({ apiKey: 'keyyFhMUWelwen39k' }).base('appRTqlYCnZtf8k8O')

      const $this = this
      const email = $this.email
      base('Customers').create(
        { Email: email }, function (err, record) {
          if (err) {
            console.error(err)
            return
          }
          console.log(record.getId())
          $this.email = null
          $this.subscribed = true
        })

      // Redirect to more information form
      window.open('https://airtable.com/shr6On9zip6VBsCT1?prefill_Email=' + email, '_blank').focus()
    }
  }
}
</script>

<style scoped>
.bg_cover {
  background-image: url('~assets/basic/assets/images/footer-bg.svg');
}

.storeLogo {
  max-width: 60vw;
  margin: 0 auto;
  padding: 12px 15px 0 15px;
}
</style>
