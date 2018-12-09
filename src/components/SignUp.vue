<template>
<section class="hero is-fullheight full-screen">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h1 class="title is-spaced"><i class="fas fa-edit"></i> Sign Up</h1>
        <div class="box">
          <figure class="avatar">
            <img src="@/assets/logo.svg" width="128" alt="Alexander Georgiev" />
                        </figure>
            <div class="field">
              <div class="control">
                <input type="text" class="input is-rounded" v-model="email" placeholder="Email">
              </div>
            </div>
            <div class="control">
              <input type="password" class="input is-rounded" v-model="password" placeholder="Password">
            </div>
            <button class="button is-block is-primary is-rounded is-fullwidth" v-on:click="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
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