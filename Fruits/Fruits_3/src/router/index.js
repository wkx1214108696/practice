import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import ('@/views/index'),
      hidden: true
    },
    {
      path: '/buy',
      name: '水果分页',
      component: () => import ('@/components/PanicBuy/page'),
      hidden: true
    },
    {
      path: '/more',
      name: '更多',
      component: () => import ('@/components/FlowerBox/page'),
      hidden: true
    },
    {
      path: '/flower/:id',
      name: '礼盒分页',
      component: () => import ('@/components/FlowerBox/page2'),
      hidden: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
