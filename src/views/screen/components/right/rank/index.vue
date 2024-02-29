<template>
  <ItemBox id="rank">
    <template #title>热门景区排行</template>
    <template #charts>
      <div class="charts" ref="chartsRef"></div>
    </template>
  </ItemBox>
</template>

<script setup lang="ts">
import ItemBox from "@/components/ItemBox/index.vue";
</script>

<style lang="scss" scoped></style>
