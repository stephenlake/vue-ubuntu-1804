<template>
<div :style="$store.state.style">
  <router-view></router-view>
</div>
</template>
<script>
export default {

}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body {
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  margin: 0;
  font-family: 'Ubuntu';
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
