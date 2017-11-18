import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router

import Index from '@/views/index' //引入根目录下的index.vue组件
import Blog from '@/views/blog'
import Manager from '@/views/manager'

Vue.use(Router) //全局使用vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/manager',
      name: 'manager',
      component: Manager
    }
  ]
})
