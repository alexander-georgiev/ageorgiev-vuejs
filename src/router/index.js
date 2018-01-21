import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Testimonials from '@/pages/Testimonials'
import SingleTestimonial from '@/pages/SingleTestimonial'
import NotFound from './pages/404'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
   		path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/testimonials/',
      name: 'Testimonials',
      component: Testimonials,
    },
    {
      path: '/testimonial/:testimonialId/details',
      name 'SingleTestimonial',      
      component: SingleTestimonial
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    { path: '*', component: NotFound }
  ]
})