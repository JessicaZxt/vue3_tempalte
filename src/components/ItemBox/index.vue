<template>
  <div class="item-box">
    <div>
      <p class="title"><slot name="title"></slot></p>
      <p class="title-bg"></p>
    </div>
    <slot name="charts"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.item-box {
  background: url(../../views/screen/images/dataScreen-main-lc.png);
  background-size: 100% 100%;
  color: #fff;
}
.title {
  font-size: 22px;
  margin-bottom: 10px;
}
.title-bg {
  width: 68px;
  height: 7px;
  background: url(../../views/screen/images/dataScreen-title.png);
  background-size: 100% 100%;
}
</style>
