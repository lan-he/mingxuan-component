<template>
  <div>
    <div class="status-bar">
      <div class="status-bar-conent">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xinhao"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Wifi"></use>
        </svg>
      </div>
      <div class="status-bar-conent">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-power-electricity"></use>
        </svg>
        <span>{{this.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { setInterval } from 'timers'
export default {
  data() {
    return {
      time: ''
    }
  },
  components: {},
  mounted() {
    this.time = moment().format('h:mm')
    setInterval(()=>{
      this.time = moment().format('h:mm')
    },10000)
  },
  methods: {
  }
}
</script>

<style scoped>
.status-bar {
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
}
.status-bar-conent {
  height: 100%;
  display: flex;
  align-items: center;
}
.icon {
  width: 20px;
  height: 20px;
  margin: 0 2px;
}
</style>
