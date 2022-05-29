<template>
    <div class="banner" ref="banner">
        <div class="layer">
            <img
                ref="back"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="back"
                src="http://qnimg.zowoyoo.com/img/null/1607501492084.png"
            />
        </div>
        <div class="layer">
            <img
                v-if="persont22 === 3"
                ref="person22"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="person22"
                src="http://qnimg.zowoyoo.com/img/null/1607501542003.png"
            />
            <img
                v-else-if="persont22 === 2"
                ref="person22"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="person22"
                src="http://qnimg.zowoyoo.com/img/null/1607501562527.png"
            />
            <img
                v-else
                ref="person22"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="person22"
                src="http://qnimg.zowoyoo.com/img/null/1607503700517.png"
            />
        </div>
        <div class="layer">
            <img
                ref="hill"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="hill"
                src="http://qnimg.zowoyoo.com/img/null/1607501848095.png"
            />
        </div>
        <div class="layer">
            <img
                ref="leaves"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="leaves"
                src="http://qnimg.zowoyoo.com/img/null/1607501868946.png"
            />
        </div>
        <div class="layer">
            <img
                ref="person33"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="person33"
                src="http://qnimg.zowoyoo.com/img/null/1607501903187.png"
            />
        </div>
        <div class="layer">
            <img
                ref="left"
                :class="transition ? 'transitiontrue' : 'transitionfalse'"
                class="left"
                src="http://qnimg.zowoyoo.com/img/null/1607501927925.png"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            initsX: '',
            transition: false,
            persont22: 3,
        }
    },
    mounted() {
        this.$refs.banner.addEventListener('mousemove', this.onMousemove)
        this.$refs.banner.addEventListener('mouseenter', this.onMouseover)
        this.$refs.banner.addEventListener('mouseleave', this.onMouseleave)
        this.toAnimation()
    },
    methods: {
        toAnimation() {
            setInterval(() => {
                setTimeout(() => {
                    this.persont22 = 2
                }, 0)
                setTimeout(() => {
                    this.persont22 = 0
                }, 100)
                setTimeout(() => {
                    this.persont22 = 2
                }, 400)
                setTimeout(() => {
                    this.persont22 = 3
                }, 500)
            }, 5000)
        },
        onMouseover(e) {
            this.initsX = e.pageX
            this.transition = false
        },
        onMouseleave() {
            this.transition = true
            this.$refs.back.style.filter = 'blur(4px)'
            this.$refs.back.style.transform = 'translate(0px, 0px)'
            this.$refs.person22.style.filter = 'blur(0)'
            this.$refs.person22.style.transform = 'translate(0px, 0px)'
            this.$refs.hill.style.filter = 'blur(1px)'
            this.$refs.hill.style.transform = 'translate(-58px, 0px)'
            this.$refs.leaves.style.filter = 'blur(4px)'
            this.$refs.leaves.style.transform = 'translate(0px, 5px)'
            this.$refs.person33.style.filter = 'blur(5px)'
            this.$refs.person33.style.transform = 'translate(0px, -2px)'
            this.$refs.left.style.filter = 'blur(6px)'
            this.$refs.left.style.transform = 'translate(0px, 0px)'
        },
        onMousemove(e) {
            const difference = e.pageX - this.initsX
            this.$refs.back.style.filter = 'blur(' + Math.abs(4 + (e.pageX - this.initsX) / 450) + 'px)'
            this.$refs.person22.style.filter = 'blur(' + Math.abs((e.pageX - this.initsX) / 222) + 'px)'
            this.$refs.person22.style.transform = 'translate(' + (e.pageX - this.initsX) / 192 + 'px, 0px)'
            if (difference < 0) {
                this.$refs.hill.style.filter = 'blur(' + Math.abs(1 + (e.pageX - this.initsX) / 300) + 'px)'
            } else if (difference >= 0 && difference < 100) {
                this.$refs.hill.style.filter = 'blur(' + Math.abs(1 - (e.pageX - this.initsX) / 100) + 'px)'
            } else {
                this.$refs.hill.style.filter = 'blur(' + Math.abs(1 + (e.pageX - this.initsX) / 606) + 'px)'
            }
            this.$refs.hill.style.transform = 'translate(' + (-58 + (e.pageX - this.initsX) / 80) + 'px, 0px)'
            if (difference < 0) {
                this.$refs.leaves.style.filter = 'blur(' + Math.abs(4 + (e.pageX - this.initsX) / 240) + 'px)'
            } else if (difference >= 0 && difference < 500) {
                this.$refs.leaves.style.filter = 'blur(' + Math.abs(4 - (e.pageX - this.initsX) / 125) + 'px)'
            } else {
                this.$refs.leaves.style.filter = 'blur(' + Math.abs((e.pageX - this.initsX) / 384) + 'px)'
            }
            this.$refs.leaves.style.transform = 'translate(' + (e.pageX - this.initsX) / 47 + 'px, 5px)'
            if (difference < 0) {
                this.$refs.person33.style.filter = 'blur(' + Math.abs(5 + -difference / 240) + 'px)'
            } else if (difference >= 0 && difference < 1000) {
                this.$refs.person33.style.filter = 'blur(' + Math.abs(5 - (e.pageX - this.initsX) / 200) + 'px)'
            } else if (difference >= 1000 && difference < 1780) {
                this.$refs.person33.style.filter = 'blur(' + Math.abs(0) + 'px)'
            } else {
                this.$refs.person33.style.filter = 'blur(' + Math.abs((e.pageX - this.initsX - 1780) / 28) + 'px)'
            }
            this.$refs.person33.style.transform = 'translate(' + difference / 21.3 + 'px, -2px)'
            this.$refs.left.style.filter = 'blur(' + Math.abs(6 - (e.pageX - this.initsX) / 320) + 'px)'
            this.$refs.left.style.transform = 'translate(' + difference / 18 + 'px, 0px)'
        },
    },
}
</script>
<style scoped>
.banner {
    margin: 0 auto;
    position: relative;
    z-index: 0;
    min-height: 155px;
    height: 9.375vw;
    min-width: 999px;
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center 0;
    background-size: cover;
    overflow: hidden;
    transition: 1s;
}
.layer {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.back {
    width: 3483px;
    height: 290px;
    filter: blur(4px);
    transform: translate(0px, 0px);
}
.person22 {
    width: 2090px;
    height: 191px;
    filter: blur(0);
    transform: translate(0px, 0px);
}
.hill {
    width: 3483px;
    height: 290px;
    filter: blur(1px);
    transform: translate(-58px, 0px);
}
.leaves {
    width: 2090px;
    height: 174px;
    filter: blur(4px);
    transform: translate(0px, 5px);
}
.person33 {
    width: 2090px;
    height: 191px;
    filter: blur(5px);
    transform: translate(0px, -2px);
}
.left {
    width: 2264px;
    height: 207px;
    filter: blur(6px);
    transform: translate(0px, 0px);
}
.transitiontrue {
    transition: 0.3s;
}
.transitionfalse {
    transition: 0s;
}
</style>
