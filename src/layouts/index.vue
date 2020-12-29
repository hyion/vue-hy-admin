<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar/index.vue';

export default defineComponent({
  components: { Sidebar },
  setup() {},
});
</script>
