<template>
<container :style="$store.state.style">
  <div class="background"
    :style="style">
    <div :class="{debugging: $store.state.env.debug.active }"
      :style="{ backgroundSize: `${$store.state.env.debug.grid.size}px ${$store.state.env.debug.grid.size}px` }"
      @contextmenu.prevent=""></div>

    <activity-overlay ref="overlay"
      @exit="deactivateOverlay"
      :mode="overlayMode"></activity-overlay>

    <activity-bar @activated="activateOverlay"
      :overlayActive="overlayActive"></activity-bar>

    <activity-sidebar @activated="activateOverlay"
      :overlayActive="overlayActive"></activity-sidebar>

    <DesktopIcon v-for="(app, index) in apps"
      :app="app"
      :key="index"
      :initialPos="{x: 54, y: (index+1)*54+(index*54) }" />

    <DebugWindow v-show="$store.state.env.debug.active" />

  </div>
</container>
</template>
<script>
import Collect from 'collect.js'

export default {
  data() {
    return {
      style: {
        backgroundImage: `url('${this.asset('img/bg/ubuntu-1804-wallpaper.jpg')}')`,
      },
      overlayActive: false,
      overlayMode: null,
    }
  },
  computed: {
    apps() {
      return Collect(this.$store.state.system.activities.available).where('desktop', true).all()
    }
  },
  methods: {
    registerKeyListener() {
      window.addEventListener('keydown', this.checkForCommand)
    },
    unregisterKeyListener() {
      window.removeEventListener('keydown', this.checkForCommand)
    },
    checkForCommand(e) {
      if (e.key === 'F10') {
        e.preventDefault()

        this.$store.state.env.debug.active = !this.$store.state.env.debug.active
      }
    },
    toggleOverlay(mode) {
      if (this.overlayIsActive()) {
        if (this.overlayMode !== mode) {
          this.overlayMode = mode
        } else {
          this.deactivateOverlay()
        }
      } else {
        this.activateOverlay(mode)
      }
    },
    overlayIsActive() {
      return this.overlayActive
    },
    activateOverlay(mode) {
      this.overlayMode = mode
      this.overlayActive = true
    },
    deactivateOverlay() {
      this.overlayActive = false
      this.overlayMode = null
    }
  },

  created() {
    this.$store.state.references.desktop = this
    this.registerKeyListener()
  },

  beforeDestroy() {
    this.unregisterKeyListener()
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0;
  font-family: 'Ubuntu';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.background {
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: 100% 100%;
}

.debugging {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-repeat: repeat;
  z-index: 1;
}
</style>
