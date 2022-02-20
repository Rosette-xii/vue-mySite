import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index')
  },
  {
    path: '/graphic-design',
    name: 'GraphicDesign',
    component: () => import('@/views/graphic-design')
  },
]

const router = new VueRouter({
  routes
})

export default router
