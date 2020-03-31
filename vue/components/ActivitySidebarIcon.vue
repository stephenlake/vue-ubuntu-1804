<template>
<div :class="`app ${barPlacement}`"
  @click="$emit('clicked')"
  :style="style">

  <div class="icon">
    <img :src="asset(app.iconGeneric)"
      :style="imageStyle" />
  </div>

</div>
</template>
<script>
export default {
  props: ['app', 'baseWidth', 'barPlacement'],

  computed: {
    style() {
      let style = {
        width: `${this.baseWidth}px`,
        height: `${this.baseWidth}px`,
      }

      return style
    },
    imageStyle() {
      if (this.app.toggler) {
        return {
          width: `${this.baseWidth/2}px`,
          height: `${this.baseWidth/2}px`,
        }
      }

      return {
        width: `${this.baseWidth-8}px`,
        height: `${this.baseWidth-8}px`,
      }
    }
  }
}
</script>
<style scoped>
.app {
  border-radius: 3px;
  position: relative;

}

.app:not(.bar-bottom) {
  left: 50%;
  transform: translate(-50%, 0);
}

.app:hover {
  background-size: 100% 100%;
  background-color: rgba(255, 255, 255, 0.1);
}

.app .bar-bottom {
  display: inline-block;

}

.app:not(.toggler) .icon {
  padding: 6px;
}

.app.toggler .icon {
  padding: 1px;
  bottom: 2px;
}

.app .icon img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

}
.app.toggler:not(.bar-bottom) {
  position: absolute;
  bottom: 2px;
}

.app.toggler.bar-bottom {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

.app.toggler:not(.bar-bottom) img {
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
}
</style>
