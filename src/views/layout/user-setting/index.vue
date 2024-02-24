<template>
  <el-button icon="Refresh" circle @click="refresh" />
  <el-button icon="FullScreen" circle @click="fullScreen" />
  <el-button icon="Setting" circle @click="setting" />
  <img class="avatar_img" :src="userInfo.avatar" alt="" />
  <el-dropdown style="margin: 0 10px">
    <span class="el-dropdown-link">
      {{ userInfo.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import useUserStore from "@/store/modules/user";
import useLayoutStore from "@/store/modules/layout";

let $router = useRouter();
let $route = useRoute();
let fullScreenStatus = ref(false);
let userStore = useUserStore();
let layoutStore = useLayoutStore();
let { userInfo }: any = userStore;
// 刷新
const refresh = () => {
  layoutStore.fresh = !layoutStore.fresh;
};
// 全屏
const fullScreen = () => {
  if (!fullScreenStatus.value) {
    document.body.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
  fullScreenStatus.value = !fullScreenStatus.value;
};
// 设置
const setting = () => {};
// 退出登录
const logout = () => {
  userStore.LOGOUT();
  $router.push({ path: "/login", query: { redirect: $route.path } });
};
</script>

<style lang="scss" scoped>
.avatar_img {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-left: 10px;
}
</style>
