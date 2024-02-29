<template>
  <div class="layout_box">
    <div class="layout_aside">
      <!-- logo区域 -->
      <Logo></Logo>
      <!-- 菜单区域 -->
      <el-menu
        class="menus"
        background-color="#001529"
        :default-active="activeIndex"
        text-color="#fff"
        :collapse="!layoutStore.expand"
      >
        <Menus :menuList="userStore.routes"></Menus>
      </el-menu>
    </div>
    <div :class="['layout_tab_bar', { fold: !layoutStore.expand }]">
      <div class="tabbar_left">
        <Breadcrumb />
      </div>
      <div class="tabbar_right">
        <UserSetting />
      </div>
    </div>
    <div :class="['layout_container', { fold: !layoutStore.expand }]">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/views/layout/logo/index.vue";
import Main from "@/views/layout/main/index.vue";
import Menus from "@/views/layout/menus/index.vue";
import Breadcrumb from "@/views/layout/breadcrumb/index.vue";
import UserSetting from "@/views/layout/user-setting/index.vue";
import useUserStore from "@/store/modules/user";
import useLayoutStore from "@/store/modules/layout";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

let userStore = useUserStore();
let layoutStore = useLayoutStore();
let $route = useRoute();
let activeIndex = ref("/home");
watchEffect(() => {
  activeIndex.value = $route.path;
});
</script>

<style lang="scss" scoped>
.layout_box {
  width: 100%;
  height: 100vh;
  .layout_aside {
    width: $base_aside_width;
    height: 100%;
    background-color: $base_tabbar_background_color;
    transition: all 0.3s linear;
    .menus {
      border-right: none;
      height: calc(100vh - $logo_box_height);
    }
    &.fold {
      width: $aside_min_width;
    }
  }
  .layout_tab_bar {
    position: fixed;
    width: calc(100% - $base_aside_width);
    height: $base_tabbar_height;
    top: 0;
    left: $base_aside_width;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    transition: all 0.3s linear;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
    .tabbar_left,
    .tabbar_right {
      display: flex;
      align-items: center;
    }
    &.fold {
      width: calc(100% - $aside_min_width);
      left: $aside_min_width;
    }
  }
  .layout_container {
    position: absolute;
    top: $base_tabbar_height;
    left: $base_aside_width;
    background-color: #fff;
    width: calc(100% - $base_aside_width);
    height: calc(100vh - $base_tabbar_height);
    overflow: auto;
    transition: all 0.3s linear;
    &.fold {
      width: calc(100% - $aside_min_width);
      left: $aside_min_width;
    }
  }
}
</style>
