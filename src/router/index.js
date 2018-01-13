import Vue from 'vue'
import Router from 'vue-router'
import BoardPage from '@/components/BoardPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BoardPage',
      component: BoardPage
    }
  ]
})
