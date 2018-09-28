<template>
  <section id="profile" class="section">
    <div class="">
      <h1 class="title">Edit Profile</h1>
      <div class="columns">
        
        <div class="column">
           
          <div class="field-body">
        <div class="field">
          <label class="label">Display Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Text input" name="last_name" v-model="last_name">
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
        <form enctype="multipart/form-data" novalidate>
          <h1>Upload images</h1>
          <div class="dropbox">
            <input type="file" @change="processFile()">
           
          </div>
        </form>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" v-on:click="edit_profile">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
          <button class="button is-block is-info is-large is-fullwidth" v-on:click="logout">Logout</button>
        </div>
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
  data () {
    return {
         user: {},
         name: '',
         selectedFile: null
    }
  },

  created() {                        
    this.user = firebase.auth().currentUser; 
    if(this.user) { 
      this.last_name = this.user.displayName; 
      this.email = this.user.email; 
      this.photo = this.user.photoURL; 
      this.userId = this.user.uid; 
    } 
  },

  methods: {
      processFile() {
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref(user + '/profilePicture/' + file.name);
        var task = storageRef.put(file);
        var user = firebase.auth().currentUser;        

         //Update Progress Bar 
         task.on('state_changed', 

         function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
            uploader.value = percentage;

            //if percentage = 100
            //$(".overlay").hide();         
         },

         function error(err){

         },

         function complete(){
            alert('rdy');
         }
         )
      },
      edit_profile: function() {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.last_name,
          email: this.email,
          photoURL: this.photo,
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