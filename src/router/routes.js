import MainLayout from '../layouts/Main.vue'
import NotFound from '../views/404'
//front
import Home from '../views/Home'
import Blog from '../views/Blog'
import ListingBlog from '../views/ListingBlog'
import Sidebar from '../views/Aside'
import SingleBlog from '../views/SingleBlog'
import Testimonials from '../views/Testimonials'
import SingleTestimonial from '../views/SingleTestimonial'
import Contact from '../views/Contact'

import Login from '../components/Login'
import SignUp from '../components/SignUp'
//admin
import Dashboard from '../views/admin/Dashboard'
import Profile from '../views/admin/Profile'
import AdminBlogPosts from '../views/admin/AdminBlogPosts'
import AddPost from '../views/admin/AddPost'
import EditPost from '../views/admin/EditPost'
import Pages from '../views/admin/Pages'
import Settings from '../views/admin/Settings'
import SEO from '../views/admin/SEO'
//admin componenets
//import AdminMenu from '../components/admin/Menu'
export const routes = [
    {
        path: '',
        name: 'home',
        components: {
            default: Home,
            // projects: Projects,
            contact: Contact,
            blog: ListingBlog,
        },
    }, {
        path: '/blog',
        params: {
            type: 'articles',
        },
        name: 'blog',
        component: Blog,
        children: [{
            path: '/',
            params: {
                type: 'articles',
            },
            name: 'listingblog',
            components: {
                default: ListingBlog,
                sidebar: Sidebar
            },

        }]
    }, {
        name: 'SingleBlog',
        path: '/blog/:id',
        component: SingleBlog
    }, 
    // {
    //     path: '/testimonials',
    //     name: 'testimonials',
    //     component: Testimonials
    // },
     {
        name: 'SingleTestimonial',
        path: '/testimonial/:id',
        component: SingleTestimonial
    }, {
        name: 'Contact',
        path: '/contact',
        component: Contact
    }, {
        name: 'Login',
        path: '/login',
        component: Login
    }, {
        name: 'SignUp',
        path: '/signup',
        component: SignUp
    }, {
        name: 'Dashboard',
        path: '/admin/',
        components: {
           default: Dashboard,
           //userMenu: AdminMenu,
        },
        children: [
        {
            path: '/admin/profile',
             components: {
                default: Profile,
                //userMenu: AdminMenu
            },
            meta: {
                requiresAuth: true
            }        
        },
        {
            path: '/admin/articles',
            name: 'admin-posts',
            components: {
                //userMenu: AdminMenu,
                default: AdminBlogPosts,
            },
            meta: {
                requiresAuth: true,
                adminListing: true,
                postType: 'articles'
            }
        },
        // {
        //     path: '/admin/AddPost',
        //     name: 'AddPost',
        //     components: {
        //         //userMenu: AdminMenu,
        //         default: AddPost,
        //     },
        //     meta: {
        //         requiresAuth: true
        //     }
        // },
        {
            path: '/admin/AddPost',
            name: 'AddPost',
            components: {
                //userMenu: AdminMenu,
                default: EditPost,
            },
            meta: {
                requiresAuth: true
            }
        },
          {
            path: '/admin/:type/:id',
            name: 'EditPost',
            components: {
                //userMenu: AdminMenu,
                default: EditPost,
            },
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/admin/pages',
            params: {
                postType: 'pages',
                
            },
            name: 'admin-pages',
            components: {
                //userMenu: AdminMenu,
                default: Pages,
            },
            meta: {
                requiresAuth: true,
                postType: 'pages',
                adminListing: true,
            }
        },
        {
            path: '/admin/settings/',
            name: 'Settings',
            components: {
                //userMenu: AdminMenu,
                default: Settings,
            },
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin/settings/seo',
            name: 'SEO',
            components: {
                //userMenu: AdminMenu,
                default: SEO,
            },
            meta: {
                requiresAuth: true
            }
        }
        ],
        meta: {
            requiresAuth: true
        }
    }, {
        path: '*',
        component: NotFound
    }, 
 ];