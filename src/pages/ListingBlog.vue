<template>
  <section id="articles" class="">
    <div class="row">
          <div class="loading fa-3x" v-if="loading">
        <i class="fas fa-spinner fa-spin"></i>
    </div>
      <div class="col-sm-6 " v-for="(article, key, index) in articles">
        <article v-bind:id="'post-' + article.title">
          <div class="post card">
            <img class="card-img-top" alt="Card image cap">
          <div class="card-body">
            <h3 class="card-title">{{ article.title }}</h3>
            <p class="card-text">{{ article.excerpt }}</p>
             <router-link :to="{ name: 'SingleBlog', params: { id: article.title }}" class="btn btn-primary">Read</router-link>
              </div>
            </div>
        </article>
      </div>

    </div>
          
  </section>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'listingblog',
  data () {
    return {
      loading: false,
      error: null,
    }
    
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.loading = true
      this.$binding("articles", firebase.firestore().collection("articles"))
      .then((articles) => {
        this.loading = false
    })
    }
  }

}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loading {
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transition: .3s all ease;
    transition: .3s all ease;
    left: 0;
    bottom: 0;
    text-align: center;
}
.loading > svg {
      position: relative;
    top: 50%;
}
</style>