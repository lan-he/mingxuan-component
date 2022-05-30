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
    padding-top: 40px;
    box-sizing: border-box;
    .pc-menu-item {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        opacity: 0.67;
        padding-left: 40px;
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            color: #1890ff;
        }
    }
    .active {
        background: #e6f7ff;
        color: #1890ff;
        &::after {
            width: 3px;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            border-right: 3px solid #1890ff;
            content: '';
        }
    }
}
</style>
