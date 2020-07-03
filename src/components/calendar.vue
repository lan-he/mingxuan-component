<template>
  <div class="calendar-box">
    <button @click="nextMonth('pre')">《</button>
    <button @click="switchMonth('2020-06-11')">2020-06-11</button>
    <button @click="switchMonth('2020-07-11')">2020-07-11</button>
    <button @click="switchMonth('2020-08-11')">2020-08-11</button>
    <button @click="switchMonth('2021-06-11')">2021-06-11</button>
    <button @click="nextMonth('next')">》</button>
    <div>{{ year }}年{{ month }}月</div>
    <div class="week-box">
      <div class="week-item" v-for="(item, index) in weekShow" :key="index">
        {{ item }}
      </div>
    </div>
    <div class="days-box">
      <div class="days-item" v-for="(item, index) in calendarList" :key="index">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Calendar',
  data() {
    return {
      weekShow: ['日', '一', '二', '三', '四', '五', '六'],
      calendarList: [],
      showData: '',
      year: '2020',
      month: '8',
    }
  },
  mounted() {
    this.initCalendar()
  },
  methods: {
    initCalendar() {
      let startWeek, daysOfMonth
      if (this.showData === '') {
        startWeek = moment()
          .startOf('month')
          .weekday()
        daysOfMonth = moment().daysInMonth()
        this.year = moment().year()
        this.month = moment().month() + 1
      } else {
        startWeek = moment(this.showData)
          .startOf('month')
          .weekday()
        daysOfMonth = moment(this.showData).daysInMonth()
        this.year = moment(this.showData).year()
        this.month = moment(this.showData).month() + 1
      }
      this.calendarList = []
      for (let i = 0; i < startWeek; i++) {
        let obj = {
          type: 'pre',
          content: '',
        }
        this.calendarList.push(obj)
      }

      for (let i = 0; i < daysOfMonth; i++) {
        let obj = {
          type: 'normal',
          content: i + 1,
        }
        this.calendarList.push(obj)
      }
    },
    switchMonth(data) {
      this.showData = data
      this.initCalendar()
    },
    nextMonth(data) {
      if (data === 'next') {
        if (this.month >= 12) {
          this.year = this.year + 1
          this.month = 1
        } else {
          this.month = this.month + 1
        }
      } else {
        if (this.month <= 1) {
          this.year = this.year - 1
          this.month = 12
        } else {
          this.month = this.month - 1
        }
      }
      let day = `${this.year}-${this.month}-01`
      this.switchMonth(day)
      console.log('aaaaaa', day)
    },
  },
}
</script>

<style scoped>
.week-box {
  display: flex;
}
.week-item {
  width: 30px;
  height: 30px;
  background: aqua;
}
.days-box {
  width: 210px;
  display: flex;
  flex-wrap: wrap;
}
.days-item {
  width: 30px;
  height: 30px;
}
</style>
