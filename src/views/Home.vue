<template>
<section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Front-end Developer
      </h1>
      <h2 class="subtitle">
        Less is more
      </h2>
    </div>
  </div>
</section>
</template>

<script>
    import firebase from 'firebase'
  import { firestore } from '../main'
export default {
  name: 'home',
  data () {
    return {
      
    }
  }
}
</script>
<style>
.hero {
  min-height: 50vh;
  background: #eee;
}
</style>