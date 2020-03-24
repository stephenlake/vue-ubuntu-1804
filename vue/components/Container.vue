<template>
<div class="container">
  <div class="window-size" :style="sizeTextStyle" v-if="$store.state.env.debug">{{ size.w }} x {{ size.h }}</div>
  <slot></slot>
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
<style>
.container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}

.container .window-size {
  margin: 0 auto;
  color: #000000;
}
</style>
