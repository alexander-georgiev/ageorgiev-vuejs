<template>
  <div class="container">
  <div class="row">
      <div class="loading fa-3x" v-if="loading">
        <i class="fas fa-spinner fa-spin"></i>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div class="col-sm-12" v-for="(data, index) in testimonials">
      <div class="post card">
        <img class="card-img-top" alt="Card image cap">
        <div class="card-body">
          <h3 class="card-title"> {{ data.title }}</h3>
          <p class="card-text">{{ data.excerpt }}</p>

        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
 
export default {
  
  components: {
      
    },
  data () {
    return {
      loading: false,
      error: null
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
      this.$binding("testimonials", firebase.firestore().collection("testimonials").where('title', '==', this.$route.params.id)).then((testimonials) => {
        // console.log(this.testimonials)
        this.loading = false   
    })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
<style>

</style>