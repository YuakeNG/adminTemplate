<template>
  <el-button size="small" circle icon="Refresh" @click="fleshPage"></el-button>
  <el-button size="small" circle icon="FullScreen"></el-button>
  <el-button size="small" circle icon="Setting"></el-button>
  <img
    src="../../../../public/logo.png"
    style="width: 24px; height: 24px; margin: 0px 10px"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import uselayOutSetting from "@/store/module/setting";
const layOutSetting = uselayOutSetting();
const fleshPage = () => {
  layOutSetting.refsh = !layOutSetting.refsh;
};
</script>
<script lang="ts">
export default {
  name: "Setting",
};
</script>
<style lang="less" scoped></style>
