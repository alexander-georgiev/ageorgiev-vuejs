<template>
  <div>
    <section class="section columns" v-for="article in articles">
      <div class="column is-three-quarters">
        <h1 class="title">Edit - {{article.title}}</h1>        
        <inputField fieldType="text" label="Title" @on-change="setAddress" fieldKey="title" :fieldValue="article.title"/>
        <inputField fieldType="textarea" label="Content" @on-change="setAddress" fieldKey="excerpt" :fieldValue="article.excerpt"/>
        <inputField fieldType="select" label="Content" @on-change="setAddress" fieldKey="excerpt" :fieldValue="select"/>
      </div>
      <div class="column">
        <progress max="100" :value="uploadPercentage" class="progress is-primary">0%</progress>
        <div v-if="featureImageURL">
          <figure class="image"><img class="featured-image" :src="article.featureImageURL" /></figure>
        </div>
        <figure class="image"><img class="featured-image" :src="article.featureImageURL" /></figure>
          <div v-if="previewFeatureImage">
            <figure class="image">
              <img class="featured-image" :src="previewFeatureImage" />
        </figure>
          </div>
          <div class="column" v-if="article.featureImageURL || previewFeatureImage">
            <!--  <button @click="onUpload" class="is-pulled-left button is-primary">Upload Image</button> -->
            <!-- <button class="is-pulled-right button is-danger" @click="deleteFeatureImage">Delete</button> -->
          </div>
          <div class="file m-b-md">
            <label class="file-label">
              <input type="file" class="file-input" @change="onFileChange" id="featuredImage" accept="image/*" />
              <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose an image
              </span>
              </span>
            </label>
          </div>
          <div class="toolbox-buttons">
            <buttonEdit :article="article" :featuredImage="featuredImage" @clicked="onClickChild" />
            <deleteButton :article="article" />
          </div>
      </div>
    </section>
  </div>
</template>
<script>
import fetch_data from '../firebase-init'
import inputField from '../components/Forms/inputField'
import buttonEdit from '../components/buttons/buttonEdit'
import deleteButton from '../components/buttons/deleteButton'

import Alert from '../components/Alert'

export default {
  mixins: [fetch_data],
  components: { inputField, deleteButton, buttonEdit },
  data() {
    return {
      articles: [],
      error: null,
      featuredImage: null,
      previewFeatureImage: null,
      uploadPercentage: 0,
      featureImageURL: '',
      select: [
        {
          name: 'Option 1',
          value: 0,
        },
        {
          name: 'Option 21',
          value: 0,
        }
      ]
    }
  },
  created() {

  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.singleFetchData(vm.$route.params.type);
      next()
    });

  },
  watch: {
    '$route': 'singleFetchData'
  },
  methods: {
    setAddress(value) {
      this.articles[0][value.propKey] = value.propValue;
    },
    onClickChild(child) {
      this.uploadPercentage = child.uploadPercentage;
      this.previewFeatureImage = child.previewFeaturedImage;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      // this.featuredImage = event.target.files[0]
      this.createImage(files[0])
    },
    createImage(file) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.previewFeatureImage = e.target.result
      }
      reader.readAsDataURL(file)
      this.featuredImage = file;
    },
    removePreviewImage: function(e) {
      this.previewFeatureImage = '';
    },
  }
}

</script>
