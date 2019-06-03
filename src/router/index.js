import Vue from 'vue'
import Router from 'vue-router'
import StoreList from '@/view/store_list'
import Index from '@/view/index/index'
import Manage from '@/view/manage/manage'
Vue.use(Router)

export default new Router({
  mode: 'history', 
  // Vue项目启动后首页URL带的#,mode:history可去掉
  // Hash: 使用URL的hash值来作为路由。支持所有浏览器。 
  // History: 以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式 
  // Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。
  routes: [
    {
      path: '/store_list',
      name: 'store_list',
      component: StoreList
    },

    {
      path: '/index',
      name: 'index',
      component: Index
    },

    {
      path: '/manage',
      name: 'manage',
      component: Manage
    }

  ]
})
