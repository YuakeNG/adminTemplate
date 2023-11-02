<template>
  <!-- 在开发项目的时候经常会用到svg矢量图,而且我们使用SVG以后，页面上加载的不再是图片资源,

这对页面性能来说是个很大的提升，而且我们SVG文件比img要小的很多，放在项目中几乎不占用资源。 -->
  <div>
    <!-- svg 图标外侧容器节点 内部需要与use标签结合使用 -->
    <svg :style="{ width: width, height: height }">
      <!-- xlink决定使用哪一个图标， 必须以# icon开始后面接src/assets/icon图标 -->
      <!-- style指定大小 fill指定颜色 -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
//接受父组建传值
defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  //svg矢量图的名字
  name: String,
  //svg图标的颜色
  color: {
    type: String,
    default: "",
  },
  //svg宽度
  width: {
    type: String,
    default: "16px",
  },
  //svg高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style lang="less" scoped></style>
