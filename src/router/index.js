import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Dealers from '@/pages/Dealers'
import History from '@/pages/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/dealers',
      name: 'Dealers',
      component: Dealers
    }
  ]
})
