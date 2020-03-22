<template>
<div class="background" :style="{ 'background-image': bgImage }">
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
    bgImage() {
      return 'url(../../assets/img/bg/ubuntu-1804-wallpaper.jpg)'
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
