<template>
  <div class="menu-wrapper">
    <el-menu-item :index="item.path">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// import { RouteConfig } from 'vue-router';
import { AppRouteRecordRaw } from '/@/router/types';

export default defineComponent({
  name: 'SidebarItem',
  props: {
    item: {
      type: Object as PropType<AppRouteRecordRaw>,
      default: null,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  setup() {
    // const resolvePath = (routePath: string) => {
    //   // if (this.isExternalLink(routePath)) {
    //   //   return routePath;
    //   // }
    //   return path.resolve(props.basePath, routePath);
    // };

    return {
      // resolvePath,
    };
  },
});
</script>

<style>
</style>
