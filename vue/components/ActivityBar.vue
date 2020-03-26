<template>
<div class="activity-bar" :style="style">
  <div class="label main" :class="{ active: active }" @click="active = !active">Activites</div>
  <div class="label datetime">{{ datetime.value.format('{day-short} {hour-24}:{minute-pad}') }}</div>
  <div class="label taskbar">
    <i class="fa fa-wifi"></i>
    <i class="fa fa-volume-up"></i>
    <i class="fa fa-caret-down"></i>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      datetime: {
        value: spacetime('now'),
        timer: null,
      },
      properties: {
        height: 26,
        opacity: 0.1,
      }
    }
  },
  beforeDestroy() {
    this.unregisterDatetime()
  },
  created() {
    this.registerDatetime()
  },
  methods: {
    registerDatetime() {
      this.datetime.timer = setInterval(() => {
        this.datetime.value = spacetime('now')
      }, 10000)
    },
    unregisterDatetime() {
      clearInterval(this.datetime.timer)
    }
  },
  computed: {
    style() {
      return {
        height: `${this.properties.height}px`,
        background: `rgba(0,0,0, ${this.properties.opacity})`
      }
    }
  }
}
</script>
<style>
.activity-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 26px;
  background: rgba(0, 0, 0, 0.1);
}

.activity-bar .label {
  top: 5px;
  position: absolute;
  color: #e6d8d8;
  font-weight: bold;
  font-size: 15px;
  padding: 0 12px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.43);
}

.activity-bar .label.main {
  left: 0;
}

.activity-bar .label:hover,
.activity-bar .label.active {
  color: #ffffff;
}

.activity-bar .label.active {
  border-bottom: 2px solid #de9104;
}

.activity-bar .datetime {
  left: 50%;
  transform: translate(-50%, 0);
}

.activity-bar .taskbar {
  right: 0;
  padding: 0 13px;
  text-align: center;
  margin: 0 auto;
}

.activity-bar .taskbar .fa {
  padding: 0 4px;
}
</style>
