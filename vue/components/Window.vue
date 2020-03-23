<template>
<resizable class="window" :style="windowStyle" :w="size.w" :h="size.h" :x="pos.x" :y="pos.y" @resized="resized" @dragged="dragged">
  <draggable class="titlebar" :x="pos.x" :y="pos.y" @dragged="dragged">
    <div class="title">Title</div>
  </draggable>
  <container>
    <slot class="content"></slot>
  </container>
</resizable>
</template>
<script>
export default {
  computed: {
    windowStyle() {
      return {
        top: `${this.pos.y}px`,
        left: `${this.pos.x}px`,
        width: `${this.size.w}px`,
        height: `${this.size.h}px`,
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
        w: 700,
        h: 400,
      }
    }
  },

  methods: {
    dragged(pos) {
      this.pos.x = pos.x
      this.pos.y = pos.y
    },
    resized(size) {
      this.size.w = size.w
      this.size.h = size.h
    }
  }
}
</script>
<style scoped>
.window {
  position: absolute;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f2f1f0;
  border: 1px solid rgba(0, 0, 0, 0.69);
  width: 100%;
  height: 100%;
  overflow: contain;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.content {
  margin-top: 36px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.titlebar {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom, #55534b 60%, #43423d);
  border-bottom: 2px solid #423838;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: #dfdbd2;
  font-weight: 600;
  height: 36px;
  width: 100%;
}

.titlebar .title {
  font-size: 14px;
  padding-top: 11px;
  padding-left: 12px;
}

.resizable {
  height: 100%;
  width: 100%;
}
</style>
