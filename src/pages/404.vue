<template>
<section id="not-found" class="container text-center">
	<i class="fas fa-exclamation-circle fa-5x"></i>
    <h1 class="centered">404 Page Not Found</h1>
    <p>Go to back to <router-link to="/">Home</router-link> or search instead.</p>
    <router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
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
<style>
#not-found {
	min-height: calc(100vh - 161px);
}
</style>