<template>
    <div class="choose-location">
        <!-- 根据输入地址搜索 -->
        <el-input v-model="inputCity" placeholder="输入中文/拼音/首字母">
            <i
                class="el-icon-search el-input__icon"
                slot="suffix">
            </i>
        </el-input>
        <div>当前/历史</div>

        <div>热门城市</div>
        <div></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      inputCity: ''
    }
  }
}
</script>

<style scoped>

</style>
