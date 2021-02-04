<template>
  <div class="myself custom-space"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetMyself } from '/@/api';

export default defineComponent({
  name: 'AboutMe',
  setup() {
    const state = reactive({
      temp: {
        content: '',
        contentHtml: '',
      },
    });

    onMounted(() => {
      getData();
    });

    const getData = () => {
      GetMyself()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style>
</style>
