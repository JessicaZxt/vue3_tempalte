<template>
  <ItemBox id="tourist">
    <template #title>游客实时统计</template>
    <template #charts>
      <p class="total">可预约总量<span style="color: orange">99999</span>人</p>
      <div class="charts-box">
        <span
          v-for="(item, index) in total"
          :key="index"
          class="total-item-box"
        >
          {{ item }}
        </span>
        <div ref="chartsRef" class="charts"></div>
      </div>
    </template>
  </ItemBox>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ItemBox from "@/components/ItemBox/index.vue";
import * as echarts from "echarts";
import "echarts-liquidfill";

const total = ref("216908人");

const chartsRef = ref();

onMounted(() => {
  initCharts();
});

const initCharts = () => {
  const charts = echarts.init(chartsRef.value);
  charts.setOption({
    series: [
      {
        type: "liquidFill",
        data: [0.6, 0.5, 0.4, 0.3],
        radius: "80%",
        label: {
          formatter: function () {
            return "预约量";
          },
          fontSize: 20,
          color: "#fff",
        },
        shape: "circle",
        phase: 0,
        direction: "right",
        outline: {
          show: true,
          borderDistance: 0, // 边框线与图表的距离 数字
          itemStyle: {
            opacity: 1,
            borderWidth: 0,
            borderColor: "#2bf9ed",
          },
        },
        // 图形样式
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#c5e87e" }, //柱图渐变色
            { offset: 0.5, color: "#2bf9ed" }, //柱图渐变色                 //柱图渐变色
          ]),
          opacity: 0.5,
          shadowBlur: 10,
        },
        backgroundStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2bf9ed" }, //柱图渐变色
            { offset: 0.4, color: "#44C0C1" }, //柱图渐变色                 //柱图渐变色
          ]),
          opacity: 0.5,
        },
        // 图形的高亮样式
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
      },
      {
        name: "Access From",
        type: "pie",
        radius: ["43%", "50%"],
        center: ["50%", "50%"],
        startAngle: 340,
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
          disabled: true,
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 0.4,
            name: "Direct",
            itemStyle: {
              color: "#2bf9ed",
            },
          },
          {
            value: 0.6,
            name: "Direct",
            itemStyle: {
              color: "rgba(240, 248, 255, 0)",
            },
          },
        ],
        tooltip: {
          show: false,
        },
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
#tourist {
  width: 100%;
  .total {
    text-align: right;
    padding-right: 8px;
    font-size: 16px;
  }
  .charts-box {
    text-align: center;
    margin-top: 30px;
    .charts {
      height: 260px;
    }
  }
  .total-item-box {
    display: inline-block;
    width: 60px;
    height: 67px;
    background: url(/src/views/screen/images/total.png);
    background-size: 100% 100%;
    text-align: center;
    line-height: 67px;
    font-size: 32px;
    color: #20fcff;
    margin-right: 4px;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }
  }
}
</style>
