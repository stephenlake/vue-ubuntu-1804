<template>
<div class="container">

  <div class="content">
    <slot></slot>
  </div>

  <div class="window-size"
    :style="sizeTextStyle"
    v-if="$store.state.env.debug.active">{{ Math.round(size.w) }} x {{ Math.round(size.h) }}</div>
</div>
</template>
<script>
export default {

  data() {
    return {
      size: {
        w: 0,
        h: 0
      }
    }
  },

  computed: {
    sizeTextStyle() {
      return {
        'font-size': `${this.size.w / 12}px`
      }
    }
  },

  mounted() {
    this.registerResizeObserver()
  },

  methods: {
    registerResizeObserver() {
      new ResizeObserver((e) => {
        this.size.w = e[0].contentRect.width
        this.size.h = e[0].contentRect.height
        this.$emit('resized', this.size)
      }).observe(this.$el)
    }
  },
}
</script>
<style scoped>
.container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.container .window-size {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: #312d2d2e;
  z-index: -1;
}
</style>
