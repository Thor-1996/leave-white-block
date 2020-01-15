<template>
  <div>
   屏幕宽度：{{ width }}
  </div>
</template>

<script>
export default {
  name: 'windowWidth',
  data(){
    return {
      width: 0
    }
  },
  mounted(){
    this.width = innerWidth
    window.addEventListener('resize',()=>{
      this.width = innerWidth
    })
  }
}
</script>
