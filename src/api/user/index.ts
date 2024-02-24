import request from "@/utils/request";
// 使用import type导入类型，不会在编译后的文件里加入声明类型，减小打包后的文件体积
import type {
  UserLoginData,
  UserLoginResponseData,
  userInfoResponseData,
} from "./type";

enum USER {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

// 登录接口
export const LOGIN = (data: UserLoginData) =>
  request.post<any, UserLoginResponseData>(USER.LOGIN_URL, data);

// 获取用户信息详情
export const GET_USER_INFO = () =>
  request.get<any, userInfoResponseData>(USER.USERINFO_URL);
