<template>
  <div>
    <!-- 头部导航主题 -->
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <!-- 地址 -->
      <el-menu-item index="1">
        <i class="loaction el-icon-location-outline" @click="operationBtn('openDraw')">{{$store.state.localCity}}</i>
      </el-menu-item>
      <!-- 登录注册入口 或者展示个人信息 -->
      <el-menu-item index="2">
        <span v-if="!hasLogin" @click="operationBtn('userLogin')">登录/注册</span>
        <span v-else>{{'您好' + name}}</span>
      </el-menu-item>
    </el-menu>
    <!-- 抽屉 -->
    <el-drawer
      title="请选择您所在的位置"
      :visible.sync="drawerDialog"
      direction="ltr"
      :with-header="false">
      <location-choose></location-choose>
    </el-drawer>
    <!-- 登录弹框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="operationBtn('closeDialog')"
      width="25%">
      <login></login>
    </el-dialog>
  </div>
</template>

<script>
import login from './login'
import locationChoose from './locationChoose'
export default {
  components: {
    locationChoose,
    login
  },
  data () {
    return {
      drawerDialog: false,
      hasLogin: false,
      name: 'huahauahu',
      dialogVisible: false
    }
  },
  methods: {
    /** openDraw 打开地址抽屉 */
    /** userLogin 登录或注册弹框 */
    /** closeDialog 关闭弹窗 */
    operationBtn (type) {
      switch (type) {
        case 'userLogin':
          this.dialogVisible = true
          break
        case 'openDraw':
          this.drawerDialog = true
          break
      }
    }
  }
}
</script>

<style scoped>
.loaction {
  font-size: 14px;
}
</style>
