<template>
  <div class="logo_box">
    <img :src="setting.logoUrl" alt="logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from "@/setting";
</script>

<style lang="scss" scoped>
.logo_box {
  display: flex;
  align-items: center;
  padding-left: 14px;
  width: 100%;
  height: $logo_box_height;
  img {
    width: 35px;
    height: 35px;
  }
  p {
    font-size: 28px;
    color: white;
    margin-left: 12px;
  }
}
</style>
