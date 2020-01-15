<template>
  <div class="home">
    <h1>欢迎来到webliker.cn,<router-link to='/game'>点我</router-link>来玩别踩白块</h1>
    <div @click="showHodgepodge = !showHodgepodge" class="click-tip">点我一下？</div>
    <div class="Hodgepodge" v-show="showHodgepodge">
      <window-width/>
    </div>
  </div>
</template>

<script>
import WindowWidth from './windowWidth'
export default {
  name: 'home',
  components:{
    WindowWidth
  },
  data() {
    return {
      showHodgepodge: false
    }
  }
}

</script>
<style lang="stylus" scoped>
  @import './index'
  .click-tip{
    font-size: 8px;
  }
</style>
