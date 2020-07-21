import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
window.bus = new Vue()
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  // render: h => h(App),
  components: { App }
})
