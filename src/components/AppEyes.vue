<template>
  <div class="Eyes">
    <div class="eyes">
      <div class="eye">
        <div class="ball"></div>
      </div>

      <div class="eye">
        <div class="ball"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.eyes {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}
.eye {
  width: 240px;
  height: 120px;
  background: #fff;
  display: inline-block;
  margin: 40px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.ball {
  width: 40px;
  height: 40px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 15px solid #333;
}
</style>
