import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HomePage from '@/components/HomePage'
import Promotion from '@/components/Promotion'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/homepage',
      name: 'Homepage',
      component: HomePage
    }, {
      path: '/promotion',
      name: 'Promotion',
      component: Promotion
    }, {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ],
  mode: 'history'
})
