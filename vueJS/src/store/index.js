import Vuex from 'vuex'
import Vue from 'vue'

// import AMap from 'AMap'
import {setCookie, getCookie, delCookie} from '@/config/willuse.js'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// function showCityInfo () {
//   // 实例化城市查询类
//   var citysearch = new AMap.CitySearch()
//   // 自动获取用户IP，返回当前城市
//   citysearch.getLocalCity(function (status, result) {
//     if (status === 'complete' && result.info === 'OK') {
//       if (result && result.city && result.bounds) {
//         var cityinfo = result.city
//         var citybounds = result.bounds
//         document.getElementById('tip').innerHTML = '您当前所在城市：' + cityinfo
//         // 地图显示当前城市
//         map.setBounds(citybounds)
//       }
//     } else {
//       document.getElementById('tip').innerHTML = result.info
//     }
//   })
// }

// 获取上次的地址
if (getCookie('localCity')) {
  alert(1)
} else {
  alert(1)
}

const state = {
  localCity: ''
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
