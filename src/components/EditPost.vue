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
</div>

      <div class="field is-grouped">
  <div class="control">
    <buttonEdit :article="article"/>
    <deleteButton :article="article"/>
    <button @click="testAlert" class="button is-info">Alert</button>
    <Alert :alert="alert"/>
  </div>
</div>
    </form>
      </li>
    </ul>
  </div>
          <div class="column">
            <progress max="100" v-bind:value="uploadPercentage" class="progress is-primary">0%</progress>
<img class="profile-image" :src="userImage" />

  <div v-if="!userImage">
    <input type="file" round class="change-profile-image" @change="onFileChange" id="featured-image" accept="image/*" />
  </div>
  <div class="" v-else>
    <button @click="onUpload" class="is-pulled-left button is-primary">Upload Image</button>
    <button class="is-pulled-right button is-danger" @click="removeImage">Remove</button>    
    <button class="is-pulled-right button is-danger" @click="deleteFeatureImage">Delete</button>
  </div>
</div>
  </section>
</template>

<script>
import axios from 'axios'
import fetch_data from '../firebase-init'
import buttonEdit from '../components/buttons/buttonEdit'
import deleteButton from '../components/buttons/deleteButton'
import firebase from 'firebase'
import Alert from '../components/Alert'
import alex_alert from '../components/a-alert.js'
  export default {
   mixins: [fetch_data],
   components: { deleteButton, buttonEdit, Alert },
    data () {
    return {      
      articles: [],
      error: null,
      featuredImage: null,
      featureImageUrl: '',
      uploadPercentage: 0,
      userImage: '',
      file: null,
      alert: {
        title: '',
        msg: '',
        status: '',
        show: '',
      }
    }    
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.singleFetchData(vm.$route.params.type);    
    next()
    });
  },
  watch: {
    '$route': 'singleFetchData'
  },
  methods: {
        testAlert() { 
          alex_alert('Done', 'Your image has been uploaded.', 'success');
        },
        onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.featuredImage = event.target.files[0]
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
        var storageRef = firebase.storage().ref(),
        thisRef = storageRef.child(this.featuredImage.name).put(this.featuredImage),
        self = this;
        thisRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'

    function(snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      self.uploadPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          break;
      }
    }, function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, function() {
    // Upload completed successfully, now we can get the download URL
    thisRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      self.featureImageUrl = downloadURL;
      self.alert.title = 'Success!';
          self.alert.msg = 'Your image has been uploaded.';
          self.alert.status = 'is-success';
          self.alert.show = true;
      
    });
  });

      },
      deleteFeatureImage() {
        var self = this;
        var storageRef = firebase.storage().ref();
        var desertRef = storageRef.child(this.featuredImage.name)
            desertRef.delete().then(function() {
              alert('deleted');
               self.alert.title = 'Success';
          self.alert.msg = 'Your image has been deleted.';
          self.alert.status = 'is-success';
          self.alert.show = true;
      
      }).catch(function(error) {
        console.log(error);
          });

      }
  }
}
</script>