<template>
  <section id="blog" class="blog-area pt-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-title pb-35">
            <div class="line" />
            <h3 class="title">
              <span>Our Recent</span> Blog Posts
            </h3>
          </div> <!-- section title -->
        </div>
      </div> <!-- row -->
      <div class="row justify-content-center">
        <div
          v-for="blog in blogs"
          :key="blog.title"
          class="col-lg-4 col-md-7"
        >
          <div class="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
            <div class="blog-image">
              <img :src="blog.image" :alt="'Blog post about ' + blog.title">
            </div>
            <div class="blog-content">
              <ul class="meta">
                <li>Posted By: <a href="#">{{ blog.author }}</a></li>
                <li>{{ blog.date }}</li>
              </ul>
              <p class="text">
                {{ blog.title }}
              </p>
              <a class="more" href="#">Learn More <v-icon>mdi-chevron-right</v-icon></a>
            </div>
          </div> <!-- single blog -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      blogs: [{
        image: require('~/assets/basic/assets/images/blog-1.jpg'),
        author: 'Admin',
        date: '23 mars 2021',
        title: '1. Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.'
      }, {
        image: require('~/assets/basic/assets/images/blog-2.jpg'),
        author: 'Admin',
        date: '21 juin 2021',
        title: '2. Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.'
      }, {
        image: require('~/assets/basic/assets/images/blog-3.jpg'),
        author: 'Admin',
        date: '11 septembre 2021',
        title: '3. Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.'
      }]
    }
  }
}
</script>
