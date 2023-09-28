import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestView from '../views/DestView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DestView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
