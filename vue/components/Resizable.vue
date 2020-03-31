<template>
<div resiable="true"
  class="resizable"
  @mouseleave.prevent="revertCursor"
  @mousemove.prevent="updateCursor"
  @mousedown.left="startResize">
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
      resizeHandleSize: 7,
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

  watch: {
    resizing: function(resizing) {
      if (resizing) {
        document.addEventListener('mousemove', this.emitResize)
        document.addEventListener('mouseup', this.endResize)
      } else {
        this.setCursor('default')
        document.removeEventListener('mousemove', this.emitResize)
        document.removeEventListener('mouseup', this.endResize)
      }
    }
  },

  beforeDestroy() {
    this.resizing = false
  },

  methods: {
    revertCursor() {
      if (!this.resizing) {
        this.setCursor('default')
      }
    },
    updateCursor(e) {
      if (this.resizing) {
        return false
      }

      if (this.isTop(e)) {
        if (this.isLeft(e)) {
          this.setCursor('nw-resize')
        } else if (this.isRight(e)) {
          this.setCursor('ne-resize')
        } else {
          this.setCursor('n-resize')
        }
      } else if (this.isBottom(e)) {
        if (this.isLeft(e)) {
          this.setCursor('sw-resize')
        } else if (this.isRight(e)) {
          this.setCursor('se-resize')
        } else {
          this.setCursor('s-resize')
        }
      } else if (this.isRight(e)) {
        this.setCursor('e-resize')
      } else if (this.isLeft(e)) {
        this.setCursor('w-resize')
      } else {
        this.revertCursor()
      }
    },
    isTop(e) {
      return e.clientY <= this.$el.offsetTop + this.resizeHandleSize
    },
    isRight(e) {
      return e.clientX >= (this.$el.offsetLeft + this.$el.clientWidth) - (this.resizeHandleSize / 2)
    },
    isBottom(e) {
      return e.clientY > (this.$el.offsetTop + this.$el.clientHeight) - (this.resizeHandleSize / 2)
    },
    isLeft(e) {
      return e.clientX <= this.$el.offsetLeft + (this.resizeHandleSize / 2)
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
