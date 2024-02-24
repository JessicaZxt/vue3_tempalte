<template>
  <div class="top">
    <div class="left">
      <a href="javascript:void 0;" class="btn-box home-btn" @click="jumpToHome">
        <span>首页</span>
      </a>
    </div>
    <div class="center">智慧旅游可视化大数据展示平台</div>
    <div class="right">
      <a href="#" class="btn-box report-btn">
        <span>统计报告</span>
      </a>
      <span class="time">当前时间:{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref, onBeforeUnmount } from "vue";
import moment from "moment";

onMounted(() => {
  getTime();
});

onBeforeUnmount(() => {
  clearInterval(timeId.value);
});

const $router = useRouter();

let time = ref(moment().format("YYYY年MM月DD日 HH:mm:ss"));
let timeId = ref(0);

const getTime = () => {
  timeId.value = setInterval(() => {
    time.value = moment().format("YYYY年MM月DD日 HH:mm:ss");
  }, 1000);
};

const jumpToHome = () => {
  $router.push("/home");
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  height: 90px;
  .btn-box {
    width: 135px;
    height: 42px;
    text-align: center;
    line-height: 38px;
    text-decoration: none;
    background: url(/src/views/screen/images/dataScreen-header-btn-bg-l.png)
      no-repeat;
    background-size: 100% 100%;
    color: #20fcff;
  }
  .left {
    flex: 1;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: 100% 40px;
    .home-btn {
      float: right;
      background: url(/src/views/screen/images/dataScreen-header-btn-bg-l.png)
        no-repeat;
    }
  }
  .right {
    flex: 1;
    background: url(../../images/dataScreen-header-right-bg.png) no-repeat;
    background-size: 100% 40px;
    .report-btn {
      float: left;
      background: url(/src/views/screen/images/dataScreen-header-btn-bg-r.png)
        no-repeat;
    }
    .time {
      float: right;
      margin-right: 10px;
      color: #20fcff;
      line-height: 38px;
    }
  }
  .center {
    flex: 2;
    background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
    background-size: cover;
    text-align: center;
    line-height: 90px;
    font-size: 32px;
    color: #20fcff;
  }
}
</style>
