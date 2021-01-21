<template>
  <div class="article-detail">
    <section class="header">
      <h1>江湖再会</h1>
      <el-input placeholder="标题" v-model="formData.title" clearable style="width: 300px">
      </el-input>
    </section>
    <section>
      <!-- <mavon-editor v-model="formData.content" /> -->
      <v-md-editor v-model="formData.content" height="700px"></v-md-editor>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetArticles } from '/@/api';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const state = reactive({
      formData: {
        title: '',
        content: '',
      },
    });
    const route = useRoute();

    onMounted(() => {
      if (route.params.id) {
        getData();
      }
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

<style lang="scss" scoped>
.article-detail {
  padding: 25px;
  .header {
  }
}
</style>
