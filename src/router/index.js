/* 路由器模块 */
import Vue from 'vue'
import Router from 'vue-router'

/* 引入路由组件 */
import Index from '@/views/index/IndexInfo.vue'
// import Home from '@/views/home/homeInfo.vue'
import Login from '@/views/login/LoginMain.vue'
import Test from '@/views/test/testDemo.vue'
import Register from '@/views/register/RegisterMain.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index, meta: { title: '首页' } },
    { path: '/tour/test', component: Test, meta: { title: '测试' } },
    { path: '/tour/login', component: Login, meta: { title: '登录' } },
    { path: '/tour/register', component: Register, meta: { title: '注册' } }
  ]
})
