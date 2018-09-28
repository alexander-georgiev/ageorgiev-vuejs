<template>
  <div>
    <h1 class="title">Post "{{ $route.params.id }}"</h1> 
    <ul class="reptileList">
      <li v-for="article in articles">
         <form id="edit-post" class="" v-on:submit.prevent="editPost(article)">
      <input class="input" type="text" placeholder="Title" v-model="title" required>
      <textarea class="input" type="text" placeholder="Excerpt" v-model="excerpt" required></textarea>
      <div class="field is-grouped">
  <div class="control">
    <button class="button is-primary is-rounded">Edit</button>
  </div>
</div>
    </form>
      </li>
    </ul>
  </div>
</template>

<script>
import VueFirestore from 'vue-firestore'
import firebase from 'firebase'
export default {
  name: 'EditPost',
  firestore() { 
    return {
        articles: firebase.firestore().collection('articles')
    }
  },
  created() {     
    this.fetchData()
  },
  methods: {
    editPost: function(article) {     
        this.$firestore.articles.doc(article['.key']).update({
            title: this.title,
            excerpt: this.excerpt,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    },
    fetchData () {
      this.loading = true
      this.$binding("articles", firebase.firestore().collection("articles").where('title', '==', this.$route.params.id)).then((articles) => {
        console.log(this.articles)
        this.loading = false   
    })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>