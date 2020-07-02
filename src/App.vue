<template>
  <div id="app">
    <div class="router-list">
      <router-link to="/calendar">calendar</router-link>
      <router-link to="/mulcalendar">mulcalendar</router-link>
    </div>
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
.router-list {
  display: flex;
  justify-content: space-around;
}
</style>
