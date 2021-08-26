import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/Home',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
