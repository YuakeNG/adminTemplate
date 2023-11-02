//小仓库：layout组件配置相关的仓库
import { defineStore } from "pinia";
const uselayOutSetting = defineStore("SettingStore", {
  state: () => {
    return {
      fold: false, // 用于控制折叠
      refsh: false, //用于控制刷新
    };
  },
});

export default uselayOutSetting;
