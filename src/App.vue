<template>

  <main id="app">
    <loading></loading>
    <nav-main v-if="$route.meta.requiresAuth !== true"></nav-main>  
    <router-view></router-view>
    <div v-if="$route.name == 'home'" class="bd-lead">
      <div class="container">          
        <router-view name="blog"></router-view>
        <router-view name="contact"></router-view>
      </div>
    </div>
    <footer-main></footer-main>      
  </main>
</template>

<script>
import MainLayout from './layouts/Main.vue';
import Footer from './layouts/Footer.vue';
import Loading from './components/Loading.vue';

export default {
  components: {
    navMain: MainLayout,
    footerMain: Footer,
    loading: Loading,
  },   
  metaInfo: {
    title: 'Alexander Georgiev - Front-end Developer', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    },
    meta: [
      { charset: 'utf-8' },
      {
        'property': 'og:locale',
        'content': 'en_US',
        'template': chunk => `${chunk}`, //or as string template: '%s - My page',
        'vmid': 'og:locale'
      },
      {
        'property': 'og:type',
        'content': 'website',
        'template': chunk => `${chunk}`, //or as string template: '%s - My page',
        'vmid': 'og:type'
      },
      {
        'property': 'og:title',
        'content': 'Front-end Developer',
        'template': chunk => `${chunk}`, //or as string template: '%s - My page',
        'vmid': 'og:title'
      },
      {
        'property': 'og:description',
        'content': 'Web Developer &amp; UI/UX Designer. Minimalist. "Less is More"',
        'template': chunk => `${chunk}`, //or as string template: '%s - My page',
        'vmid': 'og:description'
      },
      {
        'property': 'fb:app_id',
        'content': '398187783856465',
        'template': chunk => `${chunk}`, //or as string template: '%s - My page',
        'vmid': 'fb:app_id'
      },     

    ]
  },
  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  },
  created() {
    // when the app is created run the set user method
    // this uses Vuex to check if a user is signed in
    // check out mutations in the store.js file
    this.setUser();

  }
};
</script>