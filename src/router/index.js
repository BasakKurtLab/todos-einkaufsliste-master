import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  
  {
    path: '/einkaufsliste',
    name: 'Einkaufsliste',
    
    component: () => import( '../views/Einkaufsliste.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
