<template>
    <div class="banner">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in 5" :key="item">
                <img src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/kaola.png" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
// swiper@5.4.5 vue-awesome-swiper@4.1.1
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'banner',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 5000, // 自动轮播
                },
                loop: true, // 循环播放
                spaceBetween: 10, // 块之间的距离
                pagination: {
                    el: '.swiper-pagination', // 挂在dom
                },
            },
        }
    },
}
</script>
<style lang="less" scoped>
.banner {
    position: relative;
    .swiper {
        overflow-x: hidden;
        overflow-y: visible;
        height: 234px;
        position: relative;
        .swiper-slide {
            height: 200px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #007aff;
            img {
                width: 100px;
            }
        }
        .swiper-pagination-bullets {
            bottom: 5px;
        }
        /deep/ .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background-color: #3a3a3a;
        }
        /deep/ .swiper-pagination-bullet-active {
            background: #87c1ff;
        }
    }
}
</style>
