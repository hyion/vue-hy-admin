<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router';

interface Breadcrumb {
  levelList: RouteLocationMatched[];
}
export default defineComponent({
  setup() {
    const state = reactive<Breadcrumb>({
      levelList: [],
    });

    const route = useRoute();

    onMounted(() => {
      getBreadcrumb();
    });

    const getBreadcrumb = () => {
      let matched = route.matched.filter((item) => item.name);
      state.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
