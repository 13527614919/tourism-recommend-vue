// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* 使用代理方式,实现json数据请求 */
// import httpTools from '@/tools/httpTools'

/* 新添加--导入组件库 */
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 导入样式,使用 CSS，新添加
import '../my-theme/index.less'
// Vue.prototype.$http = httpTools
import axios from 'axios'
import qs from 'qs'
// token令牌
import jwtCookies from '@/tools/jwtCookies.js'
Vue.prototype.$jwtCookies = jwtCookies
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
/* 新添加 */
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
