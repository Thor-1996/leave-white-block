<template>
  <el-container>
    <el-header>Welcome To Webliker!</el-header>
      <el-main>
        <vue-particles
          color="#000"
          :particleOpacity="0.7"
          :particlesNumber="60"
          shapeType="star"
          :particleSize="6"
          linesColor="#CCCCCC"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          class="lizi"
          >
        </vue-particles>
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
.lizi
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index -1
</style>
