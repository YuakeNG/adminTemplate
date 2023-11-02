<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由 -->
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, watch, nextTick } from 'vue';
import uselayOutSetting from '@/store/module/setting'
const layOutSetting = uselayOutSetting()
// 监听当前组建是否销毁重建
const flag = ref(true)
//监听仓库内数据是否发生变化，如果发生变化说明用户点击了刷新按钮
watch(() => layOutSetting.refsh, () => {
  //点击刷新按钮：路由组建销毁
  flag.value = false

  nextTick(() => {
    flag.value = true
  })
})
</script>
<script lang="ts">
export default
  {
    name: 'Main'
  }
</script>
<style lang='less' scoped> .fade-enter-from {
   opacity: 0;
   transform: scale(0);
 }

 .fade-enter-active {
   transition: all .3s;
 }

 .fade-enter-to {
   opacity: 1;
   transition: rotate(360deg);
   transform: scale(1);
 }
</style>