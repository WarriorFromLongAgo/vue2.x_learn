import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import qs from 'qs'

import App from './App.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.$qs = qs


new Vue({
    el: '#app',
    router,
    template: '<App/>',
    render: h => h(App),
    components: {App}
}).$mount('#app')
