import Vue from 'vue'
import Router from 'vue-router'
import ItemList from './views/ItemList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
        component: ItemList
    },
    {
      path: '/product/:id',
      name: 'product',
      // route level code-splitting
      component: () => import('./views/Product.vue')
    },
  ]
})
