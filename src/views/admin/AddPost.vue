<template>
  <section class="section">
    <h1 class="title">Add New </h1>
     <form id="add-post" class="" v-on:submit.prevent="">
    
       <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="article.title" required>
        </div>
      </div>
            <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea class="textarea" type="text" placeholder="Excerpt" v-model="article.excerpt" required></textarea>
        </div>
      </div>
      <div class="field is-grouped">
  <div class="control">
    <buttonAdd :article="article"/>
  </div>
</div>
    </form>
  </section>
</template>

<script>
import { firestore } from '../../main'
import firebase from 'firebase'
import buttonAdd from '../../components/buttons/buttonAdd'

export default {
  name: 'AddPost',
  components: { buttonAdd },
  data() {
    return {
      article: {}
      
    }
  },
  created() {     

  },
  methods: {

  }
}
</script>