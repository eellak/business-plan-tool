<template>
  <div id="app">

    <welcome v-if="$route.path === '/'"></Welcome>

    <skeleton v-if="$route.path !== '/'"></skeleton>
    
  </div>
</template>

<script>
import Skeleton from './components/Skeleton.vue';
import Welcome from './components/Welcome.vue';

export default {
  name: 'app',
  components: {
    Skeleton, Welcome
  }
}
</script>

<style>
body { margin:0; padding:0; }
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
