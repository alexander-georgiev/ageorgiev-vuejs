<template>
  <section id="profile" class="section">
      <h1 class="title">Edit Profile</h1>           <button class="button is-block is-danger is-large is-fullwidth" v-on:click="logout">Logout</button>
      <div class="columns">
        
        <div class="column is-three-quarters">
           
        <div class="field-body">
        <div class="field">
          <label class="label">Display Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Text input" v-model="displayName">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>   
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email input" v-model="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>          
        </div>
        
        </div>
        
        <div class="field is-grouped m-t-md">
          <div class="control">
            <button class="button is-primary" v-on:click="edit_profile">Submit</button>
          </div>
          <div class="control">
            <button class="button is-light">Cancel</button>
          </div>

        </div>
      </div>
      <div class="column">
        <div v-if="photoURL">
          <figure class="image"><img class="featured-image" :src="photoURL" /></figure>
        </div>
          <div class="file m-t-md">
            <label class="file-label">
              <input type="file" class="file-input" @change="processFile" id="featuredImage" accept="image/*" />
              <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose an image
              </span>
              </span>
            </label>
          </div>

      </div>
    </div>

      
  </section>
</template>
<style lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
<script>
import firebase from 'firebase'
export default {
  name: 'profile',
  props: ['slug'],
  data () {
    return {
         user: {},
         selectedFile: null,
         percentage: 0,
         photoURL: null,
         email: '',
         displayName: '',
    }
  },
  created() {    
    if(this.$root.user) { 
      this.displayName = this.$root.user.displayName; 
      this.email = this.$root.user.email; 
      this.photoURL = this.$root.user.photoURL; 
      this.userId = this.$root.user.uid; 
    } 
  },
  watch: {
    '$route': 'this.$root.user'
  },
  methods: {
      processFile(e) {
        var self = this;
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('/users/' + file.name);
        var task = storageRef.put(file);
        var user = firebase.auth().currentUser;        

         //Update Progress Bar 
         task.on('state_changed', 

         function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
            self.percentage = percentage;       
         },

         function error(err){
          alert(err);
         },

         function complete(){
            task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            self.photoURL = downloadURL;
          });
            alert('rdy');
         }
         )
      },
      edit_profile: function() {
        var user = firebase.auth().currentUser;
        self = this;
        user.updateProfile({
          displayName: self.displayName,
          email: self.email,
          photoURL: self.photoURL,
        }).then(function() {
          alert('yes');          
        }).catch(function(error) {
          // An error happened.
        });
      },
      logout: function() {
        firebase.auth().signOut().then(() => {
          alert('Signed out!');
          this.$router.replace('login');
        })
      }
    }  
}
</script>