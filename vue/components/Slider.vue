<template>
<div>
  <input class="slider"
    type="range"
    :min="min"
    :max="max"
    v-model="content"
    v-on:input="inputChanged"
    v-bind="$attrs"
    :style="style">
</div>
</template>
<script>
export default {

  inheritAttrs: false,

  props: {
    value: {},
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    showMin: {
      type: Boolean,
      default: true
    },
    showMax: {
      type: Boolean,
      default: false,
    }
  },

  mounted() {
    this.content = this.value
  },

  data() {
    return {
      content: 0,
    }
  },
  computed: {
    style() {

      let width = (this.content - this.min) / (this.max - this.min) * 100

      return {
        background: `linear-gradient(to right, #dd4814 0%, #dd4814 ${width}%, #363633 ${width}%, #363633 100%)`
      }
    }
  },
  watch: {
    value: function(value) {
      if (!value) {
        this.content = null
      } else {
        this.content = value
        this.inputChanged()
      }
    }
  },
  methods: {
    inputChanged() {
      this.$emit('input', this.content)
    },
    inputFocused() {
      this.focused = true
      this.$emit('focused')
    },
    inputBlurred() {
      this.focused = false
      this.$emit('blurred')
    }
  }
}
</script>
<style scoped>
.slider {
  width: 100%;
  max-width: 100%;
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
  align: middle;
}
</style>
