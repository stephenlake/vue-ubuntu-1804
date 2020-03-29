<template>
<div class="activity-bar"
  :style="style">

  <div class="label main"
    :class="{ active: overlayActive }"
    @click="toggleOverlay">Activities</div>

  <div class="label datetime"
    @click="datetime.showPopdown = !datetime.showPopdown">
    {{ datetime.value.format('{day-short} {hour-24-pad}:{minute-pad}') }}
  </div>

  <CalendarPopdown :show="datetime.showPopdown"/>
  <SettingsPopdown :show="settings.showPopdown"/>

  <div class="label taskbar"
    @click="settings.showPopdown = !settings.showPopdown">
    <i class="fa fa-wifi"></i>
    <i class="fa fa-volume-up"></i>
    <i class="fa fa-caret-down"></i>
  </div>

</div>
</template>
<script>
export default {
  props: ['overlayActive'],

  data() {
    return {
      datetime: {
        value: spacetime('now'),
        timer: null,
        showPopdown: false,
      },
      settings: {
        showPopdown: false,
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
    toggleOverlay() {
      this.$desktop.toggleOverlay('activities')
    },
    registerDatetime() {
      this.datetime.timer = setInterval(() => {
        this.datetime.value = spacetime('now')
      }, 1000)
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
<style scoped>
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
  color: #eeeeec;
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
  border-bottom: 2px solid #dd4814;
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
