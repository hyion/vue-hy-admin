<template>
  <div>
    <p class="word-break: break-all;">token: {{ token }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from '/@/store';

export default defineComponent({
  setup() {
    const state = reactive({
      token: '',
    });

    const store = useStore();
    state.token = store.state.token;

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style>
</style>
