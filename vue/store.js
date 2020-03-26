import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    env: {
      debug: false,
    },
    style: {
      cursor: 'default',
      cursorOwner: false,
    },
    references: {
      desktop: null,
    },
    system: {
      activities: {
        available: [{
          name: 'Text Editor',
          icon: '',
          windows: [], // Apps can have multiple windows open
          tags: [
            'text',
            'edit',
            'gedit'
          ],
        }],
        running: [],
      }
    }
  }
})
