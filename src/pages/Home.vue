<template>

<section id="hero">Front-end Developer</section>
</template>

<script>

export default {
  name: 'home',
  components: {

    },
  firestore () {
    return {
      articles: db.collection('articles')
    }
  },
  data () {
    return {
      articles: [

      ]
    }
  }
}
</script>
<style>
#hero {
  min-height: 50vh;
}
</style>