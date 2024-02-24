import { defineStore } from "pinia";
import { LOGIN, GET_USER_INFO } from "@/api/user/index";
import type { UserLoginData } from "@/api/user/type";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
import { UserState } from "@/store/types/user";
import { constantRoutes } from "@/router/routes";

const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      routes: constantRoutes,
      userInfo: {},
    };
  },
  actions: {
    async LOGIN_REQ(data: UserLoginData) {
      let result = await LOGIN(data);
      if (result.code === 200) {
        this.token = result.data.token as string;
        SET_TOKEN(result.data.token as string);
        return "登录成功";
      } else {
        return Promise.reject(result.data);
      }
    },
    async USER_INFO_REQ() {
      let result: any = await GET_USER_INFO();
      this.userInfo = result.data.checkUser;
    },
    LOGOUT() {
      REMOVE_TOKEN();
      this.token = "";
    },
  },
  getters: {},
});

export default useUserStore;
