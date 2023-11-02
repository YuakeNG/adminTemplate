//引入全局需要的组建
import SvgIcon from "@/components/SvgIcon/index.vue";
import { App, Component } from "vue";
//全局图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// // 定义一个对象，属性是字符串，属性值是组件
// const components :{[name:string] : Component} = {SvgIcon}
interface GlobalComponents {
  [key: string]: Component;
}
const allGolbalComponents: GlobalComponents = {
  SvgIcon,
};
//对外暴露插件对象
export default {
  install(app: App) {
    Object.keys(allGolbalComponents).forEach((key) => {
      // 注册全局组件
      app.component(key, allGolbalComponents[key]);
    });
    //注册全局图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
