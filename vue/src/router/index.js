import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestView from '../views/DestView.vue'
import CrewView from '../views/CrewView.vue'
import TechView from '../views/Tech__Main.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/DestView',
    name: 'DestView',
    component: () => import('../views/DestView.vue'),
    meta: {
      requiresAuth: true
    }
  },{
    path: '/CrewView',
    name: 'CrewView',
    component: () => import('../views/CrewView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/TechView',
    name: 'TechView',
    component: () => import('../views/Tech__Main.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
