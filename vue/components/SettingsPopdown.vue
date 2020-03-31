<template>
<popdown class="right"
  :show="show">

  <Slider />
  
  <div class="buttons">
    <hr class="separator" />
    <div class="button settings">
      <i class="fa fa-wrench"></i>
    </div>
    <div class="button lock">
      <i class="fa fa-lock"></i>
    </div>
    <div class="button power">
      <i class="fa fa-power-off"></i>
    </div>
  </div>
</popdown>
</template>
<script>
export default {
  props: ['show'],
}
</script>
<style scoped>
hr.separator {
  position: absolute;
  top: -20px;
  width: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  border-color: #0000004d;
  border-width: 0.03rem;
}

.buttons {
  text-align: center;
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-top: 10px;
}

.buttons .button {
  display: inline-block;
  width: 42px;
  height: 42px;
  margin: 0 12px;
  border: 1px solid #0000004d;
  border-width: 0.05rem;
  border-radius: 50%;
  line-height: 42px;
  color: #eeeeec;
}

.buttons .button:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
