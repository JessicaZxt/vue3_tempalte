<template>
  <div id="container">
    <div class="screen" ref="screen">
      <Top />
      <div class="bottom">
        <div class="left">
          <Tourist class="item-top" />
          <Sex class="item-center" />
          <Age class="item-bottom" />
        </div>
        <div class="center">
          <Geo class="geo" />
          <ViewList class="view-list" />
        </div>
        <div class="right">
          <Rank class="item-top" />
          <Year class="item-center" />
          <Count class="item-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Top from "@/views/screen/components/top/index.vue";
import Tourist from "@/views/screen/components/left/tourist/index.vue";
import Sex from "@/views/screen/components/left/sex/index.vue";
import Age from "@/views/screen/components/left/age/index.vue";
import Geo from "@/views/screen/components/center/geo/index.vue";
import ViewList from "@/views/screen/components/center/view-list/index.vue";
import Count from "@/views/screen/components/right/count/index.vue";
import Year from "@/views/screen/components/right/year/index.vue";
import Rank from "@/views/screen/components/right/rank/index.vue";
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
#container {
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
    .bottom {
      display: flex;
      justify-content: space-between;
      height: 980px;
    }
    .left,
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: -40px;
      .item-top {
        flex: 1.4;
      }
      .item-center,
      .item-bottom {
        flex: 1;
      }
      .item-center {
        margin: 20px 0;
      }
    }
    .center {
      flex: 2;
      display: flex;
      flex-direction: column;
      .geo {
        flex: 2;
      }
      .view-list {
        flex: 1;
      }
    }
  }
}
</style>
