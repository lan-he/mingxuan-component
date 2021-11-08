<template>
  <div id="app">
    <!-- <Home/> -->
    <SpellImg/>
  </div>
</template>

<script>
// import Home from './page/home/index.vue'
import SpellImg from './page/spell-img/index.vue'
export default {
  name: 'App',
  components: {
    // Home,
    SpellImg
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
