<template>
  <section class="section columns">
    <div class="column is-three-quarters">
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
      <progress max="100" v-bind:value="uploadPercentage"></progress>
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
  </div>
          <div class="column">
<img class="profile-image" :src="userImage" />

  <div v-if="!userImage">
    <input type="file" round class="change-profile-image" @change="onFileChange" id="featured-image" accept="image/*" />
  </div>
  <div class="" v-else>
    <button @click="onUpload" class="is-pulled-left button is-primary">Upload Image</button>
    <button class="is-pulled-right button is-danger" @click="removeImage">Remove</button>    
  </div>
</div>
  </section>
</template>

<script>
import axios from 'axios'
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
      previewImage: null,
      selectedFile: null,
      uploadPercentage: 0,
      userImage: '',
      files: []      
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
        onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.selectedFile = event.target.files[0]
        this.createImage(files[0])
      },
      createImage(file) {
        var reader = new FileReader()
        var vm = this

        reader.onload = (e) => {
          vm.userImage = e.target.result
        }
        reader.readAsDataURL(file)
      },
       removeImage: function (e) {
         this.userImage = ''
       },
      onUpload() {
        const formData = new FormData()
        formData.append('featured-image', this.selectedFile, this.selectedFile.name)
        axios.post('/assets', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: progressEvent => {
            this.uploadPercentage = progressEvent.loaded / progressEvent.total;
          }
        });
      }
  }
}
</script>