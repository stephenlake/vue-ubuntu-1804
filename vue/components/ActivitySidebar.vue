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
    :baseWidth="properties.width"
    :app="false"
    :barPlacement="`bar-${properties.position}`"
    @clicked="toggleOverlay" />

</div>
</template>
<script>
import Collect from 'collect.js'

export default {
  data() {
    return {
      properties: {
        position: 'left',
        width: 46,
        opacity: 0.1,
      }
    }
  },
  computed: {
    apps() {
      return Collect(this.$store.state.system.activities.available).where('favorite', true).all()
    },
    style() {
      let style = {
        background: `rgba(0,0,0, ${this.properties.opacity})`
      }

      if (this.properties.position === 'bottom') {
        style.height = `${this.properties.width}px`
      } else {
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
}

.sidebar.left {
  top: 26px;
  left: 0;
  padding-top: 6px;
  height: 100%;
}

.sidebar.right {
  top: 26px;
  right: 0;
  padding-top: 6px;
  height: 100%;
}

.sidebar.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
