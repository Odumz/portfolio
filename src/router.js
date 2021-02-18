import { createRouter, createWebHistory } from 'vue-router'
import Index from './views/Index.vue'
import About from './views/About.vue'
import Portfolio from './views/Portfolio.vue'
import Services from './views/Services.vue'
import Contact from './views/Contact.vue'
import Blog from './views/Blog.vue'
// import NotFound from './views/Error.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/about-me',
        name: 'about',
        component: About
    },
    {
        path: '/my-works',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/contact-me',
        name: 'contact',
        component: Contact
    },
    {
        path: '/services-i-offer',
        name: 'services',
        component: Services
    },
    {
        path: '/my-blogs',
        name: 'blog',
        component: Blog
    },
    // {
    //     path: '*',
    //     name: 'NotFound',
    //     component: NotFound,
    //   },   
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function(to) {
      if (to.hash) {
        return {
          selector: to.hash,
        };
      } else {
        return { x: 0, y: 0 };
      }
    },
})

export default router