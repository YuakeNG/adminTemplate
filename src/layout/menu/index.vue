<template>
  <template v-for="(item, index) in menuRoutes" :key="index.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由但是只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute">
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多个子路由 -->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menu-routes="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

//获取页面跳转方法
const $router = useRouter()
//获取父组建传递过来的数据
defineProps<{
  menuRoutes: any
}>()
const goRoute = (p: {
  index: string
}) => {
  console.log(p.index);

  $router.push(p.index)

}
</script>
<script lang="ts">
export default {
  name: 'Menu'
}
</script>
<style lang='less' scoped></style>