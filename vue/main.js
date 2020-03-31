import Vue from 'vue'
import Axios from 'axios'
import Store from './store'
import Routes from './routing'
import Collect from 'collect.js'
import SpaceTime from 'spacetime'
import VueRouter from 'vue-router'
import Components from './components'
import Desktop from './components/Desktop.vue'

Vue.use(VueRouter)
Vue.mixin({

  computed: {
    $desktop() {
      return this.$store.state.references.desktop
    }
  },
  methods: {
    asset(asset) {
      return `${process.env.NODE_ENV == 'production' ? window.location.pathname : ''}/assets/${asset}`
    },
    setCursor(cursor) {
      // Prevent another component from changing the cursor
      // when its being controlled by a different component
      if (this.$store.state.style.cursorOwner == this._uid || !this.$store.state.style.cursorOwner) {
        this.$store.state.style.cursor = cursor

        if (cursor !== 'default') {
          this.$store.state.style.cursorOwner = this._uid
        } else {
          // Release possession
          this.$store.state.style.cursorOwner = false
        }
      }
    }
  }
})

Vue.prototype.spacetime = SpaceTime
window.spacetime = SpaceTime

const router = new VueRouter({
  routes: Routes,
  mode: 'hash'
})

new Vue({
  el: '#app',
  router: router,
  store: Store,
  render: h => h(Desktop)
})
