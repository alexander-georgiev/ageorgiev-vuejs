<template>
  <div class="container">
  <div class="row">
    <div class="loading fa-3x" v-if="loading">
        <i class="fas fa-spinner fa-spin"></i>
    </div>
  <h2>Post "{{ $route.params.id }}"</h2> 

    <div class="col-sm-12" v-for="(article, key, index) in articles">
      <div class="post">

        <img class="card-img-top" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title"> {{ article.title }}</h3>
          <p class="card-text">{{ article.excerpt }}</p>

        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
 import firebase from 'firebase'
export default {
  name: 'SingleBlog',
  components: {
      
    },

  data () {
    return {
      loading: false,
      error: null
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
      this.$binding("articles", firebase.firestore().collection("articles").where('title', '==', this.$route.params.id)).then((articles) => {
        // console.log(this.articles)
        this.loading = false   
    })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
<style>
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