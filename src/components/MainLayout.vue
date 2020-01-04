<template>
  <el-container>
    <el-header>Welcome To Webliker!</el-header>
      <el-main>
        <router-view/>
      </el-main>
    <el-footer>
      <p style="width:100%;height:200px"></p>
        <p class="record">
          网站备案号<a href="http://beian.miitbeian.gov.cn" target="_blank">湘ICP备19024509号-1</a>
        </p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'mainLayout',
}

</script>
<style lang="stylus" scoped>
.record
  padding-bottom 30px
</style>
