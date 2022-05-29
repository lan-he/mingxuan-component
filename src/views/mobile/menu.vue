<template>
    <div class="menu">
        <div v-for="(item, index) in menuList" :key="index" class="item-nav" @click="onRouterPush(item)">
            <span>{{ item.name }}</span>
            <i class="iconfont icon-right"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'menus',
    data() {
        return {
            menuList: [
                {
                    name: 'Tree 树形控件',
                    path: '/tree',
                },
                {
                    name: 'Tree 树形控件(张思远)',
                    path: '/tree-zsy',
                },
                {
                    name: 'Sku 货品选择',
                    path: '/sku',
                },
                {
                    name: 'Calendar 日历组件',
                    path: '/calendar',
                },
                {
                    name: 'Calendar 日历选择',
                    path: '/calendar-multiple',
                },
            ],
        }
    },
    methods: {
        onRouterPush(item) {
            this.$router.push(item.path)
        },
    },
}
</script>
<style lang="less" scoped>
.menu {
    .item-nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin: 0 0 12px;
        padding: 0 20px;
        color: #323233;
        font-weight: 600;
        font-size: 14px;
        line-height: 40px;
        background: #f7f8fa;
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            background: #eef0f4;
        }
    }
}
</style>
