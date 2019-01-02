import firebase from 'firebase'
import { firestore } from './main'
import aLoading from './components/a-loading.js'
var fetch_data = {
  methods: {
    fetchData (collection) {
		var self = this;
    // this.$store.commit('setLoading', true);
		firestore.collection(collection).get()
			.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				self.articles.push(doc.data());         
			});			
      // self.$store.commit('setLoading', false);
		})
      .catch(function(error) {
      	console.log(error);
          self.error = error;
      });
      
	},
    singleFetchData (collection) {
      this.error = null
      var self = this;
      this.$store.commit('setLoading', true);
      firestore.collection(collection).where('title','==', self.$route.params.id).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var obj = doc.data();
            obj['id'] = doc.id;
            self.articles.push(obj);
        });
        self.$store.commit('setLoading', false);
      })
      .catch(function(error) {
          self.error = error;
      });
    },  
    }
};
export default fetch_data;