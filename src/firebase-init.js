import firebase from 'firebase'
import { firestore } from './main'

var fetch_data = {
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
    singleFetchData (collection) {
      this.error = null
      this.loading = true
      var self = this;
      firestore.collection(collection).where('title','==', self.$route.params.id).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var obj = doc.data();
            obj['id'] = doc.id;
            self.articles.push(obj);
        });
        this.loading = false
      })
      .catch(function(error) {
          self.error = error;
      });
    },  
    }
};
export default fetch_data;