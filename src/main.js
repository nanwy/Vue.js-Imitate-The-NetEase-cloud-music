import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import 'default-passive-events'
import './assets/css/reset.css'
import './assets/icon/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
  data: {
    eventHub: new Vue() // 使用集中的事件处理器,一劳永逸的在任何组件调用事件发射、接受的方法
  }
}).$mount('#app')
