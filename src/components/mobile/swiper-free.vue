<template>
    <div class="swiper-free">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="item in 8" :key="item">
                <img src="https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/kaola.png" />
                <span class="game-title">Matchstick Men</span>
            </swiper-slide>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'nft-games',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            swiperOption: {
                slidesPerView: 'auto',
                loopedSlides: 4,
                freeMode: true,
                dragSize: 30,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
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
.swiper-free {
    margin-top: 50px;
    .swiper {
        margin-top: 34px;
        overflow-x: hidden;
        overflow-y: visible;
        height: 420px;
        .swiper-slide {
            width: 240px;
            height: 320px;
            position: relative;
            margin-right: 20px;
            background-color: #007aff;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 100px;
            }
            .game-title {
                font-size: 24px;
                font-weight: 400;
                color: #333;
                padding-left: 10px;
                position: absolute;
                bottom: -40px;
            }
        }
        .swiper-scrollbar {
            bottom: 30px;
            width: 300px;
            left: 50%;
            transform: translateX(-50%);
            background: #a3a3a3;
        }
        /deep/ .swiper-scrollbar-drag {
            background: #268aef;
        }
    }
}
</style>
