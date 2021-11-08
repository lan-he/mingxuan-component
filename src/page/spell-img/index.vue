<template>
  <div class="spell-img">
    <div class="left-menu">
      <div class="left-menu-top"></div>
      <div class="left-menu-bottom">
        <div
          class="container-mini"
          v-for="(item, index) in isData.items"
          :key="index"
        >
          <div
            v-for="(item, index) in isData.items"
            :key="index"
            :style="item"
            class="item item-1"
          ></div>
          <div class="drag-line" id="dragLine">
            <div class="drag-line-center"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-menu">
      <div class="container" id="container">
        <div
          v-for="(item, index) in isData.items"
          :key="index"
          :style="item"
          class="item item-1"
        >
          <span>+</span>
        </div>
        <div class="drag-line" id="dragLine">
          <div class="drag-line-center"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dataList from './data.js'
export default {
  name: 'spell-img',
  data() {
    return {
      dataList: dataList,
      isData: {
        itemNum: 6,
        items: [
          {
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 1,
            gridColumnEnd: 3,
          },
          {
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 3,
            gridColumnEnd: 5,
          },
          {
            gridRowStart: 1,
            gridRowEnd: 3,
            gridColumnStart: 5,
            gridColumnEnd: 7,
          },
          {
            gridRowStart: 3,
            gridRowEnd: 5,
            gridColumnStart: 1,
            gridColumnEnd: 3,
          },
          {
            gridRowStart: 3,
            gridRowEnd: 7,
            gridColumnStart: 3,
            gridColumnEnd: 7,
          },
          {
            gridRowStart: 5,
            gridRowEnd: 7,
            gridColumnStart: 1,
            gridColumnEnd: 3,
          },
        ],
      },
    }
  },
  components: {},
  mounted() {
    this.drag()
  },
  methods: {
    drag() {
      // 1. 获取两个大小div
      // 外层 BOX DOM
      var oPanel = document.getElementById('container')
      // 线 DOM
      var oDragIcon = document.getElementById('dragLine')
      // 定义4个变量
      var disX = 0 //鼠标按下时光标的X值
      var disY = 0 //鼠标按下时光标的Y值
      // var disW = 0 //拖拽前div的宽
      var disH = 0 // 拖拽前div的高
      //3. 给小div加点击事件
      oDragIcon.onmousedown = function(ev) {
        var evt = ev || window.event
        disX = evt.clientX // 获取鼠标按下时光标x的值
        var offsetLeft = oDragIcon.offsetLeft - disX // 获取点击差值
        var oPanelWidthLists
        var oPanelWidthList = getComputedStyle(oPanel, null)[
          'gridTemplateColumns'
        ].split('px')
        oPanelWidthList = oPanelWidthList.map((item) => {
          return Number(item)
        })
        disY = evt.clientY // 获取鼠标按下时光标Y的值
        // disW = oPanel.offsetWidth // 获取拖拽前div的宽
        // disH = oPanel.offsetHeight // 获取拖拽前div的高
        // disW = 100 // 获取拖拽前div的宽
        disH = 100 // 获取拖拽前div的高
        document.onmousemove = function(ev) {
          var evt = ev || window.event
          //拖拽时为了对宽和高 限制一下范围，定义两个变量
          var W = evt.clientX - disX
          var H = evt.clientY - disY + disH

          oPanelWidthLists = getComputedStyle(oPanel, null)[
            'gridTemplateColumns'
          ].split('px')
          // oPanelWidthLists = oPanelWidthList.map((item) => {
          //   return Number(item)
          // })
          console.log(
            oPanelWidthLists[0],
            'oPanelWidthLists[0]oPanelWidthLists[0]oPanelWidthLists[0]'
          )
          if (oPanelWidthLists[0] <= 20) {
            console.log(
              oPanelWidthLists[0],
              'oPanelWidthLists[0]oPanelWidthLists[0]oPanelWidthLists[0]'
            )
          }
          oPanel.style.gridTemplateColumns = `${oPanelWidthList[0] +
            W / 2}px ${oPanelWidthList[1] + W / 2}px ${oPanelWidthList[2] -
            W / 2}px ${oPanelWidthList[3] - W / 2}px 100px 100px` // 拖拽后物体的宽
          oDragIcon.style.left = evt.clientX + offsetLeft + 'px'
          // if (W > 800) {
          //   W = 800
          // }
          // if (H < 100) {
          //   H = 100
          // }
          // if (H > 500) {
          //   H = 500
          // }

          console.log(oPanelWidthList[0], W, H)
        }
        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },
  },
}
</script>
<style lang="scss">
.spell-img {
  display: flex;
  align-items: center;
  background-color: #e9ecf1;
  .left-menu {
    width: 280px;
    height: 100vh;
    background-color: #fff;
    border-right: 1px solid #f0f2f5;
    .left-menu-top {
      height: 250px;
      border-bottom: 1px solid #f8f8f8;
    }
    .left-menu-bottom {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .container-mini {
        display: grid;
        grid-template-columns: repeat(6,6px);
        grid-template-rows: repeat(6,6px);
        grid-gap: 1px 1px;
        position: relative;
        background: #fff;
        box-sizing: border-box;
        margin: 3px;
        &:hover {
          cursor: pointer;
          background: #BFC2CA;
        }
        .item {
          font-size: 4em;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #CACED6;
          span {
            display: block;
            user-select: none;
            font-size: 28px;
            color: #005cf9;
          }
        }
      }
    }
  }
  .right-menu {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    #container {
      display: grid;
      grid-template-columns: 100px 100px 100px 100px 100px 100px;
      grid-template-rows: 100px 100px 100px 100px 100px 100px;
      grid-gap: 10px 10px;
      position: relative;
      background: #fff;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 1px 1px 15px #cccccc;
      .item {
        font-size: 4em;
        border: 2px dashed #d1e0fc;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          border: 2px solid #005cf9;
          cursor: pointer;
        }
        span {
          display: block;
          user-select: none;
          font-size: 28px;
          color: #005cf9;
        }
      }
      .item-1 {
        background-color: transparent;
      }
      .drag-line {
        width: 10px;
        height: 650px;
        display: inline-block;
        position: fixed;
        top: 144px;
        left: 651px;
        cursor: w-resize;
        display: flex;
        justify-content: center;
        &:hover .drag-line-center {
          background-color: #669dfb;
        }
        .drag-line-center {
          background-color: transparent;
          width: 5px;
          height: 650px;
        }
      }
    }
  }
}
</style>
