<template>
    <div class="mobile">
        <div class="mobile-box">
            <HeaderTop />
            <div class="mobile-box-content">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import HeaderTop from '@/components/mobile/header-top.vue'
export default {
    name: 'mobile',
    components: { HeaderTop },
    data() {
        return {}
    },
    mounted() {},
}
</script>
<style lang="less" scoped>
.mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    .mobile-box {
        width: 350px;
        min-height: 650px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 8px 12px #ebedf0;
        .mobile-box-content {
            padding: 24px;
            box-sizing: border-box;
        }
    }
}
</style>
