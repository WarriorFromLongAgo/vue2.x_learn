// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 在入口文件main.js中引入，之后挂在vue的原型链上：
import api from './apis.js'

Vue.config.productionTip = false
Vue.prototype.$http = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
