<template>
  <div class="menu-wrapper">
    <el-submenu :index="item.path" popper-append-to-body>
      <template #title>
        <i class="el-icon-location"></i>
        <span>{{ item.title }}</span>
      </template>
      <!-- <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu> -->
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// import { RouteConfig } from 'vue-router';
import path from 'path';
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
