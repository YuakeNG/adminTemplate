//仓库大仓库
import { createPinia } from "pinia";
//引入持久化插件
import piniaPersist from "pinia-plugin-persist";
//创建大仓库
const pinia = createPinia();
//使用持久化插件
pinia.use(piniaPersist);
//对外暴露：入口文件需要安装仓库
export default pinia;
