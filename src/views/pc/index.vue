<template>
    <div class="pc-box">
        <PcMenuBar />
        <router-view class="router-view" />
    </div>
</template>
<script>
import PcMenuBar from '@/components/pc/pc-menu-bar.vue'
export default {
    name: 'pc-box',
    data() {
        return {}
    },
    components: {
        PcMenuBar,
    },
}
</script>
<style lang="less" scoped>
.pc-box {
    display: flex;
    flex: 1;
    .router-view {
        flex: 1;
    }
}
</style>
