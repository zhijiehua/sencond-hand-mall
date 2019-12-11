<template>
    <div class="login-form">
        <div class="login-titile">
            <h2>欢迎登录</h2>
        </div>
        <el-tabs v-model="type">
            <el-tab-pane label="登录" name="login">登录</el-tab-pane>
            <el-tab-pane label="注册" name="create">注册</el-tab-pane>
        </el-tabs>
        <el-form label-width="100px" :rules="rules" class="form">
            <el-form-item size="small" prop="userName">
                <el-input v-model="dialogForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="name" v-if="type !== 'login'">
                <el-input v-model="dialogForm.name" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="email" v-if="type !== 'login'">
                <el-input v-model="dialogForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="phoneNumber" v-if="type !== 'login'">
                <el-input v-model="dialogForm.phoneNumber" placeholder="请输入电话号码"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="passWord">
                <el-input v-model="dialogForm.passWord" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="otherPassWord" v-if="type !== 'login'">
                <el-input v-model="dialogForm.otherPassWord" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item class="login-checked" v-if="type == 'login'">
                <el-checkbox v-model="checked" >记住我</el-checkbox>
                <router-link style="float:right;" :to="{name:'index',query:{id:'xxx',name:'xxx'}}">忘记密码？</router-link>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('login')" v-if="type == 'login'">登录</el-button>
                <el-button type="primary" @click="submitForm('create')" v-else>注册</el-button>
            </el-form-item>
        </el-form>
        <div class="bottom"></div>
    </div>
</template>

<script>
import {createUser} from '@/api/user/index'
export default {
  data () {
    return {
      type: 'create',
      dialogForm: {
        userName: '',
        name: '',
        phoneNumber: '',
        email: '',
        passWord: '',
        otherPassWord: ''
      },
      checked: false,
      rules: {
        // eslint-disable-next-line no-undef
        userName: $ruleValidator('请输入用户名'),
        // eslint-disable-next-line no-undef
        name: $ruleValidator('请输入昵称'),
        // eslint-disable-next-line no-undef
        phoneNumber: $ruleValidator('请输入电话号码', 'phone'),
        // eslint-disable-next-line no-undef
        email: $ruleValidator('请输入邮箱', 'email'),
        // eslint-disable-next-line no-undef
        passWord: $ruleValidator('请输入密码'),
        // eslint-disable-next-line no-undef
        otherPassWord: $ruleValidator('请确认密码')
      }
    }
  },
  methods: {
    submitForm (type) {
        if ()
      if (type === 'create') {

      } else {

      }
    }
  }
}
</script>

<style lang='scss'>
.login-form {
    .login-titile {
        width: 100%;
        text-align: center;
        font-size: 16px;
        h2 {

            font-weight: 1500;
            color: #333333;
        }
    }
    .el-tabs__nav{
        width: 100%;
        text-align: center;

        .el-tabs__item{
            width: 50%;
            float: left;
            font-size: 16px !important;
            font-weight: 400;
        }
    }
    .el-tab-pane {
        display: none;
    }
    .form {
        margin-left: -90px;
        .el-form-item{
            margin-bottom: 20px !important;
            &.login-checked{
                margin: -10px 0 6px !important;
            }
            .el-button.el-button--primary{
                width: 100%;
                border: none;
            }
        }
    }
    .bottom {
        height: 10px;
    }
}
</style>
