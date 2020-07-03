<template>
  <div>
    <div class="menu-list">
      <div class="menu-item" @click="getInto('tree')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shu"></use>
        </svg>
        <span>Tree</span>
      </div>
      <div class="menu-item" @click="getInto('calendar')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <span>日历</span>
      </div>
      <div class="menu-item" @click="getInto('mulcalendar')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rili"></use>
        </svg>
        <span>多选日历</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    getInto(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style>
.menu-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 40px;
  height: 40px;
}
</style>
