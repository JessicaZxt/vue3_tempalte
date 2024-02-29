<template>
  <ItemBox id="year">
    <template #title>年度游客量对比</template>
    <template #charts>
      <div class="charts" ref="chartsRef"></div>
    </template>
  </ItemBox>
</template>

<script setup lang="ts">
import ItemBox from "@/components/ItemBox/index.vue";
</script>

<style lang="scss" scoped></style>
