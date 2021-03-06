/* eslint-disable no-unused-vars*/ 

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import EyeHealth from '../views/EyeHealth.vue'
import About from '../views/About.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/eyeHealth',
    name: 'eyeHealth',
    component: EyeHealth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
