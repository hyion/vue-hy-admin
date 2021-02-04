<template>
  <div class="article-detail">
    <div class="container" v-loading="isLoading">
      <el-form ref="formRef" :model="formData" :rules="rules" label-width="60px">
        <section class="header">
          <h1 style="margin-bottom: 10px">江湖再会~</h1>
          <el-form-item label="标题:" prop="title">
            <el-input placeholder="标题" v-model="formData.title" clearable> </el-input>
          </el-form-item>
        </section>
        <section class="custom-md">
          <el-form-item label="内容:" prop="content">
            <v-md-editor v-model="formData.content" :height="`${height}px`"></v-md-editor>
          </el-form-item>
        </section>
        <div>
          <el-form-item label="时间:" prop="tmpTime">
            <el-date-picker
              v-model="tmpTime"
              type="datetime"
              format="YYYY-MM-DD HH:mm"
              placeholder="选择日期时间"
              @change="selectTime"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="描述:" prop="describe">
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
              <el-button type="primary" size="medium" style="width: 100%" @click="onSubmit"
                >SUBMIT</el-button
              >
            </div>
          </el-form-item>
        </section>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref, toRefs, onMounted } from 'vue';
import { GetArticleDetail, CreateArticle } from '/@/api';
import { useRoute, useRouter } from 'vue-router';
import { useMessage } from '/@/hooks/useMessage';
import { parseTime } from '/@/hooks';

export default defineComponent({
  name: 'ArticleDetail',
  setup() {
    const formRef = ref<any>(null);
    const state = reactive({
      formData: {
        title: '',
        content: '',
        describe: '',
        url: '',
        time: '',
      },
      tmpTime: '',
      height: window.innerHeight - 200,
      isLoading: false,
    });
    const route = useRoute();
    const router = useRouter();

    const rules = reactive({
      title: [{ required: true, message: '请填写标题', trigger: 'blur' }],
      content: [{ required: true, message: '请填写内容', trigger: 'blur' }],
      describe: [{ required: true, message: '请填写描述', trigger: 'blur' }],
      url: [{ required: true, message: '请填写上传背景封面', trigger: 'blur' }],
      time: [{ required: true, message: '请选择发布时间', trigger: 'change' }],
    });

    const { notification } = useMessage();

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

    const onSubmit = async () => {
      const form = unref(formRef);
      if (!form) return;
      await form.validate((valid: boolean) => {
        if (!valid) return;
        state.isLoading = true;
        console.log(state.formData);
        CreateArticle(state.formData)
          .then((res) => {
            console.log(res);
            state.isLoading = false;
            notification('success', '创建成功');
            router.push('/article');
          })
          .catch(() => {
            state.isLoading = false;
          });
      });
    };

    const selectTime = (time: any) => {
      state.formData.time = parseTime(time, '{y}/{m}/{d} {h}:{i}');
    };

    return {
      ...toRefs(state),
      formRef,
      rules,
      imgUpload,
      onSubmit,
      selectTime,
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
