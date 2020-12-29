<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import variable from './variable';
import SidebarItem from './item.vue';

export default defineComponent({
  components: { SidebarItem },
  setup() {
    const state = reactive({
      isCollapse: true,
      activeMenu: '/article',
      variables: variable,
      routes: [
        {
          icon: 'el-icon-sunrise-1',
          title: 'My world',
          path: '/',
        },
        {
          icon: 'el-icon-heavy-rain',
          title: 'Small mood',
          path: '/article',
        },
        {
          icon: 'el-icon-light-rain',
          title: 'New mood',
          path: '/article/info',
        },
        {
          icon: 'el-icon-lightning',
          title: 'A letter',
          path: '/envelope',
        },
        {
          icon: 'el-icon-cloudy-and-sunny',
          title: 'New letter',
          path: '/envelope/info',
        },
        {
          icon: 'el-icon-sunrise-1',
          title: 'Comment',
          path: '/comment',
        },
        {
          icon: 'el-icon-sunrise-1',
          title: 'Myself',
          path: '/myself',
        },
        {
          icon: 'el-icon-sunset',
          title: 'Setting',
          path: '/setting',
        },
        {
          icon: 'el-icon-moon-night',
          title: 'Leave',
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style>
</style>
