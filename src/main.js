// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' //引入当前目录下App.vue 文件
import router from './router'

import $ from 'jquery' //全局引入jquery

import ElementUI from 'element-ui' //完整引入element-ui
import 'element-ui/lib/theme-chalk/index.css' //单独引入样式文件
import 'font-awesome/css/font-awesome.css' //引入FontAwesome样式

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //注入到跟实例中
  template: '<App/>',
  components: { App } //注册组件
})
