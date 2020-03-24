<template>
<div class="background" :style="{ 'background-image': bgUrl }">
  <container></container>
  <activity-bar></activity-bar>
  <sidebar></sidebar>
  <window>
    <container></container>
  </window>
</div>
</template>
<script>
export default {
  data() {
    return {
      pos: {
        x: 100,
        y: 100,
      },
      size: {
        w: 500,
        h: 500,
      }
    }
  },
  computed: {
    bgUrl() {
      return `url('${process.env.NODE_ENV == 'production' ? window.location.pathname : ''}/assets/img/bg/ubuntu-1804-wallpaper.jpg')`
    },
    dummyStyle() {
      return {
        position: 'absolute',
        background: '#f3f2f2',
        top: `${this.pos.y}px`,
        left: `${this.pos.x}px`,
        width: `${this.size.w}px`,
        height: `${this.size.h}px`,
      }
    }
  },
  methods: {
    exampleResize(size) {
      this.size.w = size.w
      this.size.h = size.h
    },
    exampleDrag(pos) {
      this.pos.x = pos.x
      this.pos.y = pos.y
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
