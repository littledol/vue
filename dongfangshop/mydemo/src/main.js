// main.js主配置文件的入口
// 引入vue文件  vue在node_modules文件中出现，可以直接引入
import Vue from 'vue'
//引入App.vue入口  vue的入口
import App from './App.vue'
// import $ from 'jquery'
//引入 组件路由
import router from './assets/js/router.js'
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
// 下载的vue-router命名为VueRouter后再引入
import VueRouter from 'vue-router'
// 引入jquery
// import $ from 'jquery';
// Vue调用Vuerouter
Vue.use(VueRouter)
// Vue.use($)

Vue.use(Vant)


new Vue({
  //Vue配置组件路由
  router,
  render: h => h(App),
}).$mount('#app')
