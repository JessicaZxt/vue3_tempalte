<template>
  <el-icon class="expand" @click="expandMenu">
    <component :is="layoutStore.expand ? 'Expand' : 'Fold'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <template v-for="item in $route.matched" :key="item.path">
      <el-breadcrumb-item
        v-show="!item.meta.hidden"
        :to="{ path: item.path }"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutStore from "@/store/modules/layout";
import { useRoute } from "vue-router";
let layoutStore = useLayoutStore();
let $route = useRoute();
const expandMenu = () => {
  layoutStore.Expand_Menu();
};
</script>

<style lang="scss" scoped>
.expand {
  margin: 0 10px;
  cursor: pointer;
}
</style>
