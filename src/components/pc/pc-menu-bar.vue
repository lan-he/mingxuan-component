<template>
    <div class="pc-menu-bar">
        <div
            class="pc-menu-item"
            :class="{ active: item.path == $route.path }"
            v-for="(item, index) in menuList"
            :key="index"
            @click="onRouterPush(item)"
        >
            {{ item.name }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'pcmenubar',
    data() {
        return {
            menuList: [
                {
                    name: 'bilibili头部',
                    path: '/bilibili-header',
                },
                {
                    name: '拼图工具',
                    path: '/puzzle-tool',
                },
            ],
        }
    },
    methods: {
        onRouterPush(item) {
            console.log('sss')
            if (this.$route.path == item.path) return
            this.$router.replace(item.path)
        },
    },
}
</script>
<style lang="less" scoped>
.pc-menu-bar {
    width: 230px;

    box-sizing: border-box;
    background-color: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    margin-top: 40px;
    .pc-menu-item {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        opacity: 0.67;
        padding-left: 40px;
        box-sizing: border-box;
    }
    .active {
        background: #1890ff;
    }
}
</style>
