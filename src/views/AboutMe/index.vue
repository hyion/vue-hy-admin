<template>
  <div class="myself custom-space">
    <div class="content markdown-body">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetMyself } from '/@/api';
import marked from 'marked'

export default defineComponent({
  name: 'AboutMe',
  setup() {
    const state = reactive({
      content: '',
      contentHtml: '',
    });

    onMounted(() => {
      getData();
    });

    const markdownRender = (data: any) => {
      marked.setOptions({
        renderer: new marked.Renderer(),
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      state.content = marked(data)
    }

    const getData = () => {
      GetMyself()
        .then((res: any) => {
          console.log(res);
          const { content, contentHtml } = res.body
          state.content = content
          console.log(content)
          state.contentHtml = contentHtml
          markdownRender(state.content)
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

<style lang="scss" scoped>
.myself {
  .content {
    width: 800px;
    margin: 10px auto;
  }
}
</style>
