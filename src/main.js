// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import VueFirestore from 'vue-firestore'
import firebase from 'firebase'
import VueRouter from 'vue-router'
import MainLayout from './layouts/Main.vue'
import NotFound from './pages/404'
import Home from './pages/Home'
import Blog from './pages/Blog'
import ListingBlog from './pages/ListingBlog'
import Sidebar from './pages/Aside'
import SingleBlog from './pages/SingleBlog'
import Testimonials from './pages/Testimonials'
import SingleTestimonial from './pages/SingleTestimonial'
import Contact from './pages/Contact'

require('firebase/firestore')
require('./assets/sass/main.scss');

Vue.use(VueFirestore)
 
var firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyDNJpjt9_IaI-FKEpuW3pVWxo_6V6XTSWM",
    authDomain: "personal-website-156914.firebaseapp.com",
    databaseURL: "https://personal-website-156914.firebaseio.com",
    projectId: "personal-website-156914",
    storageBucket: "",
    messagingSenderId: "179474896816"  })
 
export const firestore = firebaseApp.firestore();

Vue.config.productionTip = false
Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link



const routes = [
  { 
    path: '/', component: MainLayout,
    children: [
      { path: '/', name:'home', components: {
          default: Home,
          // projects: Projects,
          testimonials: Testimonials,
          blog: ListingBlog,
        }
      },
      { path: 'blog', name: 'blog', component: Blog, children: [ { path: '/', components: { default: ListingBlog, sidebar: Sidebar } } ] },
      { name: 'SingleBlog', path: 'blog/:id', component: SingleBlog},
      { path: 'testimonials', name: 'testimonials', component: Testimonials },
      { name: 'SingleTestimonial', path: 'testimonial/:id', component: SingleTestimonial},
      { name: 'Contact', path: 'contact', component: Contact},
      { path: '*', component: NotFound  },    
    ]
   }, 
  
];



const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes,
});
new Vue({
  el: '#app',
  router,
});