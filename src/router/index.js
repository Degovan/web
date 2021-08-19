import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/Pricing.vue'
import Project from '../views/Project.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Degovan — Jasa Pembuatan Aplikasi dan Website'}
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     meta: { title: 'Pricing — Degovan'}
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
    meta: { title: 'Project — Degovan'}
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
