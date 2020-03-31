<template>
<div class="titlebar" @dblclick.left.prevent="maximizeToggle">
  <draggable :x="windowPos.x" :y="windowPos.y" @dragged="dragged">
    <div class="title">
      <slot></slot>
      <div class="buttons">
        <button class="button">⎯</button>
        <button class="button" @click="maximizeToggle">□</button>
        <button class="button close">x</button>
      </div>
    </div>
  </draggable>
</div>
</template>
<script>
export default {
  props: ['windowPos'],

  methods: {
    dragged(pos) {
      this.$emit('dragged', pos)
    },
    maximizeToggle() {
      this.$emit('maximize')
    }
  }
}
</script>
<style>
.titlebar {
  position: relative;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom, #55534b 60%, #43423d);
  border-bottom: 2px solid #423838;
  border-radius: 6px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: #dfdbd2;
  font-weight: 600;
  height: 36px;
  width: 100%;
  margin-bottom: 10px;
}

.titlebar .title {
  font-size: 14px;
  padding-top: 11px;
  padding-left: 12px;
}

.titlebar .buttons {
  position: absolute;
  right: 10px;
  top: 8px;
}

.titlebar .button {
  border: 1px solid #3d3c37;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  line-height: 10px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(to bottom, #868580 60%, #5f5e59);
  color: #3d3c37;
}

.titlebar .button:hover {
  filter: brightness(134%);
}

.titlebar .button.close {
  background-image: linear-gradient(to bottom, #f28665 20%, #df4f1d);
}
</style>
