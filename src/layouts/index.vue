<template>
  <div :class="isOpened ? 'hideSidebar' : ''" class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar/index.vue';
import AppMain from './components/AppMain/index.vue';
import { useStore } from '/@/store';

export default defineComponent({
  components: { Sidebar, Navbar, AppMain },
  setup() {
    const store = useStore();

    const isOpened = computed(() => {
      return store.state.isOpened;
    });

    return {
      isOpened,
    };
  },
});
</script>
