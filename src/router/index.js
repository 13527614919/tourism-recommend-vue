/* 路由器模块 */
import Vue from 'vue'
import Router from 'vue-router'

/* 引入路由组件 */
import Index from '@/views/index/IndexInfo.vue' // 首页
// import Home from '@/views/home/homeInfo.vue'
import Login from '@/views/login/LoginMain.vue' // 登录
import Test from '@/views/test/testDemo.vue'
import Register from '@/views/register/RegisterMain.vue' // 注册
import LocalMain from '@/views/local/LocalMain.vue' // 当地日游
import AmbitusMain from '@/views/ambitus/AmbitusMain.vue' // 周边推荐
import GroupAction from '@/views/group/GroupInfo.vue' // 跟团旅行主页
import GroupDetail from '@/views/group/GroupDetail.vue' // 跟团旅行详情
import CustomMain from '@/views/custom/CustomMain.vue' // 定制旅游主页
import HeaderTop from '@/components/header/HeaderTop.vue'
import ParkMain from '@/views/park/ParkMain.vue' // 景区介绍主页
import RouteMain from '@/views/route/RouteMain.vue' // 路线查询主页

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index, meta: { title: '首页' } },
    { path: '/tour/test', component: Test, meta: { title: '测试' } },
    { path: '/tour/login', component: Login, meta: { title: '登录' } },
    { path: '/tour/register', component: Register, meta: { title: '注册' } },
    { path: '/tour/localMain', component: LocalMain, meta: { title: '当地日游主页' } },
    { path: '/tour/ambitusMain', component: AmbitusMain, meta: { title: '周边推荐主页' } },
    { path: '/tour/groupAction', component: GroupAction, meta: { title: '跟团旅游主页' } },
    { path: '/tour/groupDetail', component: GroupDetail, meta: { title: '跟团旅游详情页面' } },
    { path: '/tour/customMain', component: CustomMain, meta: { title: '定制旅游主页面' } },
    { path: '/tour/headerTop', component: HeaderTop, meta: { title: 'tou' } },
    { path: '/tour/parkMain', component: ParkMain, meta: { title: '景区介绍详情页面' } },
    { path: '/tour/routeMain', component: RouteMain, meta: { title: '路线查询' } }
  ]
})
