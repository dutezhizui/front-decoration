// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import qs from 'qs'
Vue.prototype.$qs = qs;
import router from './router'
import axios from 'axios'
Vue.prototype.$http= axios
Vue.use(VueRouter)
import { DatetimePlugin, CloseDialogsPlugin, ConfigPlugin, BusPlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
FastClick.attach(document.body)
axios.defaults.baseURL = 'http://localhost:8081/api/'
Vue.config.productionTip = false
axios.interceptors.request.use(
  config => {
    /*if (config.method === 'post') {
      config.data = qs.stringify(config.data)
      console.log("data==="+config.data)
    }*/
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      if (error.response.data.message === '认证失败') {
        localStorage.clear()
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
      }
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)
  })
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
