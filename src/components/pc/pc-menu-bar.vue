<template>
    <div class="pc-menu-bar" :class="{ 'shrink-active': contractionVariable }">
        <div class="shrink-click" :class="{ 'shrink-click-shrink': contractionVariable }" @click="shrinkClick">
            <i class="iconfont icon-back"></i>
        </div>
        <div class="pc-menu-item-box" :class="{ shrink: contractionVariable }">
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
    </div>
</template>
<script>
export default {
    name: 'pcmenubar',
    data() {
        return {
            menuList: [
                {
                    name: 'pinkman(unity自制游戏)',
                    path: '/pinkman-game',
                },
                {
                    name: 'bilibili头部深景效果',
                    path: '/bilibili-header',
                },

                {
                    name: '404夜空',
                    path: '/not-found-purple',
                },
                {
                    name: '404雪天',
                    path: '/not-found-snowy',
                },
                {
                    name: '404沙漠',
                    path: '/not-found-desert',
                },
                // {
                //     name: '拼图工具',
                //     path: '/puzzle-tool',
                // },
            ],
            contractionVariable: false,
        }
    },
    methods: {
        onRouterPush(item) {
            if (this.$route.path == item.path) return
            this.$router.replace(item.path)
        },
        shrinkClick() {
            this.contractionVariable = !this.contractionVariable
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
    position: relative;
    transition: 0.3s;
    z-index: 51;
    .shrink-click {
        width: 30px;
        height: 30px;
        border: 1px solid rgb(229, 230, 235);
        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
        transition: all 0.15s;
        position: absolute;
        right: -18px;
        top: 42%;
        transform: translateY(-50%);
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.3s;
        z-index: 1;
        &:hover {
            background-color: rgb(242, 242, 242);
            color: #000;
        }
        i {
            color: rgb(51, 54, 57);
            transform: rotateY(0deg);
            transition: 0.3s;
        }
    }
    .shrink-click-shrink {
        right: -40px;
        i {
            transform: rotateY(180deg);
        }
    }
    .pc-menu-item-box {
        width: 230px;
        transition: 0.3s;
        overflow: hidden;
        .pc-menu-item {
            width: 230px;
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
    }
    .shrink {
        width: 1px;
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
.shrink-active {
    width: 0px;
}
</style>
