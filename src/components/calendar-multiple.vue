<template>
  <div class="box">
    <div class="calender">
      <div class="header">
        <div @click="changemonth(-1)">《</div>
        <div>
          <input type="number" v-model="Year" @input="keyup();">年<input type="number" v-model="Month" @input="keyup();">月
        </div>
        <div @click="changemonth(+1)">》</div>
      </div>
      <div class="weekbox">
        <div class="week" v-for="(item,index) in weekShow" :key="index">{{item}}</div>
      </div>
      <div class="calenderbox">
        <div class="day" :class="classObject(item)" @click="calDayCls(item)" v-for="(item,index) in calenderlist" :key="index">{{item}}</div>
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
  computed: {
    classObject() {
      return function(item) {
        let daylist = this.calDay
        if (!daylist.length > 0) return
        if (daylist[0].Month != this.Month) return
        if (daylist[0].Year != this.Year) return
        if (daylist.length == 1) {
          if (daylist[0].index == item) {
            return 'active'
          }
        }
        if (daylist.length == 2) {
          if (daylist[0].index == item || daylist[1].index == item) {
            return 'active'
          }
          if (daylist[0].index < daylist[1].index) {
            if (item > daylist[0].index && item < daylist[1].index) {
              return 'actives'
            }
          }
          if (daylist[0].index > daylist[1].index) {
            if (item < daylist[0].index && item > daylist[1].index) {
              return 'actives'
            }
          }
        }
      }
    }
  },
  methods: {
    keyup() {
      this.getData()
    },
    calDayCls(item) {
      if (item == '') return
      if (item == (this.calDay[0] || this.calDay[1])) {
        this.calDay = []
        this.calDay.push({
          time: `${this.Year}-${this.Month}-${item}`,
          index: item,
          Month: this.Month,
          Year: this.Year
        })
      }
      if (this.calDay.length > 0 && this.Month != this.calDay[0].Month) {
        this.calDay = []
      }
      if (this.calDay.length == 2) {
        this.calDay.shift()
      }
      this.calDay.push({
        time: `${this.Year}-${this.Month}-${item}`,
        index: item,
        Month: this.Month,
        Year: this.Year
      })
      //   console.log(this.calDay)
    },
    changemonth(num) {
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
  width: 100%;
  margin-top: 20px;
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
  /* width: 60px; */
  width: 14%;
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
  /* width: 60px; */
  width: 14%;
  height: 50px;
  line-height: 50px;
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
}
input {
  width: 55px;
  background: none;
  outline: none;
  border: none;
  text-align: center;
}
input:focus {
  border: none;
}
</style>