<template>
<section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h1 class="title is-spaced"><i class="fas fa-sign-in-alt"></i> Login</h1>
                    <div class="box">
                        <figure class="avatar">
                            <img src="@/assets/logo.svg" width="128" alt="Alexander Georgiev" />
                        </figure>
                    <!-- <form autocomplete="on"> -->
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="email" v-model="email" placeholder="Your Email" autofocus="" autocomplete="on">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input" type="password" v-model="password" placeholder="Your Password" autocomplete="on">
                                </div>
                            </div>
                            <div class="field">
                              <p class="control">
                                  <div class="b-checkbox is-primary">
                                      <input id="checkbox" class="styled" checked type="checkbox">
                                      <label for="checkbox">
                                          Remember Me
                                      </label>
                                  </div>
                              </p>
                            </div>
                          
                            <button class="button is-block is-primary is-fullwidth" v-on:click="login">Login</button>
                    <!-- </form> -->
                    </div>
                    <p class="has-text-grey">
                        <router-link to="signup">Sign Up</router-link> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                    </p>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            console.log(providerData);
          this.$router.replace('profile')
        },
        (err) => {
          alert('ops ' + err.message);
        }).catch(function(error) {
        
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      });
    }
  }
}
</script>
<style>
.hero {
  min-height: calc(100vh - 141px);
}
</style>