<template>
<popdown class="center"
  :show="show">

  <div class="notifications"></div>
  <div class="calendar">
    <div class="current">
      <div class="day">{{ spacetime('now').format('{day}')}}</div>
      <div class="fulldate">{{ spacetime('now').format('{month} {date} {year}')}}</div>
      <br>
    </div>

    <datepicker :inline="true"></datepicker>
  </div>
</popdown>
</template>
<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker,
  },
  props: ['show'],
}
</script>
<style>
.notifications {
  width: 55%;
  height: 90%;
}

.calendar {
  position: absolute;
  top: 80px;
  right: 20px;
  width: 34%;
  padding-left: 20px;
  border-left: 0.05rem solid rgba(255, 255, 255, 0.1);
}

.calendar .current {
  color: #cacac9;
  position: absolute;
  top: -30px;
}

.calendar .current .day {
  font-size: 17px;
}

.calendar .current .fulldate {
  font-size: 25px;
}

.vdp-datepicker__calendar {
  position: absolute !important;
  top: 25px !important;
  background: transparent !important;
  border: none !important;
  width: 100%;
  max-width: 100%;
  color: #cacac9 !important;
}

.vdp-datepicker__calendar .cell,
.vdp-datepicker__calendar .cell.day-header {
  font-size: 13px !important;
  color: #cacac9 !important;
}

.vdp-datepicker__calendar header .next:after {
  border-left: 10px solid #616159 !important;
}

.vdp-datepicker__calendar header .prev:after {
  border-right: 10px solid #616159 !important;
}

.vdp-datepicker__calendar header .next:hover,
.vdp-datepicker__calendar header .prev:hover {
  background: rgba(255, 255, 255, 0.035) !important;
  border-radius: 5px !important;
}

.day__month_btn.up {
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
}


.vdp-datepicker__calendar .cell {
  border: none !important;
  border-radius: 50%;
  width: 32px !important;
  height: 32px !important;
  line-height: 32px !important;
  margin-top: 5px !important;
  text-align: center !important;
}

.vdp-datepicker__calendar .cell:hover {
  background: rgba(255, 255, 255, 0.15) !important;
}

.vdp-datepicker__calendar .cell.weekend {
  color: #616159;
}

.vdp-datepicker__calendar .cell.selected,
.cell.day.today {
  background: #dd4814 !important;
  background-size: 200% 200% !important;
  border-radius: 50%;
  font-weight: bold !important;
  color: #ffffff;
}



.day__month_btn.up:hover {
  background: transparent !important;
}
</style>
