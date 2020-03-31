<template>
<div class="overlay"
  :class="{ active: active }"
  :mode="mode">

  <div class="search">
    <input ref="search"
      type="text"
      v-model="searchTerm"
      placeholder="Type to search..."
      tabindex="-1" />
  </div>

  <div class="apps"
    v-if="!mode || mode == 'apps'">
    <div class="app"
      v-for="(app, index) in apps"
      @click="openApp(app)">
      <img :src="asset(app.iconGeneric)" />
      <div class="name">{{ app.name }}</div>
    </div>
  </div>

</div>
</template>
<script>
export default {
  props: ['mode'],

  data() {
    return {
      active: false,
      searchTerm: '',
    }
  },

  watch: {
    mode: function(mode) {
      if (!mode) {
        this.searchTerm = ''
        this.active = false
        this.$emit('exit')
      } else {
        this.active = true
      }
    }
  },

  created() {
    this.registerKeyListener()
  },

  beforeDestroy() {
    this.unregisterKeyListener()
  },

  computed: {
    apps() {
      return this.$store.state.system.activities.available
    }
  },

  methods: {
    registerKeyListener() {
      window.addEventListener('keydown', this.typed)
    },
    unregisterKeyListener() {
      window.removeEventListener('keydown', this.typed)
    },
    typed(e) {
      if (e.key === 'Escape') {
        this.exit()
      } else {
        this.$refs.search.focus()
      }
    },
    exit() {
      if (this.searchTerm.length) {
        this.searchTerm = ''
      } else {
        this.$emit('exit')
      }
    }
  }
}
</script>
<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  opacity: 0;
  transition: opacity 70ms linear;
  z-index: 100;
}

.overlay.active {
  visibility: visible;
  display: block;
  opacity: 1;
  background-image: radial-gradient(transparent, #000000);
  transition: opacity 70ms linear;
}

.overlay .search input {
  position: absolute;
  background-color: #3e3d38;
  left: 50%;
  top: 50px;
  width: 16%;
  transform: translate(-50%, 0);
  color: #eeeeec;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 14px;
  border: 0.15em solid #747467;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0px 0px 4px 0px #000;
  font-family: 'Ubuntu'
}

.overlay .search input:focus,
.overlay .search input:active {

  border: 0.15em solid #dd4814;
  outline: none;
}

.overlay .search input::placeholder {
  color: #eeeeec;
}

.overlay .apps {
  width: 70%;
  margin: 100px auto;
  text-align: center;
}

.overlay .app {
  position: relative;
  display: inline-block;
  width: 110px;
  height: 110px;
  margin: 38px;
  padding: 9px;
  text-align: center;
}

.overlay .app:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 7px;
}

.overlay .app .name {
  display: block;
  color: #fff;
  font-size: 15px;
}

.overlay .app img {
  width: 92px;
}
</style>
