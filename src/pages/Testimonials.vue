<template>
  <section id="testimonials" class="container">

  <h2>Testimonials</h2>
  <div class="row">

<div class="col-sm-6 " v-for="(testimonial, index) in testimonials">
  <div class="post card">
   <img class="card-img-top" alt="Card image cap">
<div class="card-body">

 <h3 class="card-title"> {{ testimonial.title }}</h3>
    <p class="card-text">{{ testimonial.excerpt }}</p>

    </div>
    <router-link :to="{ name: 'SingleTestimonial', params: { id: testimonial.title }}" class="btn btn-primary">Read</router-link>
</div>

    </div>
    </div>
    </div>
  </section>

</template>

<script>
 import MainLayout from '../layouts/Main.vue'
 import VueFirestore from 'vue-firestore'
import firebase from 'firebase'

export default {
  name: 'testimonials',
  data () {
    return {
      loading: false,
      error: null,
    }
    
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.loading = true
      this.$binding("testimonials", firebase.firestore().collection("testimonials"))
      .then((testimonials) => {
        this.loading = false
    })
    }
  }

}
</script>
<style>

</style>