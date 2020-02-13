import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tickets from '../views/Tickets.vue'
import Faq from '../views/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tickets',
    name: 'tickets',
    component : Tickets
  },
  {
    path: '/faq',
    name: 'faq',
    component : Faq
  }
]

const router = new VueRouter({
  routes
})

export default router
