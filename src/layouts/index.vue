<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar/index.vue';
import Navbar from './components/Navbar/index.vue';

export default defineComponent({
  components: { Sidebar, Navbar },
  setup() {},
});
</script>
