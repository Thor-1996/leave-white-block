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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
