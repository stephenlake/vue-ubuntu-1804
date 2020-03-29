<template>
<div class="popdown"
  :class="{show: show}">
  <div class="arrow"></div>
  <div class="box">
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  props: ['show'],


}
</script>
<style>
.popdown {
  position: absolute;
  top: 18px;
  visibility: hidden;
  opacity: 0.4;
  transition: top 90ms linear, opacity 210ms linear;
}

.popdown.show {
  top: 25px;
  visibility: visible;
  opacity: 1;
  transition: top 110ms linear, opacity 210ms linear;
}

.popdown.center {
  left: 50%;
  transform: translate(-50%, 0);
  width: 40%;
  height: 400px;
}

.popdown.right {
  right: 20px;
  width: 16%;
  height: 200px;
}

.popdown .arrow {
  position: relative;
  top: 8px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #3d3c36;
}

.popdown.center .arrow {
  left: 50%;
  transform: translate(-50%, 0);
}

.popdown.right .arrow {
  left: 80%;
}

.popdown .box {
  background: #3d3c36;
  width: 100%;
  height: 100%;
  border: 1px solid #1f1f1c;
  border-radius: 4px;
}
</style>
