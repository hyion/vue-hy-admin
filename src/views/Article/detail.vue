<template>
  <div>文章编辑</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetArticles } from '/@/api';
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    const state = reactive({});
    const route = useRoute();

    onMounted(() => {
      getData();
    });

    const getData = () => {
      GetArticles(route.params.id).then((res: any) => {
        console.log(res);
        const data = res.body;
        console.log(data);
      });
    };
    return {
      ...toRefs(state),
    };
  },
});
</script>
