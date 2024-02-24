<template>
  <template v-for="item in menuList" :key="item.path">
    <el-menu-item
      v-if="!item.children && !item.meta?.hidden"
      :index="item.path"
      @click="goRoute"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        {{ item.meta?.title }}
      </template>
    </el-menu-item>
    <el-menu-item
      v-if="item.children && item.children.length === 1"
      :index="item.children[0].path"
      @click="goRoute"
    >
      <el-icon>
        <component :is="item.children[0].meta?.icon"></component>
      </el-icon>
      <template #title>
        {{ item.children[0].meta?.title }}
      </template>
    </el-menu-item>
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <span> {{ item.meta?.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
defineProps({
  menuList: {
    type: Array<any>,
  },
});
let $router = useRouter();
let goRoute = (menuItem: any) => {
  $router.push({ path: menuItem.index });
};
</script>
<script lang="ts">
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped></style>
