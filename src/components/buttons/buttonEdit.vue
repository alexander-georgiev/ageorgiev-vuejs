<template>
  <div>
    <router-link v-if="$route.meta.adminListing === true" :to="{ name: 'EditPost', params: { id: article.title, postType: article.postType }}" class="button is-primary is-rounded m-r-md">Edit</router-link>
    <button v-else class="button is-primary is-rounded" @click="updatePost(article)">Update</button>
  </div>
</template>
<script>
import { firestore } from '../../main'
import firebase from 'firebase'
import alex_alert from '../../components/a-alert.js'
export default {
  name: 'button-edit',
  data() {
    return {
      articles: [],
      uploadercentage: '',
      previewImage: null,
    }
  },
  methods: {

    deleteFeatureImage() {
      var self = this;
      var storageRef = firebase.storage();
      var desertRef = storageRef.refFromURL(this.articles[0].featureImageURL)
      desertRef.delete().then(function() {
        self.articles[0].featureImageURL = '';
        alex_alert('Done', 'Your image has been deleted!', 'success');

      }).catch(function(error) {
        console.log(error);
      });

    },
    onUpload() {
      var storageRef = firebase.storage().ref(),
      thisRef = storageRef.child('images/'+this.article.postType+'/'+this.featuredImage.name).put(this.featuredImage),
        self = this;
      thisRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'

        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          self.uploadedPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          self.$emit('clicked', { uploadPercentage: self.uploadedPercentage, previewFeaturedImage: null })
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              break;
          }
        },
        function(error) {

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
        },
        function() {
          // Upload completed successfully, now we can get the download URL
          thisRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            self.article.featureImageURL = downloadURL;
            self.editPost(self.article);
          });
        });
    },
    editPost(article) {
      var self = this;
      // this.$emit('clicked', { uploadPercentage: 100, previewFeaturedImage: null })
      var postType = self.$route.params.postType;

      var current_article = firestore.collection(postType).doc(article.id);
      current_article.set({
          title: article.title,
          excerpt: article.excerpt,
          postType: postType,
          featureImageURL: article.featureImageURL,
        })
        .then(function() {
          // self.previewImage = null;
          alex_alert('Done', 'Your "' + self.article.title + '" has been updated.', 'success');
        })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
    },
    updatePost: function(article) {
      if (this.featuredImage !== null) {
        this.onUpload();
      } else {
        this.editPost(article);
      }
    },

  },
  props: {
    article: Object,
    featuredImage: File,
  },
}

</script>
