<template>
  <div>
    <!-- <p class="arktitle">欣欣小年快乐</p> -->
    <div class="background-phone">
      <div class="phone-conent">
        <StatusBar />
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
    return {}
  },
  components: {
    StatusBar,
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<style>
.background-phone {
  width: 350px;
  height: 760px;
  margin: 0 auto;
  background: url('https://img-1256953833.cos.ap-nanjing.myqcloud.com/phone-bg.png')
    no-repeat;
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
  background: url('https://img-1256953833.cos.ap-nanjing.myqcloud.com/wallpaper.jpg')
    no-repeat;
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

.arktitle {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  color: transparent;
  animation: blink 2s linear infinite;
  -webkit-animation: blink 2s linear infinite;
  -moz-animation: blink 2s linear infinite;
  -ms-animation: blink 2s linear infinite;
  -o-animation: blink 2s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
@-webkit-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
@-moz-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
@-ms-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
@-o-keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
