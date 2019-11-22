import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// swiper 轮播图
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

// 自定义插件
// import './config/easier.js'

// import 'swiper/dist/css/swiper.css';

// // 字体图标
// import './assets/css/font/iconfont.css';

// // 组件
// import './components/components.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
