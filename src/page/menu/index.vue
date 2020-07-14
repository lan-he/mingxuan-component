<template>
  <div>
    <div class="menu-list">
      <div class="menu-item" @click="getInto('tree')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shu"></use>
        </svg>
        <div class="menu-item-bg" :class="{'menu-item-animation': open==='tree'}"></div>
        <span>Tree</span>
      </div>
      <div class="menu-item" @click="getInto('calendar')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <div class="menu-item-bg" :class="{'menu-item-animation': open==='calendar'}"></div>
        <span>日历</span>
      </div>
      <div class="menu-item" @click="getInto('mulcalendar')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rili"></use>
        </svg>
        <div class="menu-item-bg" :class="{'menu-item-animation': open==='mulcalendar'}"></div>
        <span>多选日历</span>
      </div>
      <div class="menu-item" @click="getInto('trees')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-forest__easyiconnet"></use>
        </svg>
        <div class="menu-item-bg" :class="{'menu-item-animation': open==='trees'}"></div>
        <span>Trees</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: ''
    }
  },
  components: {},
  methods: {
    getInto(url) {
      this.open = url
      setTimeout(()=> {
        this.$router.push(url)
      },500)
    }
  }
}
</script>

<style>
.menu-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
}
.icon {
  width: 40px;
  height: 40px;
}
.menu-item-bg {
  width: 0;
  height: 0;
  background-color: #fff;
  
}
.menu-item-animation {
  animation: myfirst .6s;
  animation-fill-mode:forwards;
  left: 0;
  top: 0;
}
@keyframes myfirst
{
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>
