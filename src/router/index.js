import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'
import Blog from '../views/Blog.vue'
import Games from '../views/Games.vue'
import GamesDetails from '../views/GamesDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Games',
    name: 'Games',
    component: Games
  },
  {
    path: '/GamesDetails',
    name: 'GamesDetails',
    component: GamesDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
