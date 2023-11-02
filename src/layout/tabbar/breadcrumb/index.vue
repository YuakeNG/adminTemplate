<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changIcon">
    <component :is="layOutSetting.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包屑展示路由名字与标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑展示的路由标题 -->
      <span style="margin: 0 5px">
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
//仓库获取折叠图标
import uselayOutSetting from "@/store/module/setting";
import { useRoute } from "vue-router";
const layOutSetting = uselayOutSetting();
//获取路由对象
const $route = useRoute();
//折叠图标
const changIcon = () => {
  layOutSetting.fold = !layOutSetting.fold;
};
//
const handle = () => {
  console.log($route, "$route");
};
</script>
<script lang="ts">
export default {
  name: "Breadcrumb",
};
</script>
<style lang="scss" scoped></style>
