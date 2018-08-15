import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import car from '@/components/car/car'
import center from '@/components/center/center'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/car', name: 'car', component: car },
    { path: '/center', name: 'center', component: center }
  ]
})
