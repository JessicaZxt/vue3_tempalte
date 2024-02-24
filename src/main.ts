import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import App from "@/App.vue";
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// svg需要的配置插件
import "virtual:svg-icons-register";

// 注册全局组件
import globalComponents from "@/components/index.ts";

//引入全局的样式文件
import "@/styles/index.scss";

// 引入pinia仓库
import pinia from "@/store/index";

// 引入路由
import router from "@/router/index";

// 引入路由鉴权
import "@/router/permission";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(globalComponents);
app.use(pinia);
app.use(router);
app.mount("#app");
