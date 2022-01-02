import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Barang from '../views/barang/index.vue'
import Daftar from '../views/Daftar.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/barang',
    name: 'barang',
    component: Barang
  },
  {
    path: '/daftar',
    name: 'daftar',
    component:Daftar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
