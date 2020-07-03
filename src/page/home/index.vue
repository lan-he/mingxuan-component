<template>
  <div>
    <div class="background-phone">
      <div class="phone-conent">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
// import Calendar from '@/components/calendars'
export default {
  data() {
    return {
    }
  },
  components: {
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
}
.phone-conent {
  width: 326px;
  height: 560px;
  background: white;
}
</style>