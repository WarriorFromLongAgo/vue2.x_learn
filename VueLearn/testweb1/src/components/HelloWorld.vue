<template>
  <!-- label-width="80px" -->
  <el-form class="loginform" label-position="left" label-width="0px" ref="form" v-model="form"
  v-loading="form.loading"
  element-loading-text="拼命加载中"
  element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <!-- v-loading="loading" 是否显示加载框，圆圈转转转 -->
    <router-view />
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="account">
      <el-input v-model="form.username" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="form.remember_password">记住密码</el-checkbox>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button type="primary" @click="zhuanquanquan">转转</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { postRequest } from '../utils/http'

export default {
  name: 'HelloWorld',
  data () {
    return {
      rules: {
        account: [{ required: true, message: '请输入用户名' }],
        checkPass: [{ required: true, message: '请输入密码' }]
      },
      form: {
        username: 'sang',
        password: '123',
        remember_password: true,
        // 是否显示加载框，圆圈转转转
        loading: false
      }
    }
  },
  methods: {
    login () {
      var _this = this
      this.loading = true
      postRequest('/login', {
        username: this.form.username,
        password: this.form.password
      }).then(
        resp => {
          _this.loading = false
          if (resp.status === 200) {
            // 成功
            var json = resp.data
            if (json.status === 'success') {
              _this.$router.replace({ path: '/test' })
            } else {
              _this.$alert('登录失败!', '失败!')
            }
          } else {
            // 失败
            _this.$alert('登录失败!', '失败!')
          }
        },
        resp => {
          _this.loading = false
          _this.$alert('找不到服务器⊙﹏⊙∥!', '失败!')
        }
      )
    },
    onSubmit () {
      console.log('submit!')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    zhuanquanquan () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginform {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
