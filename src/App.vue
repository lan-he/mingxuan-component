<template>
  <div id="app">
    <router-link to="/home">HOME</router-link>
    <br>
    <router-link to="/demo">DEMO</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
<style>
</style>
