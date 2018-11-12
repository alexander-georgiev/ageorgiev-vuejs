<template>
  <div>
  <li class="post card m-b-md">
          <header class="card-header">
            <p class="card-header-title">
              {{ article.title }}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <!-- <router-link :to="{ name: 'EditPost', params: { id: article.title, type: article.postType }}" class="button is-primary m-r-md">Edit</router-link>  -->
              <buttonEdit :article="article" />
              <buttonDelete :article="article" />
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
</div>
</template>
<script>
import buttonEdit from '../components/buttons/buttonEdit'
import buttonDelete from '../components/buttons/deleteButton'
export default {
  components: { buttonDelete, buttonEdit },
  data () {
    return {
      articles: [],
    }
  },

  props: {
    article: Object
  }, 

}
</script>