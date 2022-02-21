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
    name: 'GRAPHIC DESIGN',
    component: () => import('@/views/graphic-design'),
  },
  {
    path: '/graphic-design/love-education',
    name: 'Love Education',
    component: () => import('@/views/graphic-design/love-education'),
  },
  {
    path: '/graphic-design/no-game-no-life-zero',
    name: 'NO GAME NO LIFE ZERO',
    component: () => import('@/views/graphic-design/no-game-no-life-zero'),
  },
  {
    path: '/graphic-design/killed-by-rock-and-roll',
    name: 'Killed by Rock and Roll',
    component: () => import('@/views/graphic-design/killed-by-rock-and-roll'),
  },
  {
    path: '/graphic-design/father-to-son',
    name: 'Father to Son',
    component: () => import('@/views/graphic-design/father-to-son'),
  },
  {
    path: '/graphic-design/father-to-son-mirror-image',
    name: 'Father to Son + Mirror Image',
    component: () => import('@/views/graphic-design/father-to-son-mirror-image'),
  },
  {
    path: '/graphic-design/our-youth-in-taiwan',
    name: 'Our Youth in Taiwan',
    component: () => import('@/views/graphic-design/our-youth-in-taiwan'),
  },
  {
    path: '/graphic-design/detention',
    name: 'Detention',
    component: () => import('@/views/graphic-design/detention'),
  },
  {
    path: '/graphic-design/girls-und-panzer-compilation-movie',
    name: 'Girls und Panzer Compilation Movie',
    component: () => import('@/views/graphic-design/girls-und-panzer-compilation-movie'),
  },
  {
    path: '/graphic-design/the-last-emperor',
    name: 'The Last Emperor',
    component: () => import('@/views/graphic-design/the-last-emperor'),
  },
  {
    path: '/graphic-design/paranoia-agent',
    name: 'Paranoia Agent',
    component: () => import('@/views/graphic-design/paranoia-agent'),
  },
  {
    path: '/graphic-design/master-of-body-horror-david-cronenberg-collection',
    name: 'MASTER OF BODY HORROR: DAVID CRONENBERG COLLECTION',
    component: () => import('@/views/graphic-design/master-of-body-horror-david-cronenberg-collection'),
  },
  {
    path: '/product-design',
    name: 'PRODUCT DESIGN',
    component: () => import('@/views/product-design'),
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: () => import('@/views/about'),
  },
]

const router = new VueRouter({
  routes
})

export default router
