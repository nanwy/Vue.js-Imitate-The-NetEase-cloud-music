import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import './assets/css/reset.css'
import './assets/icon/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
