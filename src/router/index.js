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
    component: () => import('@/views/graphic-design'),
  },
  {
    path: '/graphic-design-detail',
    name: 'GraphicDesignDetail',
    component: () => import('@/views/graphic-design-detail'),
  },
  {
    path: '/product-design',
    name: 'ProductDesign',
    component: () => import('@/views/product-design'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about'),
  }
]

const router = new VueRouter({
  routes
})

export default router
