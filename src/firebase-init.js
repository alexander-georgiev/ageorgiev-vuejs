import firebase from 'firebase'
import { firestore } from './main'

var fetch_data = {
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData (collection) {
		var self = this;
		firestore.collection(collection).get()
			.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				self.articles.push(doc.data());         
			});			
		})
      .catch(function(error) {
      	console.log(error);
          self.error = error;
      });
	},
    deletePost: function(article, collection) {          
      var jobskill_query = firestore.collection(collection).where('title','==', article.title);
      jobskill_query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
      });
    });
    }   
    }
};
export default fetch_data;