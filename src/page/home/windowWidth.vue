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
      width: 0,
    }
  },
  methods: {
    debounce(fn, delay) {
      let timer

      return () => {
        clearTimeout(timer)
        timer = setTimeout(function () {
         fn()
       }, delay)
      }
    },
    setWidth() {
      this.width = innerWidth
    }
  },
  mounted() {
    const {
      setWidth,
      debounce
    } = this
    setWidth()
    window.onresize = debounce(setWidth, 150)
  },
  destroyed() {
    window.onresize = null
  }
}
</script>
