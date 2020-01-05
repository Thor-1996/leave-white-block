<template>
  <div id="app">
    <MainLayout>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/components/MainLayout'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html::-webkit-scrollbar {
  width:6px;
  height:50px;
}
html::-webkit-scrollbar-thumb {
  border-radius:2px;
}
html::-webkit-scrollbar-track {
  background:rgb(97, 119, 148);
}
</style>
