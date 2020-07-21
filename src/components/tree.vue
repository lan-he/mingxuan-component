<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <div class="flex">
        <a v-if='item.children' :class="item.open?'transicon':''" @click="open(item)"></a>
        <button @click="select(item)" :class="item.select=='1'?'active':item.select=='2'?'actives':''"></button>
        <div>{{item.label}}</div>
      </div>
      <div class="children" :class="(item.children&&item.open)?'':'childrenhide'">
        <tree :data='item.children' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  methods: {
    select(item) {
      if (item.select == '1' || item.select == '2') {
        this.$set(item, 'select', '0')
      } else {
        this.$set(item, 'select', '1')
      }
      this.forLiat(item)
      this.parentList(this.$parent)
    },
    parentList(item) {
      if (!item.data) return
      if (item.$children) {
        item.$children.map((element, index) => {
          let a = 0
          let b = 0
          //   let state = ''
          element.data.map(elements => {
            if (elements.select == '1') {
              a++
            }
            if (elements.select != '1' && elements.select != '2') {
              b++
            }
          })
          if (element.data.length == a) {
            this.$set(item.data[index], 'select', '1')
          } else if (element.data.length == b) {
            this.$set(item.data[index], 'select', '0')
          } else {
            this.$set(item.data[index], 'select', '2')
          }
        })
        this.parentList(item.$parent)
      }
    },
    forLiat(item) {
      if (item.children) {
        item.children.forEach(element => {
          this.$set(element, 'select', item.select)
          if (element.children) {
            this.forLiat(element)
          }
        })
      }
    },
    open(item) {
      this.$set(item, 'open', !item.open)
    }
  }
}
</script>

<style scoped>
.children {
  padding-left: 15px;
}
.childrenhide {
  display: none;
}
.flex {
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: relative;
  margin: 5px 0;
}
.flex > a {
  position: absolute;
  left: 0px;
  width: 0;
  height: 0;
  border-left: 6px solid black;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  margin-left: 10px;
  margin-right: 10px;
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
}
.transicon {
  transform: rotate(90deg) !important;
}
button {
  margin: 0 5px;
  outline: 0;
  line-height: 1;
  display: inline-block;
  position: relative;
  border: 2px solid #212121;
  border-radius: 2px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  z-index: 1;
  -webkit-transition: border-color 0.15s ease-in, background-color 0.15s ease-in;
  transition: border-color 0.15s ease-in, background-color 0.15s ease-in;
}
/* 对号 */
.active {
  background-color: #2196f3;
  border-color: #2196f3;
}
.active::after {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  content: '';
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 6px;
  left: 4px;
  position: absolute;
  top: 1px;
  width: 3px;
  -webkit-transition: -webkit-transform 0.15s
    cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
  transition: -webkit-transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
  transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
  transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s,
    -webkit-transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate(45deg) scaleY(1);
  transform: rotate(45deg) scaleY(1);
}
/* 横杠 */
.actives {
  background-color: #2196f3;
  border-color: #2196f3;
}
.actives::before {
  content: '';
  position: absolute;
  display: block;
  border-top: 2px solid #fff;
  left: 3px;
  right: 3px;
  top: 50%;
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
}
</style>