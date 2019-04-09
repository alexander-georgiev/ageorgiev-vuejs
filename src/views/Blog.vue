<template>
  <section id="blog">
    <div class="container">
        <div class="columns">
          <div class="column  is-two-thirds">
             <router-view></router-view>
          </div>
          <router-view name="sidebar"></router-view>
        </div>
      </div>
  </section>
</template>
<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    name: 'blog',
    components: {
      MainLayout      
    },
  }
</script>