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
    path: '/graphicDesign',
    name: 'GraphicDesign',
    component: () => import('@/views/graphicDesign')
  },
]

const router = new VueRouter({
  routes
})

export default router
