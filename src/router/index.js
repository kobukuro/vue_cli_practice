import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/*
routes
[
    {
      name: '組件呈現的名稱',
      path: '對應的路徑位置(url的路徑)',
      component: 放import的組件(相對應vue程式碼的位置)
    },
] 
*/
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

//下面這段程式碼,export後,就可以在main.js裡import router
export default router
