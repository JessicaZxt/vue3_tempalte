<template>
  <ItemBox id="count">
    <template #title>预约渠道数据统计</template>
    <template #charts>
      <div class="charts" ref="chartsRef"></div>
    </template>
  </ItemBox>
</template>

<script setup lang="ts">
import ItemBox from "@/components/ItemBox/index.vue";
</script>

<style lang="scss" scoped></style>
