<template>
    <div class="login-form">
        <el-tabs v-model="type">
            <el-tab-pane label="登录" name="login">登录</el-tab-pane>
            <el-tab-pane label="注册" name="create">注册</el-tab-pane>
        </el-tabs>
        <el-form label-width="100px" :rules="rules">
            <el-form-item size="small" prop="userName" label="用户名：">
                <el-input v-model="dialogForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="name" label="昵称：">
                <el-input v-model="dialogForm.name" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="email" label="邮箱：">
                <el-input v-model="dialogForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="phoneNumber" label="电话号码：">
                <el-input v-model="dialogForm.phoneNumber" placeholder="请输入电话号码"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="passWord" label="密码：">
                <el-input v-model="dialogForm.passWord" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="otherPassWord" label="确认密码：">
                <el-input v-model="dialogForm.otherPassWord" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item class="login-checked">
                <el-checkbox v-model="checked" >记住我</el-checkbox>
                <router-link style="float:right;" :to="{name:'index',query:{id:'xxx',name:'xxx'}}">忘记密码？</router-link>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
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
        userName: $ruleValidator('请输入用户名呀呀呀'),
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
  }
}
</script>

<style scoped>
.login-form .el-tab-pane {
    display: none;
}
.login-form .el-tabs__item {
    margin-left: 30%;
    color: red;
}
</style>
