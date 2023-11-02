import { defineStore } from "pinia";
import type { loginFormData } from "@/api/user/type";
import { reqLogin } from "@/api/user";
import type { UserState } from "./type/type";
//引入产量路由
import { constantRoute } from "@/router/routes";

//创建用户小仓库
const useUserStore = defineStore("User", {
  // 小仓库存储数据
  state: (): UserState => {
    const tokenStore = localStorage.getItem("token");
    return {
      token: tokenStore,
      menuRoutes: constantRoute, //仓库储存生成菜单需要的数组（路由）
    };
  },
  // 异步|逻辑 地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      const res = await reqLogin(data);
      //登录请求成功200 -> token
      //登录请求：失败201 -> 登录请求失败错的信息
      if (res.code == 200) {
        //token 储储pinia
        this.token = res.data.token;
        return "ok";
        // localStorage.setItem("token", res.data.token);
      } else {
        // console.log(res.data, "userlogin");
        return Promise.reject(new Error(res.data.message));
      }
    },
  },
  getters: {},
  // 添加如下配置
  persist: {
    //开启持久化
    enabled: true,
    strategies: [
      //storage默认是sessionStorage
      //firstName用sessionStorage存储
      { storage: localStorage, paths: ["token"] },
    ],
  },
});
//对外暴露获取小仓库方法
export default useUserStore;
