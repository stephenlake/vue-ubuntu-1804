import Vue from 'vue'
import Axios from 'axios'
import Store from './store'
import App from './App.vue'
import Routes from './routing'
import Collect from 'collect.js'
import SpaceTime from 'spacetime'
import VueRouter from 'vue-router'
import Components from './components'

Vue.use(VueRouter)

window.spacetime = SpaceTime

const router = new VueRouter({
  routes: Routes,
  mode: 'hash'
})

new Vue({
  el: '#app',
  router: router,
  store: Store,
  render: h => h(App)
})
