<template>
  <div class="navbar">
    <Breadcrumb class="breadcrumb-container" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import Breadcrumb from './Breadcrumb.vue';

export default defineComponent({
  components: { Breadcrumb },
  setup() {
    const state = reactive({});

    onMounted(() => {});

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .breadcrumb-container {
    float: left;
  }
}
</style>
