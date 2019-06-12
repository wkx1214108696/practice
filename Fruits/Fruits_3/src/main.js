// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//axios
import axios from 'axios'
Vue.prototype.$axios = axios

//vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)
import store from './store'

//事件总线
Vue.prototype.bus = new Vue()

Vue.config.productionTip = false

//轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//
// import 'babel-polyfill'

import './style/base.scss';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
