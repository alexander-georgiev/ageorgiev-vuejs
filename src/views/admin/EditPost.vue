<template>
  <div>
    <section class="section columns add-post" v-if="$route.name == 'AddPost'">
<div class="column is-three-quarters">
        <h1 class="title">Add</h1>    
        <inputField fieldType="text" label="Title" @on-change="setAddress" fieldKey="title" :fieldValue="article.title"/>
        <inputField fieldType="textarea" label="Content" @on-change="setAddress" fieldKey="excerpt" :fieldValue="article.excerpt"/>
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
            <buttonAdd :article="article"/>
          </div>
      </div>
    </section>

    <section v-else class="section ss columns" v-for="article in articles">
      <div class="column is-three-quarters">
        <h1 class="title">Edit - {{article.title}}</h1>
        Link: <router-link :to="{ name: 'SingleBlog', params: { id: article.title }}" class="button is-secondary m-r-md">Edit</router-link> 
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
import fetch_data from '../../firebase-init'
import inputField from '../../components/Forms/inputField'
import buttonEdit from '../../components/buttons/buttonEdit'
import buttonAdd from '../../components/buttons/buttonAdd'
import deleteButton from '../../components/buttons/deleteButton'

export default {
  name: 'EditPost',
  mixins: [fetch_data],
  components: { inputField, deleteButton, buttonEdit, buttonAdd },
  data() {
    return {
      articles: [],
      article: {},
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
      //Add
      if (vm.$route.name == 'AddPost')
      {
        console.log('Add Post');
      }
      //Edit
      else {
        console.log(vm.$route.params.postType);
        vm.singleFetchData(vm.$route.params.postType);
      }      
      next()
    });

  },
  watch: {
    '$route': 'singleFetchData'
  },
  methods: {
    setAddress(value) {
      if (this.$route.name == 'AddPost') {
        // this.article.title = 'asdasd';
        this.article[value.propKey] = value.propValue;
      }
      else {
        this.articles[0][value.propKey] = value.propValue;  
      }
      
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
