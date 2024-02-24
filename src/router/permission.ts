import router from "@/router";
import pinia from "@/store/index";
import useUserStore from "@/store/modules/user";
import { ElMessage } from "element-plus";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

let userStore = useUserStore(pinia);

router.beforeEach((to, _, next) => {
  const token = userStore.token;
  NProgress.start();
  if (token) {
    userStore.USER_INFO_REQ();
    if (to.path === "login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      ElMessage({
        message: "请先登录",
        type: "warning",
      });
      next({ path: "/login", query: { redirect: to.path } });
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
