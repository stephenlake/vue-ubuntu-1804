<template>
<div class="background">
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
  background-image: url('/assets/img/bg/ubuntu-1804-wallpaper.jpg');
  background-attachment: fixed;
  background-size: cover;
}
</style>
