import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tickets from '../views/Tickets.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
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
  },
  {
    path: '/login',
    name: 'login',
    component : Login
  },
  {
    path: '/register',
    name: 'register',
    component : Register
  }
]

const router = new VueRouter({
  routes
})

export default router
