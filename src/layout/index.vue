<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: layOutSetting.fold ? true : false }">
      <logo></logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!--根据路由动态生成菜单-->
        <el-menu :default-active="$route.path" background-color="#001529" text-color="white"
          :collapse="layOutSetting.fold">
          <Menu :menu-routes="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: layOutSetting.fold ? true : false }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold: layOutSetting.fold ? true : false }">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
//引入左侧菜单logo组件
import logo from '../views/logo/index.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/module/user';
//引入子路由切换内容
import Main from '@/views/mian/index.vue'
//获取路由对象 
import { useRoute } from 'vue-router';
//顶部内容
import Tabbar from '@/layout/tabbar/index.vue'
//引入小仓库切换折叠图标
import uselayOutSetting from '@/store/module/setting'
const layOutSetting = uselayOutSetting()
const userStore = useUserStore()
// console.log(userStore.menuRoutes);
const $route = useRoute()
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    background-color: $base-menu-background;
    height: 100vh;
    transition: all .3s;

    &.fold {
      width: $base-menu-min-width;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }

    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0px;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all .3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    background-color: green;
    overflow: auto;
    padding: 20px;
    transition: all .3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
