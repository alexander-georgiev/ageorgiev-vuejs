<template>
  <div class="section">
    <header class="level bd-structure-item bd-is-structure-container" title="level">
    <div class="level-left bd-structure-item" title="level-left">
      <div class="level-item">
       <h1 class="title">Blog Posts</h1>
      </div>
      
    </div>
    <div class="level-right bd-structure-item" title="level-right">
      <router-link :to="{ name: 'AddPost' }" class="button is-primary">Add new</router-link>
    </div>
  </header>     
    <ul class="">
      <li class="post card m-b-md" v-for="(article, key, index) in articles">
          <header class="card-header">
            <p class="card-header-title">
              {{ article.title }}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <router-link :to="{ name: 'EditPost', params: { id: article.title }}" class="button is-primary m-r-md">Edit</router-link> 
             <button class="button is-danger" @click="deletePost(article, 'articles')">Delete</button>
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
import fetch_data from '../firebase-init'

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
    mixins: [fetch_data],
    created () {    
      this.fetchData('articles')
    },
    methods: {

  }

}
</script>