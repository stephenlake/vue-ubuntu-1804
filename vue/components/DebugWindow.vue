<template>
<window :w="220"
  :h="500">
  <template v-slot:titlebar>
    Sandbox
  </template>
  <template v-slot:content>
    <div class="field">
      <label>Grid Block Size (Default: 32)</label>
      <input v-model="$store.state.env.debug.grid.size"
        type="text">
    </div>
    <div class="field">
      <label>Sidebar Size (Default: 32)</label>
      <input v-model="$store.state.env.ui.sidebar.width"
        type="text">
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
      <label>Activity Bar Size (Default: 26)</label>
      <input v-model="$store.state.env.ui.activityBar.height"
        type="text">
    </div>

    <div class="field">
      <label>Fullscreen toggle: F11 (Default: false)</label>
    </div>

    <div class="field">
      <label>Debug toggle: F10 (Default: true)</label>
    </div>

    <!-- <div class="field">
      <label>Spawn:</label><br>
      <button>Window</button>
      <button>Random App</button>
    </div> -->
  </template>
</window>
</template>
<script>
export default {
  methods: {

  }
}
</script>
<style scoped>
.field {
  display: block;
  margin-bottom: 5px;
}

.field label {
  padding: 4px 8px;
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
