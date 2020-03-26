<template>
<div class="desktop-sidebar" :style="style"></div>
</template>
<script>
export default {
  data() {
    return {
      properties: {
        width: 42,
        opacity: 0.1,
      }
    }
  },
  computed: {
    style() {
      return {
        width: `${this.properties.width}px`,
        background: `rgba(0,0,0, ${this.properties.opacity})`
      }
    }
  }
}
</script>
<style>
.desktop-sidebar {
  position: absolute;
  left: 0;
  top: 26px;

  height: 100vh;
}
</style>
