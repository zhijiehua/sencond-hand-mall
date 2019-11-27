<template>
  <div>
    <!-- 头部导航主题 -->
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <i class="loaction el-icon-location-outline" @click="openDraw">北京</i>
    </el-menu-item>
    <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <!-- 抽屉 -->
    <el-drawer
      title="请选择您所在的位置"
      :visible.sync="drawerDialog"
      direction="ltr"
      :with-header="false">
      <location-choose></location-choose>
    </el-drawer>
  </div>
</template>

<script>
import locationChoose from './locationChoose'
export default {
  components: {
    locationChoose
  },
  data () {
    return {
      drawerDialog: false,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    openDraw () { // 打开选择地址的抽屉
      this.drawerDialog = true
    }
  }
}
</script>

<style scoped>
.loaction {
  font-size: 14px;
}
</style>
