<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" class="main_content" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from "vue";
import useLayoutStore from "@/store/modules/layout";

let layoutStore = useLayoutStore();
let flag = ref(true);

watch(
  () => layoutStore.fresh,
  () => {
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  },
);
</script>

<style lang="scss" scoped>
.main_content {
  padding: 20px;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
