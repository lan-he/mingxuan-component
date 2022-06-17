<template>
    <div class="mobile">
        <div class="mobile-box" :class="{ 'mobile-box-true': mobileBoxTrue }">
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
        return {
            mobileBoxTrue: false,
        }
    },
    mounted() {
        if (this.isMobile()) {
            this.mobileBoxTrue = true
        }
    },
    methods: {
        isMobile() {
            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            )
            return flag
        },
    },
}
</script>
<style lang="less" scoped>
.mobile {
    display: flex;
    justify-content: center;
    flex: 1;
    .mobile-box {
        width: 350px;
        min-height: 650px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 8px 12px #ebedf0;
        .mobile-box-content {
            padding: 20px;
            box-sizing: border-box;
        }
    }
    .mobile-box-true {
        width: 100%;
        min-height: auto;
    }
}
</style>
