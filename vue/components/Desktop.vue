<template>
<div class="background"
  :style="style">

  <activity-overlay ref="overlay"
    @exit="deactivateOverlay"
    :mode="overlayMode"></activity-overlay>

  <activity-bar @activated="activateOverlay"
    :overlayActive="overlayActive"></activity-bar>

  <activity-sidebar @activated="activateOverlay"
    :overlayActive="overlayActive"></activity-sidebar>

  <!-- <window @resized="exampleResize" @dragged="exampleDrag">
      <template v-slot:titlebar>
        Size: {{ size.w }} x {{ size.h }} | Position: {{ pos.x }} x {{ pos.y }}
      </template>
    </window> -->

  <DesktopIcon v-for="(app, index) in apps"
    :app="app"
    :key="index"
    :initialPos="{x: 84, y: (index+1)*44+(index*54) }" />

</div>
</template>
<script>
import Collect from 'collect.js'

export default {
  data() {
    return {
      style: {
        backgroundImage: `url('${this.asset('img/bg/ubuntu-1804-wallpaper.jpg')}')`
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
  mounted() {
    this.$store.state.references.desktop = this
  },
  methods: {
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
  }
}
</script>
<style>
.background {
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
}
</style>
