<template>
  <section id="testimonials" class="container">

  <h1 class="title">Testimonials</h1>
  <div class="columns">
<div class="column is-one-third " v-for="(testimonial, index) in testimonials">
  <div class="post card">
   <img class="card-img-top" alt="Card image cap">
<div class="card-body">

 <h3 class="card-title">     <router-link :to="{ name: 'SingleTestimonial', params: { id: testimonial.title }}" class="btn btn-primary">{{ testimonial.title }}</router-link></h3>
    <p class="card-text">{{ testimonial.excerpt }}</p>

    </div>
</div>

    </div>
    </div>
    </div>
  </section>

</template>

<script>
 import MainLayout from '../layouts/Main.vue'
 import { firestore } from '../main'
import firebase from 'firebase'

export default {
  name: 'testimonials',
  data () {
    return {
      loading: false,
      testimonials: [],
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
       this.error = null
      this.loading = true
      var selff = this;
      firestore.collection("testimonials").get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            selff.testimonials.push(doc.data());         
        });
        this.loading = false
      })
      .catch(function(error) {
          selff.error = error;
      });
    }
  }

}
</script>
<style>

</style>