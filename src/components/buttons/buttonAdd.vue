<template>
<div>
	<router-link v-if="$route.meta.adminListing === true" :to="{ name: 'AddPost', params: { postType: $route.meta.postType, action: 'AddPost' } }" class="button is-rounded is-primary">Add</router-link>

	<button v-else class="button is-primary is-rounded" @click="addPost(article)">Add</button>
</div>
</template>
<script>
import { firestore } from '../../main'
export default {
	name: 'button-add',
	data () {
	    return {
	       articles: {},
	    }
  	},
	methods: {		
	    addPost: function(article) {  
		    var self = this; 
		    var postType = self.$route.params.postType;
		    console.log(postType);

		      firestore.collection(postType).add({
		          title: article.title,
		          excerpt: article.excerpt,
		          postType: postType,
		      })
		      .then(function() {
		          alert('Success');
		          self.$router.push('/dashboard/'+postType+'/'+article.title);
		      })
		      .catch(function(error) {
		          console.error("Error writing document: ", error);
		      });
    	} 
	},
	props: {
		article: Object
	}
}
</script>