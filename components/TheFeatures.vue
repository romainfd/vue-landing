<template>
  <section id="features" class="services-area pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="section-title text-center pb-40">
            <div class="line m-auto" />
            <h3 class="title">
              Simple et efficace, <span class="logo-font">eliXcir</span><span> vous apporte sérénité et optimisation pour vos financements !</span>
            </h3>
          </div> <!-- section title -->
        </div>
      </div> <!-- row -->
      <div class="row justify-content-center">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-lg-4 col-md-7 col-sm-8"
        >
          <div class="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
            <div class="services-icon">
              <img class="shape" src="~/assets/basic/assets/images/services-shape.svg" alt="shape">
              <img class="shape-1" :src="'basic/assets/images/services-shape-' + (index + 1) + '.svg'" alt="shape">
              <v-icon class="ml-n1">
                {{ feature.icon }}
              </v-icon>
            </div>
            <div class="services-content mt-30">
              <h4 class="services-title">
                {{ feature.name }}
              </h4>
              <p class="text" v-html="feature.content" />
              <v-divider style="margin: 30px 0;" />
              <p class="benefit">
                {{ feature.end }}
              </p>
              <!--
                <a class="more" href="#">Learn More <v-icon>mdi-chevron-right</v-icon></a>
              -->
            </div>
          </div> <!-- single services -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      features: [{
        icon: 'mdi-briefcase',
        name: 'Accessible',
        content: "Accessible sur ordinateur et téléphone, <span class='logo-font'>eliXcir</span> permet à vos collaborateurs de rentrer facilement leurs heures et leurs dépenses de R&amp;D.",
        end: 'Fini les galères de collecte à la dernière minute ! ⏱'
      }, {
        icon: 'mdi-cog-outline',
        name: 'Robuste',
        content: "Construit avec des experts-comptables, <span class='logo-font'>eliXcir</span> gère automatiquement tous les calculs et règles comptables pour vous.",
        end: "La sérénité d'un dossier complet et correct en un clic ! 👌"
      }, {
        icon: 'mdi-flash-outline',
        name: 'Puissant',
        content: "<span class='logo-font'>eliXcir</span> suit en temps réel vos subventions et votre CIR pour vous permettre d'optimiser vos financements et d'accélérer la consitution de vos dossiers.",
        end: 'Des financements optimisés et une récupération des fonds facilitée 💰'
      }]
    }
  }
}
</script>

<style>
.benefit {
  font-weight: 600;
}
</style>
