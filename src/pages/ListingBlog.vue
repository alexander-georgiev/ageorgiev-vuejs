<template>
  <section id="articles" class="section">
    <div class="row">
          <div class="loading fa-3x" v-if="loading">
            <i class="fas fa-spinner fa-spin"></i>
          </div>
<h1 class="title">Blog</h1>
<div class="post card" v-for="(article, key, index) in articles" v-bind:class="[colorNav === true ? 'asd' : 'ddd']">
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
      loading: false,
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
    '$route' () {
      if (this.$route.name == 'listingblog') {
        this. colorNav = true
      }
      else {
        this. colorNav = false
      }  
    }
  },
  methods: {
    fetchData () {
      this.error = null
      this.loading = true
      var selff = this;
      firestore.collection("articles").get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(selff);
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