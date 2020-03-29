<template>
<div :class="`app ${barPlacement}`"
  @click="$emit('clicked')"
  :style="style">

  <div class="icon"
    :style="iconStyle">
    <img :src="app.iconGeneric" />
  </div>

</div>
</template>
<script>
export default {
  props: ['app', 'baseWidth', 'barPlacement'],

  computed: {
    style() {
      let style = {}

      style.width = `${this.size}px`
      style.height = `${this.size}px`

      return style
    },
    size() {
      if (this.app) {
        return this.baseWidth - 16
      } else {
        return this.baseWidth + 2
      }
    },
    iconStyle() {
      let style = {}

      if (!this.app) {
        style.width = `${this.baseWidth-10}px`
        style.height = `${this.baseWidth-10}px`
        style.backgroundImage = `url(${(process.env.NODE_ENV == 'production' ? window.location.pathname : '') +
          '/assets/img/ico/sidebar-activity-toggler.png'})`
      }

      return style
    }
  }
}
</script>
<style scoped>
.app {
  text-align: center;
  padding: 5px;
  border-radius: 3px;
  margin: 0.1em;
}

.app:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.app.bar-bottom {
  display: inline-block;
}

.app .icon img {
  width: 100%;
}

.toggler:not(.bar-bottom) {
  position: absolute;
  left: -1px;
  bottom: 30px;
  padding: 0;
  margin: 0;
  border-radius: 3px;
}

.toggler.bar-bottom {
  position: absolute;
  right: -1px;
  bottom: 0;
  padding: 0;
  margin: 0;
  border-radius: 3px;
}

.toggler .icon {
  position: relative;
  bottom: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center center;
}

.toggler:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
