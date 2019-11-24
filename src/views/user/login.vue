<template>
  <div class="arc-pg-login">
    <p class="login-title">
      <arc-svg-icon name="logo" class-name="logo" />
      <span class="login-name">Archetype</span>
    </p>
    <el-form
      :rules="rules"
      :model="loginForm"
      label-position="top"
      size="medium"
      status-icon
      ref="loginForm"
      label-width="100px"
      class="login-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          placeholder="请输入用户名"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="register-item">
        <el-button type="text" size="small">还没有账号？立即注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-btn"
          type="primary"
          @click="submitForm('loginForm')"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions('user', ['actionLogin']),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let self = this
          let params = {
            name: this.loginForm.username,
            password: this.loginForm.password,
            callback: function() {
              self.$router.push({ name: 'Index' })
            }
          }
          this.actionLogin(params)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.arc-pg-login {
  overflow: hidden;
  .login-title {
    text-align: center;
    margin: 80px 0 30px;
    .logo.svg-icon {
      width: 50px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
    }
    .login-name {
      display: inline-block;
      vertical-align: middle;
      font-size: 25px;
      font-weight: 700;
      margin-left: 10px;
      color: #f8f9fb;
    }
  }
  .login-form {
    width: 400px;
    box-sizing: border-box;
    padding: 20px;
    margin: 0 auto;
    background: #f8f9fb;
    border-radius: 5px;
    .register-item {
      text-align: right;
      margin-top: -20px;
      margin-bottom: 15px;
    }
    .submit-btn {
      width: 100%;
    }
  }
}
</style>
