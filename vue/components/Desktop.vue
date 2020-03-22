<template>
<div class="background" :style="{ 'background-image': bgUrl }">
  <activity-bar></activity-bar>
  <sidebar></sidebar>
  <window></window>
</div>
</template>
<script>
import Window from './Window'
import Sidebar from './Sidebar'
import ActivityBar from './ActivityBar'

export default {

  computed: {
    bgUrl() {
      return `url('${window.location.host}/assets/img/bg/ubuntu-1804-wallpaper.jpg')`
    }
  },

  components: {
    Window,
    Sidebar,
    ActivityBar,
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
