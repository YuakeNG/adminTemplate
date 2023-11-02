import { createApp } from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "virtual:svg-icons-register";
import router from "./router/index.ts";
import pinia from "./store/index.ts";
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import globalComponents from "@/components/index.ts";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

//安装仓库
app.use(router);
app.use(pinia);
//引入自定义插件对象：注册整个项目

app.use(globalComponents);
app.mount("#app");
