import axios from "axios";
import { ElMessage } from "element-plus";
import { GET_TOKEN } from "@/utils/token";

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

// axios请求前处理器
request.interceptors.request.use((config) => {
  let token = GET_TOKEN();
  if (token) {
    config.headers.token = token;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "没有权限访问";
        break;
      case 403:
        message = "请求被拒绝";
        break;
      case 404:
        message = "请求地址不存在";
        break;
      case 500:
        message = "服务器内部错误";
        break;
      default:
        message = "其他网络请求错误";
        break;
    }
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(error);
  },
);

export default request;
