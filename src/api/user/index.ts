// 统一管理用户相关的接口
// 统一管理用户相关的接口
import request from "@/utils/request";
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from "./type";
// 统一接口管理
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
// 暴露请求函数
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
export const reqUserInfo = () =>
  request.post<any, userInfoReponseData>(API.USERINFO_URL);
