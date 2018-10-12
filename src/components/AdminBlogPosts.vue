<template>
  <div>
    <h1 class="title">Blog Posts</h1> <router-link :to="{ name: 'AddPost' }" class="button is-primary">Add new</router-link>
    <ul class="">
      <li class="post card m-b-md" v-for="(article, key, index) in articles">
          <header class="card-header">
            <p class="card-header-title">
              {{ article.title }}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <router-link :to="{ name: 'EditPost', params: { id: article.title }}" class="button is-primary m-r-md">Edit</router-link> 
             <button class="button is-danger" @click="deletePost(article)">Delete</button>
            </a>
          </header>
            <div class="card-content">
              <div class="content">
                <p>{{ article.excerpt }}</p>               
              </div>
            </div>
            <footer class="card-footer">
              
              
            </footer>
      </li>
    </ul>    
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { firestore } from '../main'
export default {
  name: 'adminblogposts',
  data () {
    return {
      loading: false,
      articles: [],
      error: null,
    }
    
  },
   metaInfo: {
      titleTemplate: 'Blog Posts - %s',
      meta: [
      { charset: 'utf-8' },
      {
        'property': 'og:title',
        'content': 'Front-end Developer',
        'template': chunk => `${chunk} - %s`, //or as string template: '%s - My page',
        'vmid': 'og:title'
      }
    ]
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
    },
    deletePost: function(article) {          
      var jobskill_query = firestore.collection('articles').where('title','==', article.title);
      jobskill_query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
      });
    });
    }
  }

}
</script>