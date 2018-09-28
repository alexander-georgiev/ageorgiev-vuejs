<template>
  <div>   
     <form id="edit-post" class="" v-on:submit.prevent="addPost">
      <input class="input" type="text" placeholder="Title" v-model="title" required>
      <textarea class="input" type="text" placeholder="Excerpt" v-model="excerpt" required></textarea>
      <div class="field is-grouped">
  <div class="control">
    <button class="button is-primary is-rounded">Add</button>
  </div>
</div>
    </form>
  </div>
</template>

<script>
import VueFirestore from 'vue-firestore'
import firebase from 'firebase'
export default {
  name: 'AddPost',
  firestore() { 
    return {
        articles: firebase.firestore().collection('articles')
    }
  },
  created() {     
    this.fetchData()
  },
  methods: {
      addPost: function() {     
        this.$firestore.articles.doc(this.title).set({
            title: this.title,
            excerpt: this.excerpt
        }).then(function() {
            alert("Article successfully written!");
        });;
    } 
  }
}
</script>