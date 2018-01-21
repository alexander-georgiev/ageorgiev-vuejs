import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Testimonials from './pages/Testimonials'
import NotFound from './pages/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [

	{
		path: '/',
		component: Home
	},
	{
		path: '/testimonials',
		component: Testimonials
	},
	{
		path: '/blog',
		component: Blog
	}
  ]
})
export default router