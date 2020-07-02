<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="flex">
        <a v-if='item.children' :class="item.open?'transicon':''" @click="open(item)">></a>
        <a v-else></a>
        <button @click="Select(item)" :class="choice(item)?'active':choice(item)=='1'?actives:''"></button>
        <div>{{item.label}}</div>
      </div>
      <div class="children" v-if="item.children&&item.open">
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
    },
    Highlight: {
      type: Boolean
    }
  },
  data() {
    return {
      list: this.data
      //   Highlights: this.Highlight,
    }
  },
  mounted() {},
  computed: {},
  methods: {
    choice(item) {
      if (item.select) {
        return true
      } else {
        return false
      }
    },
    Select(item) {
      //   console.log(this.$parent.$parent)
      this.$set(item, 'select', !item.select)
      this.forLiat(item)
    //   this.parentList(item)
    },
    parentList(item) {
      console.log(this.$parent.data)
      console.log(item)
      let parentdata=this.$parent.data.filter(item => item.select === false)
      console.log(parentdata)
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
.flex {
  display: flex;
  align-items: center;
}
.flex > a {
  width: 12px;
  font-size: 20px;
  margin: 0 5px;
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
* {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>