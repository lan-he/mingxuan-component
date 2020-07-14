<template>
  <div class="trees-box">
    <TreeNode :tree="trees" />
  </div>
</template>

<script>
import TreeNode from '@/components/trees-node.vue'
export default {
  name: 'treet',
  data() {
    return {
      trees: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                },
              ],
            },{
              id: 11,
              label: '二级 1-2',
              children: [
                {
                  id: 12,
                  label: '三级 1-2-1',
                },
                {
                  id: 13,
                  label: '三级 1-2-2',
                },
              ],
            }
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
    }
  },
  components: {
    TreeNode,
  },
  mounted() {
    this.initLiat(this.trees)
  },
  methods: {
    initLiat(items) {
      items.map((item) => {
        this.$set(item, 'selected', 0)
        if (item.children) {
          this.$set(item, 'open', 0)
        }
        if (item.children) {
          this.initLiat(item.children)
        }
      })
    }
  },
}
</script>

<style scoped>
.trees-box {
  padding: 20px;
  box-sizing: border-box;
}
.children {
  margin-left: 20px;
}
</style>
