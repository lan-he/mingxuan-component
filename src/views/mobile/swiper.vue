<template>
    <div class="swiper">
        <SwiperBasics />
        <SwiperFree />
        <SwiperMargin />
    </div>
</template>
<script>
import SwiperBasics from '@/components/mobile/swiper-basics.vue'
import SwiperFree from '@/components/mobile/swiper-free.vue'
import SwiperMargin from '@/components/mobile/swiper-margin.vue'
export default {
    name: 'swiper',
    components: { SwiperBasics, SwiperFree, SwiperMargin },
    data() {
        return {}
    },
    mounted() {},
}
</script>
<style lang="less" scoped>
.swiper {
    padding-bottom: 50px;
}
</style>
