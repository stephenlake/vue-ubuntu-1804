<template>
<div :class="`sidebar ${properties.position}`"
  :style="style">

  <ActivitySidebarIcon v-for="(app, index) in apps"
    :key="index"
    :app="app"
    :tooltip="app.name"
    :barPlacement="`bar-${properties.position}`"
    :baseWidth="properties.width" />

  <ActivitySidebarIcon class="toggler"
    tooltip="Show Applications"
    :baseWidth="$store.state.env.ui.sidebar.width"
    :app="{ name: 'Show Applications', iconGeneric: '/img/ico/sidebar-activity-toggler.png', toggler: true}"
    :barPlacement="`bar-${properties.position}`"
    @clicked="toggleOverlay" />

</div>
</template>
<script>
import Collect from 'collect.js'

export default {
  computed: {
    properties() {
      return this.$store.state.env.ui.sidebar
    },
    apps() {
      return Collect(this.$store.state.system.activities.available).where('favorite', true).all()
    },
    style() {
      let style = {}

      if (this.$store.state.env.ui.windowsMaximized > 0) {
        style.background = `#4a333c`
      } else {
        style.background = `rgba(0,0,0, ${this.properties.opacity})`
      }

      if (this.properties.position === 'bottom') {
        style.height = `${this.properties.width}px`
      } else {
        style.top = `${this.$store.state.env.ui.activityBar.height}px`
        style.paddingTop = '6px'
        style.width = `${this.properties.width}px`
      }

      return style
    }
  },
  methods: {
    toggleOverlay() {
      this.$desktop.toggleOverlay('apps')
    }
  }
}
</script>
<style scoped>
.sidebar {
  position: absolute;
  z-index: 101;
  transition: background 300ms ease-in;
}

.sidebar.left {
  left: 0;
  height: 100%;
}

.sidebar.right {
  right: 0;
  height: 100%;
}

.sidebar.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
