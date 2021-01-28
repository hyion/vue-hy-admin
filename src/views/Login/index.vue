<template>
  <section class="login">
    <div class="wrapper">
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-width="0"
        class="login-form"
        size="medium"
      >
        <div class="title">欢迎来到后台管理系统</div>
        <el-form-item prop="username" class="item-form">
          <el-input v-model="formData.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-form">
          <el-input
            type="password"
            maxlength="20"
            minlength="6"
            v-model="formData.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit" class="login-btn block">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from 'vue';
import { Login } from '/@/api';
import { useMessage } from '/@/hooks/useMessage';
import { useStore } from '/@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const formRef = ref<any>(null);
    const formData = reactive({
      username: '',
      password: '',
    });
    const rules = reactive({
      username: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请填写密码', trigger: 'blur' }],
    });

    const { notification } = useMessage();
    const store = useStore();
    const router = useRouter();

    const submit = async () => {
      const form = unref(formRef);
      if (!form) return;
      await form.validate((valid: boolean) => {
        if (!valid) return;
        Login(formData).then((res: any) => {
          console.log(res);
          const data = res.token;
          store.action.updateToken(data);
          router.push('/');
          notification('success', '登录成功');
        });
      });
    };

    return {
      formRef,
      formData,
      rules,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  overflow: hidden;
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    padding: 40px 50px 24px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 10px #e6e6e6;
    z-index: 9;
    .title {
      font-size: 22px;
      color: #0b9aff;
      letter-spacing: 2px;
      margin: 10px 0 24px;
    }
    .block {
      display: block;
      width: 100%;
    }
    .login-btn {
      margin-top: 9px;
    }
  }
}
</style>
