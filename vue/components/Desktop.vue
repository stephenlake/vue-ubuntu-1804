<template>
<div class="background">
  <container></container>
  <window>
    <container></container>
  </window>
  <!-- <window>
    <container></container>
  </window> -->
</div>
</template>
<script>
import Window from './Window'

export default {
  components: {
    Window
  }
}
</script>
<style>
.background {
  width: 100%;
  height: 100vh;
}
</style>
