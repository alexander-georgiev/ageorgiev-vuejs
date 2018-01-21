<template>
<div id="wrapper">
<header id="header">
<div class="container">
 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item"><router-link to="/">Alexander Georgiev</router-link></a>
<button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="navbar-menu" id="navbarNav">
      <div class="navbar-end">

          <router-link to="/" class="navbar-item" exact>Home</router-link>
        

          <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
        

          <router-link to="/testimonials" class="navbar-item">Testimonials</router-link>
        

          <router-link to="/about" class="navbar-item">About</router-link>
        

          <router-link to="/blog" class="navbar-item">Blog</router-link>
        

          <router-link to="/contact" class="navbar-item">Contact</router-link>
        
      </div>
    </div>
    </div>
  </nav>
  </div>
  </header>

  <router-view/>
  
  <div v-if="$route.name == 'home'">
    <div class="container">
      <router-view name="testimonials"></router-view>
      <router-view name="blog"></router-view>
    </div>
  </div>

<!--   <div v-if="$route.name === 'blog'">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <router-view class="view" name="listingblog"></router-view>
      </div>
        <div class="col-md-3">
          <router-view class="view" name="sidebar"></router-view>
        </div>
      </div>
    </div>
  </div> -->
  
  <footer id="footer"><div class="container">Alexander Georgiev - Copyright 2015-2018® Terms and Conditions
</div></footer>
</div>
</template>

<script>
  import VueRouter from 'vue-router'

  export default {
    name: 'MainLayout',
    components: {
      VueRouter
    }
  }
</script>

<style lang="scss">
#header {border-bottom: 1px solid #eee;}
#footer {background: #222; padding: 2rem 0; color: #fff;}
</style>