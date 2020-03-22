<template>
<draggable class="window" :x="pos.x" :y="pos.y" ref="draggable" @dragged="dragged" :style="windowStyle">
  <div class="title-bar" @mousedown="drag">
    <div class="title">Title</div>
  </div>
  <div class="window-content"></div>
</draggable>
</template>
<script>
import Draggable from './Draggable'

export default {
  components: {
    Draggable,
  },

  computed: {
    windowStyle() {
      return {
        top: `${this.pos.y}px`,
        left: `${this.pos.x}px`,
        width: this.size.w,
        height: this.size.h
      }
    }
  },

  data() {
    return {
      pos: {
        x: 50,
        y: 50,
      },
      size: {
        w: '700px',
        h: '400px',
      }
    }
  },

  methods: {
    drag(e) {
      this.$refs.draggable.drag(e)
    },
    dragged(pos) {
      this.pos.x = pos.x
      this.pos.y = pos.y
    }
  }
}
</script>
<style>
.window {
  position: absolute;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f2f1f0;
  border: 1px solid rgba(0, 0, 0, 0.69);
}

.window-content {
  height: 100%;
}

.title-bar {
  background-image: linear-gradient(to bottom, #55534b 60%, #43423d);
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 2px solid #423838;
  color: #dfdbd2;
  font-weight: 600;

  height: 36px;
  width: 100%;
}

.title-bar .title {
  font-size: 14px;
  padding-top: 11px;
  padding-left: 12px;
}
</style>
