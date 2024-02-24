<template>
  <div class="container">
    <div class="screen" ref="screen">
      <Top />
      <div class="bottom">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Top from "@/views/screen/components/top/index.vue";
import { onMounted, ref, onBeforeUnmount } from "vue";

let screen = ref();

onMounted(() => {
  setScreenStyle();
  window.onresize = function () {
    setScreenStyle();
  };
});

const getScale = (width = 1920, height = 1080) => {
  let ww = window.innerWidth / width;
  let wh = window.innerHeight / height;
  return ww < wh ? ww : wh;
};

const setScreenStyle = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
};

onBeforeUnmount(() => {
  window.onresize = null;
});
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
  .screen {
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left top;
  }
}
</style>
