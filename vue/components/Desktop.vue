<template>
<div class="background" :style="{ 'background-image': `url('${bgUrl}')` }">
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
      return `${process.env.NODE_ENV === 'production' ? window.location.pathname: ''}/assets/img/bg/ubuntu-1804-wallpaper.jpg`
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
