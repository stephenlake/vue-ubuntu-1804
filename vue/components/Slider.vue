<template>
<div>
  <input class="slider"
    type="range"
    min="0"
    max="100"
    v-model="value"
    :style="style">
</div>
</template>
<script>
export default {
  data() {
    return {
      value: 60,
    }
  },
  computed: {
    style() {
      return {
        background: `linear-gradient(to right, #dd4814 0%, #dd4814 ${this.value}%, #363633 ${this.value}%, #363633 100%)`
      }
    }
  }
}
</script>
<style scoped>
.slider {
  width: 100%;
  -webkit-appearance: none;
  height: 5px;
  border-radius: 4px;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #eeeeec;
  cursor: pointer;
}
</style>
