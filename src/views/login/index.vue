<template>
  <div class="login_box">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="login_right_col">
        <h1>Hello</h1>
        <p>欢迎来到硅谷甄选</p>
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginFormRef"
        >
          <el-form-item prop="username">
            <el-input
              prefix-icon="user"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              prefix-icon="lock"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-button" @click="loginHandler"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import useUserStore from "@/store/modules/user";
import { ElNotification } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import { GET_HOUR_TIME } from "@/utils/time";
// 表单元素
let loginForm = reactive({
  username: "",
  password: "",
});
// 定义表单规则
const rules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 5, max: 10, message: "长度在5-10位之间", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, message: "密码最小长度为6位", trigger: "blur" },
  ],
};
// 拿到表单ref对象
const loginFormRef = ref();
// 拿到user仓库数据实例
let userStore = useUserStore();
// 拿到路由对象实例
let $router = useRouter();
let $route = useRoute();
const loginHandler = async () => {
  await loginFormRef.value.validate();
  try {
    await userStore.LOGIN_REQ(loginForm);
    ElNotification({
      type: "success",
      title: `hi,${GET_HOUR_TIME()}好`,
      message: "欢迎回来",
      duration: 1000,
    });
    let redirect: any = $route.query.redirect;
    $router.push({ path: redirect || "/" });
  } catch (error) {
    ElNotification({
      type: "error",
      message: (error as Error).message,
      duration: 2000,
    });
  }
};
</script>

<style lang="scss" scoped>
.login_box {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_right_col {
    padding: 40px;
    margin-top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
  }
  h1,
  p {
    color: white;
    font-size: 40px;
  }
  p {
    font-size: 20px;
    margin: 20px 0;
  }
  .login-button {
    width: 100%;
  }
}
</style>
