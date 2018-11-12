<template>
  <div class="section">
    <header class="level bd-structure-item bd-is-structure-container" title="level">
    <div class="level-left bd-structure-item" title="level-left">
      <div class="level-item">
       <h1 class="title">Blog Posts</h1>
      </div>
      
    </div>
    <div class="level-right bd-structure-item" title="level-right">
      <buttonAdd :article="article" />
    </div>
  </header>     
    <ul class="">
       <ListingCard v-for="(article, key, index) in articles" :article="article" :key="article.id" />
    </ul>    
  </div>
</template>

<script>
import fetch_data from '../firebase-init'
import buttonAdd from '../components/buttons/buttonAdd'
import ListingCard from '../components/ListingCard'

export default {
  mixins: [fetch_data],
      created () {    
      this.fetchData('articles')
    },
  components: { buttonAdd, ListingCard },

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
<<<<<<< HEAD

=======
    mixins: [fetch_data],
    created () {    
      this.fetchData('articles')
      var paths = {
        '/dashboard/posts/': 'articles'
      }
      vm.singleFetchData($route.meta.postType);
    },
>>>>>>> 42887c4505b5fadf7f05cfe0a362194d5c31f9e5
    methods: {

  },
  props: {
    article: Object
  }

}
</script>