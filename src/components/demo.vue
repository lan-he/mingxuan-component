<template>
  <div class="box">
    <div class="calender">
      <div class="header">
        <div @click="changemonth(-1)">《</div>{{Year}}年{{Month}}月<div @click="changemonth(+1)">》</div>
      </div>
      <div class="weekbox">
        <div class="week" v-for="(item,index) in weekShow" :key="index">{{item}}</div>
      </div>
      <div class="calenderbox">
        <div class="day" :class="calDay.length==1?calDay[0].index==item?'active':'':calDay.length==2?(calDay[0].index==item||calDay[1].index==item)?'active':(item>calDay[0].index&&item<calDay[1].index)?'actives':'':''" @click="calDayCls(item)" v-for="(item,index) in calenderlist" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekShow: ['日', '一', '二', '三', '四', '五', '六'],
      calenderlist: [],
      Year: new Date().getFullYear(),
      Month: new Date().getMonth() + 1,
      Day: new Date().getDate(),
      calDay: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    calDayCls(item) {
      if (this.calDay.length == 2) {
        this.calDay.shift()
      }
      if (this.calDay.length > 0 && this.calDay[0].index < item) {
        this.calDay.push({
          time: `${this.Year}-${this.Month}-${item}`,
          index: item
        })
      } else {
        this.calDay.unshift({
          time: `${this.Year}-${this.Month}-${item}`,
          index: item
        })
      }
    },
    changemonth(num) {
        this.calDay=[]
      this.Month = this.Month + num
      if (this.Month == 0) {
        this.Year = this.Year - 1
        this.Month = 12
      }
      if (this.Month == 13) {
        this.Year = this.Year + 1
        this.Month = 1
      }
      this.getData()
    },
    getData() {
      let date = new Date(this.Year, this.Month, 0) //这月最后一天
      let days = date.getDate() //这月多少天
      date.setDate(1)
      let day = date.getDay() //这月第一天是星期几
      let list = []
      for (let i = 0; i < days + day; i++) {
        if (i < day) {
          list.push('') //当月开始空余天数补空
        } else {
          list.push(i - day + 1)
        }
      }
      this.calenderlist = list
    }
  }
}
</script>

<style scoped>
.box {
  border-top: 1px solid #ccc;
}
.calender {
  width: 420px;
  margin-top: 20px;
  /* border: 1px solid pink; */
}
.header {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header > div {
  cursor: pointer;
}
.weekbox {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #ccc;
  color: #666;
  font-size: 13px;
}
.week {
  width: 60px;
  height: 30px;
  line-height: 30px;
  /* border: 1px solid #999; */
  text-align: center;
  box-sizing: border-box;
}
.calenderbox {
  display: flex;
  flex-wrap: wrap;
}
.day {
  width: 60px;
  height: 60px;
  line-height: 60px;
  /* border: 1px solid #999; */
  text-align: center;
  box-sizing: border-box;
}
.active {
  background: rgba(21, 42, 228, 1);
  color: #fff;
}
.actives {
  background: rgba(21, 42, 228, 0.3);
  color: #fff;
}
</style>