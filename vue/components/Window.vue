<template>
<resizable class="window" :style="windowStyle" :w="size.w" :h="size.h" :x="pos.x" :y="pos.y" @resized="resized" @dragged="dragged">
  <window-titlebar :windowPos="pos" @maximize="maximize" @dragged="dragged">
    <slot name="titlebar"></slot>
  </window-titlebar>
  <container @resized="$emit('resized', $event)"></container>
</resizable>
</template>
<script>
export default {
  props: {
    x: {
      type: Number,
      default: 50,
    },
    y: {
      type: Number,
      default: 50,
    },
    w: {
      type: Number,
      default: 400,
    },
    h: {
      type: Number,
      default: 400,
    }
  },

  created() {
    this.pos.x = this.x
    this.pos.y = this.y
    this.size.w = this.w
    this.size.h = this.h
  },

  computed: {
    windowStyle() {
      let style = {
        top: `${this.pos.y}px`,
        left: `${this.pos.x}px`,
        width: `${this.size.w}px`,
        height: `${this.size.h}px`,
      }

      if (this.maximizing) {
        style.transition = `
          top ${this.maximiseDuration}ms ease-out,
          left ${this.maximiseDuration}ms ease-out,
          width ${this.maximiseDuration}ms ease-out,
          height ${this.maximiseDuration}ms ease-out
          `
      }

      return style
    }
  },

  data() {
    return {
      maximized: false,
      maximizing: false,
      maximiseDuration: 230,
      transient: {},
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
    maximize() {
      this.maximized = !this.maximized
      this.maximizing = true

      if (this.maximized) {
        // Store the current position for restore
        this.transient.pos = {
          x: this.pos.x,
          y: this.pos.y
        }

        // Store the current size for restore
        this.transient.size = {
          w: this.size.w,
          h: this.size.h
        }

        this.pos.x = 0
        this.pos.y = 0

        // Set size equal to the desktop's size
        this.size.w = this.$desktop.$el.offsetWidth
        this.size.h = this.$desktop.$el.offsetHeight
      } else {
        // Restore dimensions before maximizing
        this.pos.x = this.transient.pos.x
        this.pos.y = this.transient.pos.y
        this.size.w = this.transient.size.w
        this.size.h = this.transient.size.h
      }

      setTimeout(() => {
        this.maximizing = false
        this.$emit('resized', this.size)
        this.$emit('dragged', this.pos)
      }, this.maximiseDuration)
    },
    dragged(pos) {
      this.pos.x = pos.x
      this.pos.y = pos.y
      this.$emit('dragged', pos)
    },
    resized(size) {
      this.size.w = size.w
      this.size.h = size.h
      this.$emit('resized', size)
    }
  }
}
</script>
<style scoped>
.window {
  position: absolute;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #f2f1f0;
  border: 1px solid rgb(85, 83, 75);
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

.resizable {
  height: 100%;
  width: 100%;
}
</style>
