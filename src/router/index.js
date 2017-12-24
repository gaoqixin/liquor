import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router

import Index from '@/views/index' //引入根目录下的index.vue组件
import Blog from '@/views/blog'
import BlogDetails from '@/views/details'
import Manager from '@/views/manager'

Vue.use(Router) //全局使用vue-router

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      redirect: '/index',
      hidden: true,
      children: [{ path: 'index', component: Index ,name: '首页啦'}]
    },
    {
      path: '/blog',
      name: '博客',
      component: Blog,
      // redirect: '/blog/list',
      // children: [
      //   { path: 'list', component: Blog, name: '博客列表' },
      //   { path: 'details/:blogId', component: BlogDetails, hidden: true, name: '博客详情' }
      // ]
    },
    {
      path: '/blog/details/:blogId',
      name: '博客详情',
      component: BlogDetails
    },
    {
      path: '/manager',
      name: '博客管理',
      component: Manager
    }
  ]
})
