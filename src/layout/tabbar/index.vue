<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <!-- 左侧 -->
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar_right">
      <!-- 右侧 -->
      <Setting></Setting>
    </div>
  </div>
</template>

<script lang="ts" setup>
//左侧菜单
import Breadcrumb from "./breadcrumb/index.vue";
//右侧菜单
import Setting from "./setting/index.vue";
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(232, 223, 223),
    rgb(201, 178, 178),
    white
  );

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;

    .el-icon {
      margin-right: 10px;
    }
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
