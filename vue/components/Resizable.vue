<template>
<div class="resizable" @mousedown.prevent="startResize" :style="handleStyle">
  <slot></slot>
</div>
</template>
<script>
export default {

  props: ['w', 'h', 'x', 'y'],

  data() {
    return {
      resizing: false,
      resizeTop: false,
      resizeRight: false,
      resizeBottom: false,
      resizeLeft: false,
      resizeHandleSize: 12,
      pos: {
        x: 0,
        y: 0,
      },
      size: {
        w: 0,
        h: 0,
        min: {
          w: 200,
          h: 100,
        }
      }
    }
  },

  computed: {
    handleStyle() {
      if (this.$store.state.env.debug) {
        return {
          //border: `1px solid #ff0000`,
        }
      }
      return {}
    }
  },

  watch: {
    resizing: function(resizing) {
      if (resizing) {
        document.addEventListener('mousemove', this.emitResize)
        document.addEventListener('mouseup', this.endResize)
      } else {
        document.removeEventListener('mousemove', this.emitResize)
        document.removeEventListener('mouseup', this.endResize)
      }
    }
  },

  beforeDestroy() {
    this.resizing = false
  },

  methods: {
    isTop(e) {
      return e.offsetY <= this.resizeHandleSize
    },
    isRight(e) {
      return e.offsetX >= this.$el.clientWidth - this.resizeHandleSize
    },
    isBottom(e) {
      return e.offsetY > this.$el.clientHeight - this.resizeHandleSize
    },
    isLeft(e) {
      return e.offsetX <= this.resizeHandleSize
    },
    startResize(e) {
      this.resizeTop = this.isTop(e)
      this.resizeRight = this.isRight(e)
      this.resizeBottom = this.isBottom(e)
      this.resizeLeft = this.isLeft(e)

      if (this.resizeTop || this.resizeRight || this.resizeBottom || this.resizeLeft) {
        this.pos.x = this.x
        this.pos.y = this.y
        this.size.w = this.w
        this.size.h = this.h
        this.resizing = true
      }

    },
    emitResize(e) {

      if (this.resizeLeft) {
        this.size.w -= e.clientX - this.pos.x

        if (this.size.w >= this.size.min.w) {
          this.pos.x = e.clientX
        }
      }

      if (this.resizeTop) {
        this.size.h -= e.clientY - this.pos.y

        if (this.size.h >= this.size.min.h) {
          this.pos.y = e.clientY
        }
      }

      if (this.resizeRight) {
        this.size.w = e.clientX - this.pos.x
      }

      if (this.resizeBottom) {
        this.size.h = e.clientY - this.pos.y
      }

      if (this.size.w < this.size.min.w) {
        this.size.w = this.size.min.w
      }

      if (this.size.h < this.size.min.h) {
        this.size.h = this.size.min.h
      }

      this.$emit('dragged', this.pos)
      this.$emit('resized', this.size)
    },
    endResize(e) {
      this.resizing = false
    }
  }
}
</script>
