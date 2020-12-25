<template>
  <section class="login">
    <div class="wrapper">
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        label-width="100px"
        class="login-form"
        size="medium"
      >
        <div class="title">欢迎来到后台管理系统</div>
        <el-form-item prop="account" class="item-form">
          <el-input v-model="formData.account" placeholder="请输入账号"></el-input>
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
export default defineComponent({
  setup() {
    const formRef = ref<any>(null);
    const formData = reactive({
      account: '',
      password: '',
    });
    const rules = reactive({
      account: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请填写密码', trigger: 'blur' }],
    });

    const submit = () => {
      const form = unref(formRef);
      if (!form) return;
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
}
.login-wrap {
  width: 330px;
  margin: auto;
  margin-top: 200px;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    transition: all 0.5s;
    cursor: pointer;
  }
  .current {
    background: rgba(0, 0, 0, 0.1);
  }
}
.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  padding: 40px 50px 24px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 0 2px 10px #e6e6e6;
  box-shadow: 0 2px 10px #e6e6e6;
  z-index: 9;
  label {
    display: block;
    font-size: 14px;
    color: #000;
    text-align: left;
  }
  .title {
    font-size: 22px;
    color: #0b9aff;
    letter-spacing: 2px;
    margin: 10px 0 24px;
  }
  .item-form {
    margin-bottom: 13px;
  }
  .block {
    display: block;
    width: 100%;
  }
  .login-btn {
    margin-top: 9px;
  }
}
</style>
