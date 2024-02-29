<template>
  <ItemBox id="age">
    <template #title>年龄比例</template>
    <template #charts>
      <div class="charts" ref="chartsRef"></div>
    </template>
  </ItemBox>
</template>

<script setup lang="ts">
import ItemBox from "@/components/ItemBox/index.vue";
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

onMounted(() => {
  initCharts();
});

const chartsRef = ref();
const initCharts = () => {
  const charts = echarts.init(chartsRef.value);
  charts.setOption({
    legend: {
      orient: "vertical",
      right: 60,
      top: 30,
      textStyle: { color: "#fff" },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inner",
          formatter: "{c}%",
          textStyle: {
            color: "#fff",
          },
        },
        data: [
          { value: 10, name: "新闻" },
          { value: 75, name: "财经" },
          { value: 58, name: "直播" },
          { value: 48, name: "医疗" },
          { value: 30, name: "商业" },
        ],
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
#age {
  .charts {
    height: 200px;
  }
}
</style>
