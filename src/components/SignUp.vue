<template>
  <section id="sing-up">
    <div class="container">

      <h1>Sign Up</h1>
      <div class="field">
  <div class="control">
    <input type="text" class="input is-rounded" v-model="email" placeholder="Email">
  </div>
</div>
        <div class="control">
    <input type="password" class="input is-rounded" v-model="password" placeholder="Password">
  </div>
</div>
     <div class="control">
    <button class="button is-link" v-on:click="signUp">Sign Up</button>
  </div>


  </div>

  </section>
</template>

<script>
  import VueFirestore from 'vue-firestore'
import firebase from 'firebase'
export default {
  name: 'signup',
  data () {
    return {
   
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
  email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
    }
  }
}
</script>