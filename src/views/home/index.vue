<template>
  <div id="home">
    <img class="avatar_img" :src="userInfo.avatar" alt="" />
    <span>hi，{{ userInfo.username }}，欢迎回来</span>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
let { userInfo }: any = userStore;
</script>

<style lang="scss" scoped>
#home {
  height: 300px;
  line-height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 1px #ccc;
  margin: 20px;
  .avatar_img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    vertical-align: middle;
    margin-right: 30px;
  }
}
</style>
