<template>
  <div class="navbar">
    <Breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="avatar-wrapper">
        <i class="el-icon-user-solid"></i>
      </div>
    </div>
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
$border-1px: 1px solid rgba(7, 17, 27, 0.1);

.navbar {
  height: 45px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .breadcrumb-container {
    float: left;
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      float: right;
      height: 100%;
      line-height: 50px;
      margin-top: 5px;
      position: relative;
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 45px;
    margin-right: 20px;
    .avatar-wrapper {
      color: #666;
      cursor: pointer;
      // border: $border-1px;
      // border-radius: 50%;
    }
  }
}
</style>
