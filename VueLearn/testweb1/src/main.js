import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';
import qs from 'qs'
import VueCompositionApi from '@vue/composition-api'

import App from './App.vue'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueCompositionApi)

Vue.prototype.$qs = qs
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Vue.prototype.$http = axios
// 添加请求拦截器
axios.interceptors.request.use(config => {
    if (config.url.indexOf('?') > -1) {
        config.url = config.url + `&timestemp=${new Date().getTime()}`
    } else {
        config.url = config.url + `?timestemp=${new Date().getTime()}`
    }
    return config
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    render: h => h(App),
    components: {App}
}).$mount('#app')
