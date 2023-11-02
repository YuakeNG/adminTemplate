<template>
  <div class="login_container">
    <el-row>
      <el-col :span="8" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form :model="loginForm" class="login_form" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到后台管理系统</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" type="text" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { Lock, User } from "@element-plus/icons-vue";
import useUserStore from '@/store/module/user';
import { ElNotification } from "element-plus";
import { getTime } from "@/utils/time"
// 创建一个 ref 用于控制加载状态
let loading = ref(false)

// 创建一个 reactive 对象用于存储登录表单数据
let loginForm = reactive({ username: "admin", password: "111111" });
// 创建一个 ref 对象用于存储表单验证规则
let loginForms = ref()
// 获取 Vue Router 的实例
let $router = useRouter();

// 获取用户仓库实例
const useStore = useUserStore();

// 定义登录函数
let login = async () => {
  try {
    // 验证表单
    await loginForms.value.validate()
    // 设置加载状态为 true
    loading.value = true
    // 调用用户仓库的 userLogin 方法进行用户登录
    await useStore.userLogin(loginForm)

    // 登录成功后进行路由导航到首页
    // $router.push('/')

    // 显示登录成功通知
    ElNotification({
      title: `Hi,${getTime()}好`,
      message: '欢迎回来',
      type: 'success'
    })
    // 设置加载状态为 false
    loading.value = false
  }
  catch {
    // 设置加载状态为 false
    loading.value = false
    // 登录失败时显示错误通知
    ElNotification({
      message: '用户名或密码错误',
      type: 'error'
    })
    console.log('登录失败')
  }


}
//自定义校验规则函数
let validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少6位'))
  }
}
//登录规则
const rules = {
  username: [
    {
      required: true,
      trigger: 'change',
      validator: validatorUserName
    },
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}


</script>


<style lang="scss">
.login_container {
  width: 100%; // 宽度浏览器的100%
  height: 100vh; // 视口高度
  background-image: url("../../assets/images/background.jpg");
  background-size: cover; // 容器变化，图片进行拉伸，并保持宽高比

  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    background: rgba(16, 16, 0, 0.462);
    padding: 40px;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
  }

  .login_btn {
    width: 100%;
  }
}
</style>

