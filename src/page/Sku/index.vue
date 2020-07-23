<template>
  <!-- <div class="sku">
    <div v-for="(key,index) in keys">
      <div class="tabContent">
        {{key.name}}:
        <input type="button" @click="itemSelect(index,i,item)" v-for="(item, i) in key.items" :class="{block: !item.block, active: item.active, 'sku':true}" v-model="item.value" />
      </div>
    </div>
  </div> -->
  <div class="spu-selectbox">
    <p>{{simulatedDATA.title}}</p>
    <div>
      <!-- <a v-for="(item,index) in simulatedDATA.specifications" :key="index"> {{item.name}} ：{{select[index]}}</a> -->
      规格型号：<a v-for="(item,index) in select" :key="index"> {{item}}</a>
    </div>
    <div v-for="(item,index) in simulatedDATA.specifications" :key="index" class="listbox">
      <div>{{item.name}}:</div>
      <div class="commodity">
        <a v-for="(items,indexs) in item.item" :key="indexs" :class="['content',{'active':items.Highlight},{'disable':items.block==false}]" @click="selectTag(index,indexs,items)">{{items.label}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sku',
  data() {
    return {
      simulatedDATA: {
        title: '手机',
        difference: [
          //   {
          //     id: '1',
          //     price: '200.00',
          //     stock: '59',
          //     difference: '128G,100,白色'
          //   },
          {
            id: '2',
            price: '200.00',
            stock: '19',
            difference: '128G,100,蓝色'
          },
          {
            id: '3',
            price: '200.00',
            stock: '0',
            difference: '128G,100,黑色'
          },
          {
            id: '4',
            price: '259.00',
            stock: '0',
            difference: '128G,200,白色'
          },
          {
            id: '5',
            price: '200.00',
            stock: '19',
            difference: '128G,200,蓝色'
          },
          {
            id: '6',
            price: '200.00',
            stock: '19',
            difference: '128G,200,黑色'
          },
          {
            id: '7',
            price: '259.00',
            stock: '19',
            difference: '256G,100,白色'
          },
          {
            id: '8',
            price: '590.00',
            stock: '0',
            difference: '256G,100,蓝色'
          },
          {
            id: '9',
            price: '200.00',
            stock: '19',
            difference: '256G,100,黑色'
          },
          {
            id: '10',
            price: '359.00',
            stock: '0',
            difference: '256G,200,白色'
          },
          {
            id: '11',
            price: '300.00',
            stock: '19',
            difference: '256G,200,蓝色'
          },
          {
            id: '12',
            price: '399.00',
            stock: '19',
            difference: '256G,200,黑色'
          }
        ],
        specifications: [
          {
            //这里是要被渲染字段
            name: '型号',
            item: [
              {
                label: '128G'
              },
              {
                label: '256G'
              }
            ]
          },
          {
            name: '尺寸',
            item: [
              {
                label: '100'
              },
              {
                label: '200'
              }
            ]
          },
          {
            name: '颜色',
            item: [
              {
                label: '白色'
              },
              {
                label: '蓝色'
              },
              {
                label: '黑色'
              }
            ]
          }
        ]
      },
      select: []
    }
  },
  components: {},
  mounted() {
    this.start_list()
    // this.pros_in_skulist()
  },
  methods: {
    start_list() {
      this.simulatedDATA.specifications.forEach(item => {
        // console.log(item)

        // for (let key in item) {
        item.item.forEach(i => {
          if (this.pros_in_skulist().includes(i['label'])) {
            this.$set(i, 'block', true)
            // i.block = true
          } else {
            this.$set(i, 'block', false)
            // i.block = false
          }
        })
        // }
      })
    },
    pros_in_skulist(arr = this.simulatedDATA.difference) {
      let pro_all_in = []
      arr.forEach(item => {
        pro_all_in = pro_all_in.concat(item['difference'].split(','))
      })
      return pro_all_in
    },
    // skulist(arr = this.simulatedDATA.difference) {
    //   let pro_all_in = []
    //   arr.forEach(item => {
    //     pro_all_in.push(item['difference'].split(','))
    //   })
    //   return pro_all_in
    // },
    selectTag(index, tagindex, item) {
      let data = this.simulatedDATA.specifications
      let difflist = this.simulatedDATA.difference
      if (data[index]['item'][tagindex].block == false) return
      if (!data[index]['item'][tagindex].Highlight) {
        this.select[index] = item.label //当前选中的放进数组
        this.$set(data[index]['item'][tagindex], 'Highlight', true) //选中改变颜色
      } else {
        this.select[index] = '' //当前选中的放进数组
        this.$set(data[index]['item'][tagindex], 'Highlight', false) //选中改变颜色
      }
      data[index]['item'].forEach(element => {
        //除刚刚选中的其他的都取消高亮
        if (element.label != item.label) {
          element.Highlight = false
        }
      })

      let arr = [] //筛选出包含选中数据的组合
      difflist.forEach(v => {
        //   v['difference'].split(',').includes(vm)
        if (
          this.select.every(function(vm) {
            if (vm) {
              return v['difference'].split(',').includes(vm)
            } else {
              return true
            }
          })
        ) {
          arr.push(v)
        }
      })
      let lastArr = this.pros_in_skulist(arr)
      //   console.log(lastArr, 'lastArr')
      //   !this.select[x] ?? false
      data.forEach((vm, x) => {
        if (index != x) {
          vm.item.forEach((k, j) => {
            if (lastArr.includes(k['label'])) {
              data[x]['item'][j].block = true
            } else {
              data[x]['item'][j].block = false
            }
          })
        } else if (this.select.filter(res => res != '').length <= 1) {
          // 选中列表只有一个的时候   初始化 所以的都可以选
          //   console.log('只有一个')
          this.start_list()
        }
      })
    }
  }
}
</script>
<style>
* {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.spu-selectbox {
  padding: 10px;
  color: #333;
}
.listbox {
  /* display: flex;
  align-items: center; */
  padding: 10px 0;
}
.commodity {
  padding-left: 15px;
  margin-top: 5px;
}
.content {
  display: inline-block;
  padding: 3px 5px;
  margin: 0 5px;
  box-sizing: border-box;
  background: #ebebeb;
  border-radius: 8px;
  border: 1px solid transparent;
}
.active {
  border: 1px solid rgb(194, 63, 63);
}
.disable {
  background: #f3f3f3;
  color: #999;
}
</style>
