<template>
<section id="contact" class="section">
	<div class="container">
	<h1 class="title">Contact</h1>
	<p class="subtitle">Get in Touch with me. You will receive a reply within 24 hours.</p>
	<form id="contact-form" class="" v-on:submit.prevent="addRequest">
<div class="columns">
	<div class="field column">
	  <label class="label">First Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="First Name" v-model="firstname" required>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field column">
  <label class="label">Last Name</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="text" placeholder="Last Name" v-model="lastname" required>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </div>
</div>

<div class="field column">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email address" v-model="email" required>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Please, be specific as possible. No limitations." v-model="msg" required></textarea>
  </div>
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-primary is-rounded">Submit</button>
  </div>
</div>
</form>
</div>
</section>
</template>

<script>
import VueFirestore from 'vue-firestore'
import firebase from 'firebase'

export default {
	name: 'contact',
	data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      msg: '',
    }
    
  },
	firestore() {
    return {
        requests: firebase.firestore().collection('requests')
    }
  },
	methods: {
  	addRequest: function() {
        this.$firestore.requests.add({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            msg: this.msg
        })
    }
  }
}
	
</script>