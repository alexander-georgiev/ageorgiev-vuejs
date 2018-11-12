import Vue from 'vue'
import VueFire from 'vuefire'
import Vuex from 'vuex'
import firebase from 'firebase'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import { routes } from './router/routes';
import App from './App.vue'

Vue.use(Vuex)
require('firebase/firestore')
require('./assets/sass/main.scss');

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNJpjt9_IaI-FKEpuW3pVWxo_6V6XTSWM",
    authDomain: "personal-website-156914.firebaseapp.com",
    databaseURL: "https://personal-website-156914.firebaseio.com",
    projectId: "personal-website-156914",
    storageBucket: "",
    messagingSenderId: "179474896816"
})
export const firestore = firebaseApp.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings)
Vue.config.productionTip = false
Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link
Vue.use(Meta)
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    scrollBehavior: function(to, from, savedPosition) {
        return savedPosition || {
            x: 0,
            y: 0
        }
    },
    routes: routes,
});
export const store = new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        getUser: state => {
            return state.user;
        }
    },
    mutations: {
        setUser: state => {
            state.user = firebase.auth().currentUser;
        }
    },
    actions: {
        setUser: context => {
            context.commit('setUser');
        }
    }
});
router.beforeEach((to, from, next) => {
    app.loading = true;
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (requiresAuth && currentUser) {
        next();
    } else {
        next();
    }
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  setTimeout(() => app.loading = false, 1000);
  
})

firebase.auth().onAuthStateChanged(function (user) {
    var app =  new Vue({
    el: '#app',
    store,
    router: router,
    data: { loading: false},
    render: h => h(App)
  });
});