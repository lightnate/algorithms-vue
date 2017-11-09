<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SelectSort from '@/components/SelectSort/SelectSort.vue'
export default {
  name: 'app',
  components: {
    SelectSort
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#canvas{
  transform: rotateX(180deg);
  width: 100%;
  height: 600px;
}
</style>
