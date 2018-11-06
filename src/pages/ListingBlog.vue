<template>
  <section id="articles" class="section">
    <div class="row">          
      <h1 class="title">Blog</h1>
      <div class="post card" v-for="(article, key, index) in articles">
   <div class="card-image">
    <figure class="image">
      
    </figure>
  </div>
          <header class="card-header">
            <p class="card-header-title">
              {{ article.title }}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <router-link :to="{ name: 'EditPost', params: { id: article.title }}" class="button is-primary m-r-md">Edit</router-link> 
             <button class="button is-danger" @click="deletePost(article)" v-if="$route.name == 'listingblog'">Delete</button>
            </a>
          </header>
            <div class="card-content">
              <div class="content">
                <p>{{ article.excerpt }}</p>               
              </div>
            </div>
            <footer class="card-footer">
              
              
            </footer>
      </div> 
  </div>
          
  </section>

</template>

<script>
import firebase from 'firebase'
import { firestore } from '../main'
export default {
  name: 'listingblog',
  data () {
    return {
      articles: [],
      error: null,
      colorNav: false,
    }
    
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData',
  },
  methods: {
    fetchData () {
      this.error = null
      this.loading = true
      var selff = this;
      firestore.collection("articles").get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            selff.articles.push(doc.data());         
        });
        this.loading = false
    })
    .catch(function(error) {
        selff.error = error;
    });
    }
  }

}
</script>