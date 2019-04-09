<template>
  <div class="container">
    <div class="row">
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
 import fetch_data from '../firebase-init'
export default {
  name: 'SingleBlog',
  mixins: [fetch_data],
  components: {
      
    },

  data () {
    return {
articles: []
    }
    
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.singleFetchData('articles');
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
  }
}
</script>