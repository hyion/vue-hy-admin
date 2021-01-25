<template>
  <div class="article-detail">
    <div class="container" v-loading="isLoading">
      <el-form :model="formData" label-width="60px">
        <section class="header">
          <h1 style="margin-bottom: 10px">江湖再会~</h1>
          <el-form-item label="标题:">
            <el-input placeholder="标题" v-model="formData.title" clearable> </el-input>
          </el-form-item>
        </section>
        <section class="custom-md">
          <el-form-item label="内容:">
            <v-md-editor v-model="formData.content" :height="`${formData.height}px`"></v-md-editor>
          </el-form-item>
        </section>
        <div>
          <el-form-item label="描述:">
            <el-input placeholder="描述" v-model="formData.describe" clearable> </el-input>
          </el-form-item>
        </div>
        <section class="upload-box">
          <el-form-item label="封面:">
            <el-upload
              class="upload-demo"
              :auto-upload="false"
              :show-file-list="false"
              :on-change="imgUpload"
              action=""
              drag
            >
              <img v-if="formData.image && formData.image.url" :src="formData.image.url" />
              <i class="el-icon-picture-outline-round"></i>
              <div class="el-upload__text">封面图片 (680*440)</div>
            </el-upload>
          </el-form-item>
        </section>
        <section>
          <el-form-item>
            <div style="text-align: center">
              <el-button type="primary" size="medium" style="width: 100%">SUBMIT</el-button>
            </div>
          </el-form-item>
        </section>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetArticleDetail } from '/@/api';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const state = reactive({
      formData: {
        title: '',
        content: '',
        height: window.innerHeight - 200,
      },
      isLoading: false,
    });
    const route = useRoute();

    onMounted(() => {
      if (route.params.id !== 'add') {
        getData();
      }
    });

    const getData = () => {
      state.isLoading = true;
      GetArticleDetail(route.params.id)
        .then((res: any) => {
          const data = res.body;
          console.log('GetArticleDetail--', data);
          state.formData = data;
          state.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          state.isLoading = false;
        });
    };

    const imgUpload = () => {
      console.log('imgUpload');
    };
    return {
      ...toRefs(state),
      imgUpload,
    };
  },
});
</script>

<style lang="scss" scoped>
.article-detail {
  padding: 25px;
  .header {
    margin-bottom: 10px;
  }
  .upload-box {
    display: flex;
    margin: 10px -7px 6px;
    .upload-demo {
      width: 50%;
      max-width: 360px;
      margin: 0 7px;
      &::deep .el-upload {
        width: 100%;
        .el-upload-dragger {
          width: 100%;
          .el-icon-picture-outline-round,
          .el-icon-headset {
            font-size: 46px;
            color: #c0c4cc;
            margin: 42px 0 14px;
            line-height: 50px;
            transition: all 0.3s;
          }
          .el-upload__text {
            color: #98999c;
            transition: all 0.3s;
          }
          &:hover {
            .el-icon-picture-outline-round,
            .el-upload__text,
            .el-icon-headset {
              color: #409eff;
            }
          }
        }
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>
