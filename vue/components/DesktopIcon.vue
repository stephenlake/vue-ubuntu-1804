<template>
<div class="icon"
  :style="style"
  @dblclick="$emit('opened')">
  <div class="debug"
    v-if="$store.state.env.debug.active">
    x: {{ pos.x }} y: {{ pos.y }}
  </div>
  <draggable @dragged="dragged"
    :x="pos.x"
    :y="pos.y">
    <img class="graphic"
      :src="asset(app.iconGeneric)" />
    <div class="name">{{ app.name }}</div>
  </draggable>
</div>
</template>
<script>
export default {
  props: ['app', 'initialPos'],

  mounted() {
    this.pos = this.initialPos
  },

  data() {
    return {
      active: false,
      pos: {
        x: 0,
        y: 0,
      }
    }
  },

  computed: {
    style() {
      let style = {
        top: `${this.pos.y}px`,
        left: `${this.pos.x}px`
      }

      return style
    }
  },

  methods: {
    toggleActive() {
      this.active = !this.active
    },
    dragged(pos) {
      this.active = true
      this.pos = pos
    }
  }
}
</script>
<style scoped>
.icon {
  position: absolute;
  padding: 5px;
  margin: 0.1em;
  width: 64px;
  height: auto;
  overflow: contain;
  z-index: 3;
}

.icon .debug {
  position: absolute;
  width: 200px;
  top: 0;
  left: 32px;
  transform: translate(-50%, -100%);
  padding: 5px;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
}

.icon .graphic {
  width: 48px;
}

.icon .name {
  position: relative;
  display: inline-block;
  border-radius: 3px;
  font-size: 15px;
  color: #ffffff;
  /* white-space: nowrap; */
  overflow-wrap: break-word;
  left: 24px;
  /* Half of total icon */
  text-align: center;
  transform: translate(-50%, 0);
  margin: 0 auto;
  padding: 2px 5px;
}

.icon.active .name {
  background: #e66d45;
}

.icon:hover img {
  filter: brightness(110%);
}
</style>
