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
        <template v-for="route in routes">
          <el-menu-item :index="route.path" @click="resolvePath(route.path)">
            <i :class="route.icon"></i>
            <template #title>{{ route.title }}</template>
          </el-menu-item>
        </template>
        <!-- <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import variable from './variable';
import SidebarItem from './item.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '/@/store';

export default defineComponent({
  components: { SidebarItem },
  setup() {
    const state = reactive({
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
    const router = useRouter();
    const store = useStore();

    const isCollapse = computed(() => {
      return store.state.isOpened;
    });

    onMounted(() => {
      // 刷新后停留在当前菜单
      state.activeMenu = route.path;
    });

    const resolvePath = (routePath: string) => {
      router.push(routePath);
    };

    return {
      ...toRefs(state),
      isCollapse,
      resolvePath,
    };
  },
});
</script>
