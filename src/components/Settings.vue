<template>
  <div class="section">
    <header class="level bd-structure-item bd-is-structure-container" title="level">
    <div class="level-left bd-structure-item" title="level-left">
      <div class="level-item">
       <h1 class="title">{{$route.name}}</h1>
      </div>
      
    </div>
    <div class="level-right bd-structure-item" title="level-right">
      
    </div>

  </header>     
    <section>
      <form id="edit-post" class="" v-on:submit.prevent="">
      
        <!-- <inputField :data="settings.site_title" /> -->

        <inputField fieldType="text" targetFieldPath="settings.site_title"/>
            <div class="field">
        <label class="label">Site Description</label>
        <div class="control">
          <input class="input" type="text" placeholder="Excerpt" v-model="settings.site_description" required />
        </div>
      </div>
      <div class="field is-grouped">
  <div class="control">
    <button class="button is-primary is-rounded" @click="editPost(settings)">Update</button>
  </div>
</div>

    </form>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
import { firestore } from '@/main'
import inputField from '../components/Forms/inputField'

export default {
  name: 'general-settings',
  components: { inputField },
  data () {
    return {
      loading: false,
      settings: {},
      error: null,
    }
    
  },
  watch: {
    '$route': 'fetchData'
  },

   metaInfo: {
      titleTemplate: 'Blog Posts - %s',
      meta: [
      { charset: 'utf-8' },
      {
        'property': 'og:title',
        'content': 'Front-end Developer',
        'template': chunk => `${chunk} - %s`, //or as string template: '%s - My page',
        'vmid': 'og:title'
      }
    ]
    },
    created () {    
      this.fetchData()
      this.$store.state['forms'] = {settings: {
        site_title: 'testt'
      }}
      console.log(this.$store.state.forms.settings.site_title)
    },
    methods: {
      fetchData () {
        var self = this;
        firestore.collection('settings').doc('general').get()
          .then(function(doc) {
            self.settings = doc.data();           
        })
      .catch(function(error) {
        console.log(error);
          self.error = error;
      });
  },
  editPost: function(settings) {

    var current_article = firestore.collection("settings").doc('general');
    //Store fields in object
    var settings_obj = {};
    for (var current_field in settings) {
      settings_obj[current_field] = settings[current_field];
    }
    //Update fields    
    current_article.set(settings_obj)
    .then(function() {
      alert('Success');

    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });

    },

  }

}
</script>