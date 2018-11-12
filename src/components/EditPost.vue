<template>
  <section class="section">
    <ul class="reptileList">
      <li v-for="article in articles">
        <h1 class="title">Edit - {{article.title}}</h1> 
         <form id="edit-post" class="" v-on:submit.prevent="">
<!--           <input class="input hidden" type="text" placeholder="Title" v-model="article.postType" required> -->
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="article.title" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="article.excerpt" required></textarea>
        </div>
      </div>
      <div class="field is-grouped">
  <div class="control">
    <buttonEdit :article="article"/>
    <deleteButton :article="article"/>
  </div>
</div>
    </form>
      </li>
    </ul>
  </section>
</template>

<script>
import fetch_data from '../firebase-init'
import buttonEdit from '../components/buttons/buttonEdit'
import deleteButton from '../components/buttons/deleteButton'
  export default {
   mixins: [fetch_data],
   components: { deleteButton, buttonEdit },
    data () {
    return {      
      articles: [],
      error: null,
    }
    
  }, 
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.singleFetchData(vm.$route.params.type);    
    next()
    });
  },

  created() {       

  },
  watch: {
    '$route': 'singleFetchData'
  },
  methods: {

  }
}
</script>