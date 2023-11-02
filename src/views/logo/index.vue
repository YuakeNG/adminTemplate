<template>
  <div class="logo">
    <img :src="setting.logo" alt="" v-if="setting.logoHidding" />
    <p>{{ layoutSetting.fold == true ? "" : setting.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import uselayOutSetting from "@/store/module/setting";
import { reactive, toRefs, ref } from "vue";
//引入项目标题与logo配置
import setting from "@/setting";
const layoutSetting = uselayOutSetting();
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 15px;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
