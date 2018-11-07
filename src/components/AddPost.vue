<template>
  <section class="section">
    <h1 class="title">Add New </h1>
     <form id="edit-post" class="" v-on:submit.prevent="addPost">
      
       <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="title" required>
        </div>
      </div>
            <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea class="textarea" type="text" placeholder="Excerpt" v-model="excerpt" required></textarea>
        </div>
      </div>
      <div class="field is-grouped">
  <div class="control">
    <button class="button is-primary is-rounded">Add</button>
  </div>
</div>
    </form>
  </section>
</template>

<script>
  import { firestore } from '../main'
import firebase from 'firebase'
export default {
  name: 'AddPost',
  data() {
    return {
      loading: false,
      title: '',
      excerpt: '',
    }
  },
  created() {     

  },
  methods: {
    addPost: function() {  
      var selff = this;   
      firestore.collection("articles").add({
          title: selff.title,
          excerpt: selff.excerpt,
      })
      .then(function() {
          alert('Success');
          selff.$router.push('/dashboard/post/'+selff.title);
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
    } 
  }
}
</script>