<template>
  <div>
    <menu-index></menu-index>
  </div>
</template>

<script>
import menuIndex from './menu/index'
export default {
  components: {
    menuIndex
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
