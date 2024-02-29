<template>
  <ItemBox id="sex">
    <template #title>男女比例</template>
    <template #charts>
      <div class="icon-box">
        <div class="man">
          <img src="../../../images/man.png" alt="" srcset="" />
        </div>
        <div class="woman">
          <img src="../../../images/woman.png" alt="" srcset="" />
        </div>
      </div>
      <div class="nums">
        <p>男士58%</p>
        <p>女士42%</p>
      </div>
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
      left: 24,
      right: 0,
      bottom: 0,
      top: 0,
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
        data: [58],
        type: "bar",
        z: 100,
        itemStyle: {
          borderRadius: 20,
        },
      },
      {
        data: [142],
        type: "bar",
        barGap: "-100%",
        itemStyle: {
          borderRadius: 20,
          color: "pink",
        },
      },
    ],
  });
};
</script>

<style lang="scss" scoped>
#sex {
  .icon-box {
    display: flex;
    justify-content: space-around;
    margin-top: 32px;
    div {
      display: inline-block;
      width: 111px;
      height: 116px;
      text-align: center;
      line-height: 116px;
      img {
        vertical-align: middle;
      }
    }
  }
  .man {
    background: url(../../../images/man-bg.png);
    background-size: 100% 100%;
  }
  .woman {
    background: url(../../../images/woman-bg.png);
    background-size: 100% 100%;
  }
  .charts {
    height: 38px;
  }
  .nums {
    display: flex;
    justify-content: space-between;
    padding: 0 48px;
    margin-top: 30px;
  }
}
</style>
