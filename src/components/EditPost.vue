<template>
  <div>
    <ul class="reptileList">
      <li v-for="article in articles">
        <h1 class="title">Edit Post - {{article.title}}</h1> 
        <p>{{article.excerpt}}</p>
        ID: {{article.id}}
         <form id="edit-post" class="" v-on:submit.prevent="editPost">
      <input class="input" type="text" placeholder="Title" v-model="article.title" required>
      <textarea class="input" type="text" placeholder="Excerpt" v-model="article.excerpt" required></textarea>
      <div class="field is-grouped">
  <div class="control">
    <button class="button is-primary is-rounded" @click="editPost(article)">Edit</button>
  </div>
</div>
    </form>
      </li>
    </ul>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { firestore } from '../main'
  export default {
  name: 'EditPost',
    data () {
    return {
      loading: false,
      articles: [],
      error: null,
    }
    
  },
  created() {     
    this.fetchData()

  },
    watch: {
    '$route': 'fetchData'
  },
  methods: {
    editPost: function(article) {
    var selff = this; 
    var current_article = firestore.collection("articles").doc(article.id);
    current_article.set({
        title: article.title,
        excerpt: article.excerpt,
    })
    .then(function() {
      alert('Success');
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });

    },
    fetchData () {
      this.error = null
      this.loading = true
      var selff = this;
      firestore.collection('articles').where('title','==', selff.$route.params.id).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var obj = doc.data();
            obj['id'] = doc.id;
            selff.articles.push(obj);
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