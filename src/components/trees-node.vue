<template>
  <div>
    <div v-if="tree">
      <div v-for="(node, index) in tree" :key="node.id">
        <div class="conent" @click="nodeClick(node, index)">
          <div
            class="buxuan"
            :class="[
              node.selected === 0
                ? 'buxuan'
                : node.selected === 1
                ? 'bufenxuan'
                : 'quanxuan',
            ]"
          ></div>
          {{ node.label }}
        </div>
        <div class="children">
          <TreesNode :tree="node.children" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'TreesNode',
  data() {
    return {}
  },
  props: {
    tree: {
      type: Array,
    },
  },
  computed: {},
  methods: {
    nodeClick(node, index) {
      if (node.selected === 2 || node.selected === 1) {
        this.$set(node, 'selected', 0)
      } else {
        this.$set(node, 'selected', 2)
      }
      this.refreshAllParentNodes(this.$parent)
      this.refreshAllSonNodes(this.$children[index], node.selected)
    },
    refreshAllSonNodes(node, status) {
      if (node instanceof Vue && node.tree && node.$children) {
        node.tree.map((item) => {
          this.$set(item, 'selected', status)
        })
        node.$children.map((nodes) => {
          this.refreshAllSonNodes(nodes, status)
        })
      }
    },
    refreshAllParentNodes(node) {
      if (node instanceof Vue && node.tree) {
        if (node.$children) {
          node.$children.map((nodes, index) => {
            let status = 0
            let buxuan = 0
            let xuanzong = 0
            if (nodes.tree) {
              nodes.tree.map((item) => {
                if (item.selected === 0) {
                  buxuan++
                } else if (item.selected === 2) {
                  xuanzong++
                }
                if (buxuan === nodes.tree.length) {
                  status = 0
                } else if (xuanzong === nodes.tree.length) {
                  status = 2
                } else {
                  status = 1
                }
                this.$set(node.tree[index], 'selected', status)
              })
            }
          })
        }
        this.refreshAllParentNodes(node.$parent)
      }
    },
    refreshAllParentNodess() {
      // if (node instanceof Vue) {
      //   var status = null;
      //   var nullCount = 0;
      //   var halfCount = 0;
      //   var fullCount = 0;
      //   for (index in node.$children) {
      //     if (typeof node.$children[index].tree.selected === 'undefined') {
      //       nullCount++;
      //     } else if (node.$children[index].tree.selected === null) {
      //       nullCount++;
      //     } else if (node.$children[index].tree.selected === 'half') {
      //       halfCount++;
      //     } else if (node.$children[index].tree.selected === 'full') {
      //       fullCount++;
      //     }
      //   }
      //   if (fullCount === node.$children.length) {
      //     status = 'full';
      //   } else if (nullCount === node.$children.length) {
      //     status = null;
      //   } else {
      //     status = 'half';
      //   }
      //   Vue.set(node.tree, 'selected', status);
      //   // 递归计算父级
      //   this.refreshAllParentNodes(node.$parent);
      // }
    },
  },
}
</script>

<style scoped>
.conent {
  display: flex;
}
.children {
  margin-left: 20px;
}
.buxuan {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
.bufenxuan {
  background-color: #409eff;
}
.bufenxuan:before {
  content: '';
  position: absolute;
  display: block;
  background-color: #fff;
  height: 2px;
  transform: scale(0.5);
  left: 0;
  right: 0;
  top: 5px;
}
.quanxuan {
  background-color: #409eff;
  border-color: #409eff;
}
.quanxuan:after {
  box-sizing: content-box;
  content: '';
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 0.05s;
  transform-origin: center;
  transform: rotate(45deg) scaleY(1)
}
</style>
