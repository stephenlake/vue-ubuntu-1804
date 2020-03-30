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
            iconGeneric: '/img/ico/gedit/256.png',
            iconTray: '/img/ico/gedit/tray.png',
            tags: [
              'gedit',
              'notepad',
              'editor',
            ],
            favorite: false,
            desktop: false,
          },
          {
            name: 'Whethan - All in my head.mp3',
            iconGeneric: '/img/ico/audio/256.png',
            iconTray: '/img/ico/audio/tray.png',
            tags: [
              'audio',
              'music',
            ],
            favorite: false,
            desktop: true,
          }, {
            name: 'Steam',
            iconGeneric: '/img/ico/steam/256.png',
            iconTray: '/img/ico/steam/tray.png',
            tags: [
              'game',
              'steam',
              'valve',
              'volvo',
              'plumbing',
            ],
            favorite: false,
            desktop: false,
          }
        ],
        running: [],
      }
    }
  }
})
