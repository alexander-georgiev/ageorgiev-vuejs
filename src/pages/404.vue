<template>
<section id="not-found" class="hero is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <i class="fas fa-exclamation-circle fa-5x"></i>
      <h1 class="title is-spaced">
        404 Page Not Found
      </h1>
      <h2 class="subtitle">Go to back to <router-link to="/">Home</router-link></h2>
    </div>
  </div>	
</section>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    },
  }
</script>