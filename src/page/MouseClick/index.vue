<template>
  <div class="box" @mousedown="touchstart">

      <div class="mouse" v-show="show" >

      </div>
  </div>
</template>

<script>
export default {
  name: 'treet',
  data() {
    return { show: false, }
  },
  components: {},
  mounted() {},
  methods: {
    touchstart(e) {
      this.show = !this.show
      console.log(e.clientX, e.clientY)
    },
  },
}
</script>

<style scoped>
.box {
  padding-top: 20px;
  width: 100%;
  height: 100%;
}
.mouse {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #666;
}
.fade-enter-active,
.fade-leave-active {
  width: 10px;
  height: 10px;
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  width: 50px;
  height: 50px;
  opacity: 0;
}
</style>
