<template>
	<button class="button is-danger is-rounded" @click="deletePost(article)">Delete</button>
</template>
<script>
import { firestore } from '../../main'
export default {
	name: 'delete-button',
	data () {
	    return {
	       articles: [],
	    }
  	},
	created() {
		
	},
	methods: {
	    deletePost: function(article) {
			var self = this;
			var postType = self.$route.params.type;	
			if (typeof postType === 'undefined') {
				var postType = self.$route.meta.type;	
			}    	
		    var single_article = firestore.collection(postType).where('title', '==', article.title);
		    single_article.get().then(function(querySnapshot) {
		        querySnapshot.forEach(function(doc) {
		            doc.ref.delete();
		        });
		    });
		},
	},
	props: {
		article: Object,
	}
}
</script>