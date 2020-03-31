<template>
<window :w="size.w"
  :h="size.h"
  :x="pos.x"
  :y="pos.y">
  <template v-slot:titlebar>
    Sandbox
  </template>
  <template v-slot:content>
    <div class="field">
      <label>Grid Block Size {{ $store.state.env.debug.grid.size }}px</label>
      <Slider v-model="$store.state.env.debug.grid.size"
        :min="4"
        :max="100" />
    </div>
    <div class="field">
      <label>Sidebar Size: {{ $store.state.env.ui.sidebar.width }}px</label>
      <Slider v-model="$store.state.env.ui.sidebar.width"
        :min="20"
        :max="84" />
    </div>

    <div class="field">
      <label>Activity Bar Size: {{ $store.state.env.ui.activityBar.height }}px</label>
      <Slider v-model="$store.state.env.ui.activityBar.height"
        :min="22"
        :max="64" />
    </div>

    <div class="field">
      <label>Sidebar Position (Default: Left)</label>
      <select v-model="$store.state.env.ui.sidebar.position">
        <option value="left">Left</option>
        <option value="bottom">Bottom</option>
        <option value="right">Right</option>
      </select>
    </div>

    <div class="field">
      <label>Debug toggle: <strong>F10</strong> (Default: true)</label>
    </div>

    <div class="field">
      <label>Fullscreen toggle: <strong>F11</strong> (Default: false)</label>
    </div>

  </template>
</window>
</template>
<script>
export default {
  mounted() {
    this.pos.x = this.desktop.$el.offsetWidth - (this.size.w + 30)
    this.pos.y = this.desktop.$el.offsetHeight - (this.size.h + 30)
  },
  data() {
    return {
      size: {
        w: 520,
        h: 400,
      },
      pos: {
        x: 600,
        y: 200,
      }
    }
  }
}
</script>
<style scoped>
.field {
  display: block;
  margin-bottom: 5px;
  padding: 8px 12px 0 8px;
}

.field label {
  font-size: 12px;
}

.field input,
.field select,
.field button {
  margin: 7px 4px;
  border-radius: 4px;
  padding: 5px 8px;
  border: 1px solid grey;
  outline: 0;
}
</style>
