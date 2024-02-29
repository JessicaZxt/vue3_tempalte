<template>
  <div id="geo">
    <p class="message">平台高峰预警（2条）</p>
    <img
      class="header-bg"
      src="../../../images/dataScreen-header-warn-bg.png"
      alt=""
      srcset=""
    />
    <p class="total">景区实时客流量</p>
    <div class="echarts" ref="echartsRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import chinaJson from "./china.json";

onMounted(() => {
  initCharts();
});

const echartsRef = ref();
echarts.registerMap("china", { geoJSON: chinaJson });
const initCharts = () => {
  const charts = echarts.init(echartsRef.value);
  charts.setOption({
    geo: {
      map: "china",
      zoom: 1.5,
      top: 180,
      label: {
        show: true,
        color: "#fff",
        shadowColor: "#666",
      },
      itemStyle: {
        borderColor: "#1862a1",
        shadowColor: "#1862a1",
        shadowBlur: 1.5,
        borderWidth: 1.5,
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#02327e", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#05234e", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      type: "category",
      show: false,
    },
    series: [
      {
        type: "lines",
        data: [
          {
            point: ["北京", "广东"],
            coords: [
              [116.405285, 39.904989],
              [113.604932, 22.339617],
            ],
            lineStyle: {
              type: "solid",
              width: 2,
              color: "#999",
            },
          },
          {
            point: ["北京", "西藏"],
            coords: [
              [116.405285, 39.904989],
              [91.132212, 29.660361],
            ],
            lineStyle: {
              type: "solid",
              width: 2,
              color: "#999",
            },
          },
        ],
        effect: {
          show: true,
          color: "#fff",
          period: 3,
          trailLength: 0,
          symbolSize: [20, 20],
          symbol:
            "path://M596.562 830.99l11.947-192.1 367.547 183.187V710.714L615.134 370.097V155.791c-0.02-56.63-45.548-142.138-101.694-142.138S411.767 99.161 411.767 155.791v214.255L50.842 710.766v111.363l361.472-183.187 14.755 207.926a131.335 131.335 0 0 0 1.12 14.61l-65.71 59.938v66.13L514.259 937l2.434-0.83L662 987.547v-66.13l-67.782-61.843 2.287-28.583z",
        },
        symbol: "circle",
        symbolSize: 5,
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
#geo {
  position: relative;
  .header-bg,
  .message {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .message {
    top: 10px;
    color: #fff;
  }
  .echarts {
    height: 100%;
  }
  .total {
    background: url(/src/views/screen/images/map-title-bg.png) no-repeat;
    background-size: 100% 100%;
    margin: 50px 0 0 30px;
    height: 30px;
    width: 309px;
    line-height: 30px;
    padding-left: 28px;
    color: #fff;
    font-weight: 600;
  }
}
</style>
