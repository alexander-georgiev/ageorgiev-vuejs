<template>
<div>
	<router-link v-if="$route.meta.adminListing === true" :to="{ name: 'EditPost', params: { id: article.title, type: article.postType }}" class="button is-primary is-rounded m-r-md">Edit</router-link>
	<button v-else class="button is-primary is-rounded" @click="editPost(article)">Update</button>
</div>
</template>
<script>
import { firestore } from '../../main'
export default {
	name: 'button-edit',
	data () {
	    return {
	       articles: [],
	    }
  	},
	created() {
		
	},
	methods: {		
        editPost: function(article) {
		    var self = this; 
		    var postType = self.$route.params.type;
		    
		    var current_article = firestore.collection(postType).doc(article.id);
		    current_article.set({
		        title: article.title,
		        excerpt: article.excerpt,
		        postType: postType,
		    })
		    .then(function() {
		      alert('Success');
		    })
		    .catch(function(error) {
		        console.error("Error updating document: ", error);
		    });

    	},
	},
	props: {
		article: Object,
	}
}
</script>