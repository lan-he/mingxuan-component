<template>
    <div class="header-return">
        <i v-if="!this.$route.meta.hideHeaderTop" class="iconfont icon-back" @click="$router.go(-1)"></i>
        <span>{{ title }}</span>
    </div>
</template>
<script>
export default {
    name: 'header-return',
    props: {
        title: {
            type: String,
            default: '标题',
        },
    },
    data() {
        return {}
    },
}
</script>
<style lang="less" scoped>
.header-return {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eef0f4;
    position: relative;
    .icon-back {
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        left: 20px;
    }
}
</style>
