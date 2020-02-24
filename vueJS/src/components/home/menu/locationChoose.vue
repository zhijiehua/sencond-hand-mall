<template>
    <div class="choose-location">
        <!-- 根据输入地址搜索 -->
        <div class="flex">
          <el-select v-model="provice"  placeholder="省份">
            <el-option v-for="(item, index) in countryJson" :key="index" :label="item.label" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="city"  placeholder="城市">
            <el-option v-for="(item, index) in inputCityList" :key="index" :label="item.label" :value="item.id"></el-option>
          </el-select>
        </div>
        <el-divider></el-divider>
        <div>
          <div class="sign">当前/历史</div>
          <div class="hot-city">
            <el-button v-for="(item, index) in hisToryCity" :key="index" class="hot-city-item" @click="selectCity(item)">{{item}}</el-button>
          </div>
          <el-divider></el-divider>
          <div class="sign">热门城市</div>
          <div class="hot-city">
            <el-button v-for="(item, index) in hotCity" :key="index" class="hot-city-item" @click="selectCity(item)">{{item}}</el-button>
          </div>
        </div>
    </div>
</template>

<script>
import countryJson from '@/config/countryJson'
export default {
  data () {
    return {
      city: '',
      inputCityList: [],
      provice: '',
      countryJson: countryJson,
      hisToryCity: ['北京', '上海', '广州', '成都', '长沙', '长沙', '长沙', '长沙'],
      hotCity: ['北京', '上海', '广州', '成都', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙', '长沙']
    }
  },
  methods: {
    selectCity (data) {
      this.city = data
      this.$store.dispatch('changeLocal', data)
    }
  },
  watch: {
    provice (data) {
      this.inputCityList = this.countryJson[Number(data) - 1].children
    }
  },
  mounted () {
    console.log(countryJson)
  }
}
</script>

<style lang="scss" scoped>
.choose-location {
  .sign {
    text-align: center;
    margin-bottom: 10px;
    margin-top: -10px;
  }
  .hot-city {
    margin-left: 5px;
    .hot-city-item {
      margin: 5px 15px;
    }
  }
}
</style>
