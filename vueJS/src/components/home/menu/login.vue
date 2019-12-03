<template>
    <div>
        <el-form>
            <el-form-item size="small" prop="userName" label="用户名">
                <el-input v-model="dialogForm.userName"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="name" label="昵称">
                <el-input v-model="dialogForm.name"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="phoneNumber" label="电话号码">
                <el-input v-model="dialogForm.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="email" label="邮箱">
                <el-input v-model="dialogForm.userName"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="email" label="用户名">
                <el-input v-model="dialogForm.userName"></el-input>
            </el-form-item>
            <el-form-item size="small" prop="password" label="密码">
                <el-input v-model="dialogForm.password" type="password"></el-input>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
  data () {
    return {
      dialogForm: {
        userName: '',
        name: '',
        phoneNumber: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="" scoped>

</style>
