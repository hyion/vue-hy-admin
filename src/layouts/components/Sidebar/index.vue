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
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import variable from './variable';
import SidebarItem from './item.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { SidebarItem },
  setup() {
    const state = reactive({
      isCollapse: true,
      activeMenu: '/dashboard',
      variables: variable,
      routes: [
        {
          icon: 'el-icon-s-home',
          title: '首页',
          path: '/dashboard',
        },
        {
          icon: 'el-icon-s-grid',
          title: '文章列表',
          path: '/article',
        },
        // {
        //   icon: 'el-icon-s-grid',
        //   title: '添加文章',
        //   path: '/article/info',
        // },
        {
          icon: 'el-icon-s-promotion',
          title: '备忘录',
          path: '/envelope',
        },
        // {
        //   icon: 'el-icon-s-promotion',
        //   title: '添加备忘录',
        //   path: '/envelope/info',
        // },
        {
          icon: 'el-icon-edit-outline',
          title: '评论信息',
          path: '/comment',
        },
        {
          icon: 'el-icon-user-solid',
          title: '关于我',
          path: '/myself',
        },
        {
          icon: 'el-icon-s-tools',
          title: '设置',
          path: '/setting',
        },
        // {
        //   icon: 'el-icon-s-tools',
        //   title: 'Leave',
        // },
      ],
    });

    const route = useRoute();

    onMounted(() => {
      // 刷新后停留在当前菜单
      state.activeMenu = route.path;
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
