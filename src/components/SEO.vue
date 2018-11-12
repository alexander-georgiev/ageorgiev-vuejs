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
      <div class="tabs is-medium" id="tabs">
  <ul>
    <li :class="{ 'is-active' : currentTab === index }" v-for="(tab, index) in tabs" @click="currentTab = index"><a>{{tab}}</a></li>
  </ul>
</div>
<div id="tab-content">
  <div class="is-active" v-show="currentTab === 0">
           <div class="field">
        <label class="label">Language</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="settings.language" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Google Verification code</label>
        <div class="control">
          <input class="input" type="text" placeholder="Excerpt" v-model="settings.google_site_verification" required />
        </div>
      </div>
            <div class="field">
        <label class="label">Bing Verification code</label>
        <div class="control">
          <input class="input" type="text" placeholder="Excerpt" v-model="settings.msvalidate" required />
        </div>
      </div>
                  <div class="field">
        <label class="label">Yandex Verification code</label>
        <div class="control">
          <input class="input" type="text" placeholder="Excerpt" v-model="settings.yandex_verification" required />
        </div>
      </div>
  </div>
  <div v-show="currentTab === 1">
    {{tabs[1]}}
           <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="settings.og_title" required>
        </div>
      </div>
      
  </div>
  <div v-show="currentTab === 2">
    {{tabs[2]}}
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

export default {
  name: 'settings-seo',
  data () {
    return {
      loading: false,
      settings: {},
      currentTab: 0,
      tabs: ['General', 'Facebook', 'Twitter'],
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
    },
    methods: {
      fetchData () {
        var self = this;
        firestore.collection('settings').doc('seo').get()
          .then(function(doc) {
            self.settings = doc.data();           
        })
      .catch(function(error) {
        console.log(error);
          self.error = error;
      });
  },
  editPost: function(settings) {

    var current_article = firestore.collection("settings").doc('seo');
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