import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    env: {
      debug: true,
    },
    style: {
      cursor: 'default',
      cursorOwner: false,
    },
    references: {
      desktop: null,
    }
  }
})
