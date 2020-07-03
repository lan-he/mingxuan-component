import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routerConfig from './router'
import './assets/iconfont/iconfont.js'

Vue.use(Router)
const router = new Router(
  routerConfig
)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
