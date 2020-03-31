<template>
<div :class="`app ${barPlacement}`"
  @click="$emit('clicked')"
  :style="style">

  <div class="icon">
    <img :src="asset(app.iconGeneric)"
      v-if="app.iconGeneric" />
  </div>

</div>
</template>
<script>
export default {
  props: ['app', 'baseWidth', 'barPlacement'],

  computed: {
    style() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    },
    size() {
      if (this.app.toggler) {
        return this.baseWidth
      } else {
        return this.baseWidth - 16
      }
    }
  }
}
</script>
<style scoped>
.app {
  text-align: center;
  border-radius: 3px;
  margin: 0.1em;
  max-width: 100%;
}

.app:not(.toggler) {
  padding: 5px;
}

.app:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.app.bar-bottom {
  display: inline-block;
}

.app .icon img {
  width: 100%;
  max-width: 100%;
}

.app.toggler:not(.bar-bottom) {
  position: absolute;
  bottom: 30px;
}

.app.toggler.bar-bottom {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}

.app.toggler .icon {
  position: absolute;
  padding: 1%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
