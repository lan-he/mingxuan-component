<template>
    <div class="swiper-margin">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in 8" :key="item">
                <img src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/kaola.png" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'swiper-margin',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            swiperOption: {
                direction: 'horizontal', //Swiper的滑动方向，可设置为水平方向切换 horizontal 或垂直方向切换 vertical
                loop: true, //是否循环
                slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
                centeredSlides: true, //居中幻灯片。设定为true时，当前的active slide 会居中，而不是默认状态下的居左(关键)
                spaceBetween: 20, //在slide之间设置距离（单位px）
            },
        }
    },
    props: {
        gameTitle: {
            type: String,
            default: 'Games',
        },
    },
    mounted() {},
}
</script>

<style lang="less" scoped>
.swiper-margin {
    margin-top: 30px;
    .swiper {
        .swiper-slide {
            width: 241.5px;
            height: 180px;
            background-color: #007aff;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 100px;
            }
        }
    }
}
</style>
