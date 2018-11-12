<template>
  <div class="section">
    <header class="level bd-structure-item bd-is-structure-container" title="level">
    <div class="level-left bd-structure-item" title="level-left">
      <div class="level-item">
       <h1 class="title">Pages</h1>
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
import ListingCard from '../components/ListingCard'
import buttonAdd from '../components/buttons/buttonAdd'
export default {
  name: 'admin-pages',
  mixins: [fetch_data],
    created () {    
   this.fetchData('pages')
  },
  components: {buttonAdd, ListingCard },
  data () {
    return {
      loading: false,
      error: null,
      articles: [],
      
    }
    
  },
 
  metaInfo: {
    titleTemplate: 'Pages - %s',
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
    props: {
    article: Object
  }

}
</script>