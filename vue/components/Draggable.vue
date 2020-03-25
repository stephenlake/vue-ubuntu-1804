<template>
<div class="draggable" @mousedown="startDrag">
  <slot></slot>
</div>
</template>
<script>
export default {

  props: ['x', 'y'],

  data() {
    return {
      dragging: false,
      pos: {
        x: 0,
        y: 0,
      }
    }
  },

  watch: {
    dragging: function(dragging) {
      if (dragging) {
        this.setCursor('grabbing')
        document.addEventListener('mousemove', this.emitPosition)
        document.addEventListener('mouseup', this.endDrag)
      } else {
        this.setCursor('default')
        document.removeEventListener('mousemove', this.emitPosition)
        document.removeEventListener('mouseup', this.endDrag)
      }
    }
  },

  beforeDestroy() {
    this.dragging = false
  },

  methods: {
    startDrag(e) {
      this.pos.x = e.clientX - this.x
      this.pos.y = e.clientY - this.y
      this.dragging = true
      this.emitPosition(e)
    },
    emitPosition(e) {
      this.$emit('dragged', {
        x: e.clientX - this.pos.x,
        y: e.clientY - this.pos.y
      })
    },
    endDrag(e) {
      this.pos.x = e.clientX - this.pos.x
      this.pos.y = e.clientY - this.pos.y
      this.dragging = false
    }
  }
}
</script>
<style scoped>
.draggable {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
