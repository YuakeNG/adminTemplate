import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes";
// 创建路由
const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior() {
    //   路由跳转时，滚动条在最上侧（显示最上面的），而不是最下侧
    return {
      left: 0,
      top: 0,
    };
  },
});
export default router;
