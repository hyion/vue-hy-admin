<template>
  <div class="navbar">
    <div class="hamburger" @click="onToggle">
      <i class="icon" :class="isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>

    <Breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="avatar-wrapper" @click="logout">
        <i class="el-icon-user-solid"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import { useStore } from '/@/store';

interface Navbar {
  isActive: boolean;
}

export default defineComponent({
  components: { Breadcrumb },
  setup() {
    const state = reactive<Navbar>({
      isActive: false,
    });

    const store = useStore();

    const logout = () => {
      console.log('el-icon-s-fold');
    };

    const onToggle = () => {
      state.isActive = !state.isActive;
      store.action.updateOpen(state.isActive);
    };

    return {
      ...toRefs(state),
      logout,
      onToggle,
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

  .hamburger {
    float: left;
    line-height: 45px;
    height: 45px;
    margin-left: 10px;
    cursor: pointer;
    .icon {
      font-size: 20px;
    }
  }

  .breadcrumb-container {
    float: left;
    line-height: 45px;
    height: 45px;
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
