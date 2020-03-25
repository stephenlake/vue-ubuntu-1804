<template>
<div class="background" :style="{ 'background-image': bgUrl }">
  <activity-bar></activity-bar>
  <sidebar></sidebar>
  <window @resized="exampleResize" @dragged="exampleDrag" >
    <template v-slot:titlebar>
      Size: {{ size.w }} x {{ size.h }} | Position: {{ pos.x }} x {{ pos.y }}
    </template>
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
        w: 600,
        h: 600,
      }
    }
  },
  computed: {
    bgUrl() {
      return `url('${process.env.NODE_ENV == 'production' ? window.location.pathname : ''}/assets/img/bg/ubuntu-1804-wallpaper.jpg')`
    }
  },
  mounted() {
    this.$store.state.references.desktop = this
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
