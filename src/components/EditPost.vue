<template>
  <section class="section">
    <ul class="reptileList">
      <li v-for="article in articles">
        <h1 class="title">Edit Post - {{article.title}}</h1> 
        ID: {{article.id}}
         <form id="edit-post" class="" v-on:submit.prevent="editPost">
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
    <button class="button is-primary is-rounded" @click="editPost(article)">Update</button>
    <button class="button is-danger is-rounded" @click="deletePost(article)">Delete</button>
  </div>
</div>
    </form>
      </li>
    </ul>
  </section>
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
    deletePost: function(article) {          
      var jobskill_query = firestore.collection('articles').where('title','==', article.title);
      jobskill_query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
      });
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