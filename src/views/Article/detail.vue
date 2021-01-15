<template>
  <div class="article-detail">
    <section>
      <h1>江湖再会</h1>
      <el-input placeholder="标题" v-model="formData.title" clearable> </el-input>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetArticles } from '/@/api';
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    const state = reactive({
      formData: {
        title: '',
      },
    });
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
