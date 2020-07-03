<template>
  <div>
    <div class="background-phone">
      <div class="phone-conent">
        <StatusBar/>
        <router-view></router-view>
      </div>
      <div class="home-key" @click="back"></div>
    </div>
    
  </div>
</template>

<script>
import StatusBar from '@/components/status-bar'
export default {
  data() {
    return {
    }
  },
  components: {
    StatusBar
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.background-phone {
  width: 350px;
  height: 760px;
  margin: 0 auto;
  background: url('../../assets/image/phone-bg.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.phone-conent {
  width: 326px;
  height: 570px;
  position: relative;
  background: url('../../assets/image/wallpaper.jpg') no-repeat;
  background-size: 100% 100%;
}
.home-key {
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  bottom: 25px;
}
</style>