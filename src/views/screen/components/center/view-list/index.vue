<template>
  <ItemBox id="view-list">
    <template #title>男女比例</template>
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
    grid: {
      bottom: 30,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      boundaryGap: false,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: "(访问量)",
      type: "value",
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
    },
    series: [
      {
        data: [830, 1932, 9101, 1340, 3290, 1330, 190],
        type: "line",
        smooth: true,
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#68583d", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#23264b", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
#view-list {
  background: url(../../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 20px;
  .charts {
    height: 200px;
  }
}
</style>
