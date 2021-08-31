<template>
  <div>
    <TheNavbar />
    <TheLanding />
    <TheFeatures />
    <TheAbout
      v-for="about in abouts"
      :key="about.title"
      :title="about.title"
      :content="about.content"
      :img="about.img"
      :right="about.right"
    />
    <TheFacts />
    <TheTestimonials />
    <TheBrands />
    <!-- <ThePosts /> -->
    <TheFooter />
    <BackToTopButton />
  </div>
</template>

<script>
// Animate CSS
import 'animate.css'
// Bootstrap CSS
require('~/assets/basic/assets/css/bootstrap.min.css')
// Default CSS
require('~/assets/basic/assets/css/default.css')
// Style CSS
require('~/assets/basic/assets/css/style.css')

export default {
  data () {
    return {
      abouts: [{
        title: "<span class='numbering'>1.</span> Collecter les données <span>simplement et efficacement</span>",
        content: "📱 Avec ses deux applications (<a href='https://apps.apple.com/us/app/elixcir/id1483622437?l=fr&amp;ls=1'>iPhone</a> et <a href='https://play.google.com/store/apps/details?id=fr.gmba.ovh.applix'>Android</a>) et son <a href='/accueil'>interface web</a>, <span class='logo-font'>eliXcir</span> offre une plateforme centralisée à vos collaborateurs pour saisir leurs temps et dépenses." +
          "<br>✅ En vérifiant les données à la saisie, <span class='logo-font'>eliXcir</span> garantit leur qualité." +
          "<br>📊 Habitué aux <em>Excel</em> ? Uploadez vos feuilles de temps pour bénéficier des vérifications et calculs d'<span class='logo-font'>eliXcir</span>.",
        img: require('~/assets/basic/assets/images/about1.svg'),
        right: false
      }, {
        title: "<span class='numbering'>2.</span> Pilotez vos financements <span>en temps réel</span>",
        content: "⚙️ Une fois temps et dépenses collectés, <span class='logo-font'>eliXcir</span> s'occupe de tous les calculs comptables pour vous." +
          '<br>👌 Grâce aux calculs temps réel et aux dashboards, pilotez vos financements avec efficacité.' +
          "<br>🤯 Exportez toutes les données saisies sur <span class='logo-font'>eliXcir</span> en un clic.",
        img: require('~/assets/basic/assets/images/about2.svg'),
        right: true
      }, {
        title: "<span class='numbering'>3.</span> Optimisez <span>et touchez vos financements</span>",
        content: "🚀 Avec la possibilité de modifier facilement les données saisies et le feedback des calculs en temps réel, optimisez vos financements n'a jamais été si facile." +
          "<br>💸 Grâce aux vérifications à la saisie et aux exports spécifiques CIR & subventions, <span class='logo-font'>eliXcir</span> vous permet de constituer des dossiers solides en un temps record !",
        img: require('~/assets/basic/assets/images/about3.svg'),
        right: false
      }]
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Poetsen';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/PoetsenOne-Regular.ttf') format('truetype');
}

.logo-font {
  font-family: 'Poetsen', serif;
}

a:hover .logo-font {
  text-decoration: underline;
}

.numbering {
  font-family: 'Poetsen', serif;
  color: #3E8C8C;
}

p.text a {
  color: #3E8C8C;
}

p.text a:hover, .footer-link a:hover {
  color: #D2BCE0 !important;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #3E8C8C;
}
</style>
