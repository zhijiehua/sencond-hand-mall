import Vue from 'vue'
import Router from 'vue-router'
const lazyLoading = (name) => () => import(`@/components/${name}.vue`)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: lazyLoading('home/index')
    }
  ]
})
