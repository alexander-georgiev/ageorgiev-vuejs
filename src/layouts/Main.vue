<template>
  <header id="header">
    <div class="container">
     <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item not-affect">Alexander Georgiev</router-link>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" id="navbarNav">    
        <div class="navbar-end">
            <router-link to="/" class="navbar-item" exact>Home</router-link>
          

            <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
          

            <router-link to="/testimonials" class="navbar-item">Testimonials</router-link>
          

            <router-link to="/about" class="navbar-item">About</router-link>
          

            <router-link to="/blog" class="navbar-item">Blog</router-link>
          

            <router-link to="/contact" class="navbar-item">Contact</router-link>          
            <router-link v-if="!user" to="/login" class="navbar-item">Login</router-link>
            <router-link v-if="!user" to="/signup" class="navbar-item">Sign Up</router-link>
             
            <div class="dropdown is-right  is-hoverable navbar-item" v-if="user">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span><i class="far fa-user-circle"></i></span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <router-link v-if="user" to="/dashboard" class="navbar-item">Dashboard</router-link>
                    <router-link v-if="user" to="/dashboard/profile" class="navbar-item">Profile</router-link>
                    <router-link v-if="user" to="/dashboard/posts" class="navbar-item">Posts</router-link>
                    <button v-if="user" class="navbar-item button is-primary is-fullwidth" v-on:click="logout">Logout</button>             
                  </div>
                </div>
              </div>
            </div>    
        </div>
      </div>
      </nav>
    </div>
  </header>   
</template>

<script>
  import firebase from 'firebase'
  import VueRouter from 'vue-router'
  export default {
    name: 'MainLayout',
    components: {
      VueRouter
    },
    data() {
      return {
      }
    },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
      setUser: function() {
        this.$store.dispatch('setUser');
      },
      logout: function() {
        firebase.auth().signOut().then(() => {
          alert('Signed out!');
          this.$router.replace('login');
        })
      }
    },
      created() {
    this.setUser();
  },
  }
</script>

<style lang="scss">
#header {border-bottom: 1px solid #eee;
.dropdown button {border: 0;}
}

</style>