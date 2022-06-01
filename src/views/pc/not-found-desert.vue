<template>
    <div class="body-box">
        <div class="stars"></div>
        <div class="sun-moon">
            <div class="sun"></div>
            <div class="moon"></div>
        </div>
        <div id="js-hills" class="background hills"></div>
        <div id="js-country" class="background country"></div>
        <div id="js-foreground" class="background foreground"></div>
        <div class="error-content">对不起，这个页面去404沙漠旅行还没有回来.</div>
        <a href="/" class="button-home">返回</a>
        <div class="code">
            <span>4</span>
            <span>0</span>
            <span>4</span>
        </div>
    </div>
</template>
<style scoped>
.body-box {
    /* height: 100%;
    width: 100%; */
    color: #fff;
    overflow: hidden;
    position: relative;
}
.body-box {
    animation: body 60s linear infinite;
    background-color: #8dcce8;
    position: relative;
    transition: background-color 10s ease;
}
@keyframes body {
    0% {
        background-color: #8dcce8;
    }
    25% {
        background-color: #fe9900;
    }
    40% {
        background-color: #222;
    }
    60% {
        background-color: #222;
    }
    100% {
        background-color: #8dcce8;
    }
}
.stars {
    animation: stars 60s linear infinite;
    background: url(https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/desert404-sky.png)
        repeat center top;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .stars {
        background-size: 50%, 75%;
    }
}
@media screen and (max-width: 767px) {
    .stars {
        animation: none;
    }
}
@keyframes stars {
    0% {
        opacity: 0;
    }
    33% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    66% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
.sun-moon {
    height: 200%;
    width: 0;
    animation: sun-moon 60s linear infinite;
    left: 50%;
    position: absolute;
    top: 0;
    z-index: 10;
}
@media screen and (max-width: 767px) {
    .sun-moon {
        animation: none;
    }
}
.sun {
    height: 400px;
    width: 400px;
    background-color: #fbd461;
    border-radius: 200px;
    left: 0;
    margin: -200px 0 0 -200px;
    position: absolute;
    top: 0;
}
@media screen and (max-width: 1280px), screen and (max-height: 720px) {
    .sun {
        height: 320px;
        width: 320px;
        border-radius: 160px;
        margin: -160px 0 0 -160px;
    }
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .sun {
        height: 240px;
        width: 240px;
        border-radius: 120px;
        margin: -120px 0 0 -120px;
    }
}
@media screen and (max-width: 767px) {
    .sun {
        height: 160px;
        width: 160px;
        border-radius: 80px;
        margin: -80px 0 0 -80px;
    }
}
.moon {
    height: 200px;
    width: 200px;
    background-color: #f4f3ef;
    border-radius: 100px;
    left: 0;
    margin: -100px 0 0 -100px;
    position: absolute;
    top: 100%;
}
@media screen and (max-width: 1280px), screen and (max-height: 720px) {
    .moon {
        height: 160px;
        width: 160px;
        border-radius: 80px;
        margin: -80px 0 0 -80px;
    }
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .moon {
        height: 120px;
        width: 120px;
        border-radius: 60px;
        margin: -60px 0 0 -60px;
    }
}
@media screen and (max-width: 767px) {
    .moon {
        height: 80px;
        width: 80px;
        border-radius: 40px;
        margin: -40px 0 0 -40px;
    }
}
@keyframes sun-moon {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.background {
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    box-sizing: content-box;
    left: -20px;
    padding: 0 20px;
    position: absolute;
    width: 100%;
}
@media screen and (min-width: 1881px) {
    .background {
        background-size: 100% auto;
        height: 100% !important;
    }
}
@media screen and (max-width: 767px) {
    .background {
        left: -50%;
        padding: 0 50%;
    }
}
@media screen and (max-height: 340px) {
    .background {
        margin-bottom: -30px;
    }
}
.hills {
    background-image: url(https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/desert404-hills.png);
    bottom: 30px;
    height: 640px;
    z-index: 20;
}
.country {
    background-image: url(https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/desert404-country.png);
    bottom: 2px;
    height: 600px;
    z-index: 40;
}
.foreground {
    background-image: url(https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/desert404-foreground.png);
    bottom: -10px;
    height: 400px;
    z-index: 50;
}
.code {
    bottom: 85px;
    font-size: 240px;
    font-weight: 800;
    left: 50%;
    line-height: 1;
    margin-left: -240px;
    position: absolute;
    text-align: center;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    width: 500px;
    z-index: 30;
    display: flex;
    justify-content: space-around;
}
@media screen and (max-width: 1680px) {
    .code {
        bottom: 75px;
    }
}
@media screen and (max-width: 1440px) {
    .code {
        bottom: 60px;
    }
}
@media screen and (max-width: 1280px), screen and (max-height: 720px) {
    .code {
        bottom: 50px;
    }
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .code {
        bottom: 35px;
        font-size: 200px;
    }
}
@media screen and (max-width: 767px) {
    .code {
        bottom: 50px;
        font-size: 160px;
        left: 0;
        margin-left: 0;
        width: 100%;
    }
}
@media screen and (max-width: 500px) {
    .code {
        bottom: 40px;
    }
}
@media screen and (max-height: 400px) {
    .code {
        bottom: 30px;
    }
}
.code span {
    display: inline-block;
}
.code span + span {
    margin-left: -64px;
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .code span + span {
        margin-left: -50px;
    }
}
@media screen and (max-width: 767px) {
    .code span + span {
        margin-left: -40px;
    }
}
@media screen and (max-height: 340px) {
    .code span + span {
        margin-left: -30px;
    }
}
@media screen and (max-height: 340px) {
    .code {
        bottom: 10px;
        font-size: 120px;
    }
}
.error-content {
    bottom: 570px;
    font-size: 48px;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    width: 100%;
    z-index: 60;
}
@media screen and (max-width: 1280px), screen and (max-height: 720px) {
    .error-content {
        bottom: 450px;
        font-size: 44px;
    }
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .error-content {
        bottom: 400px;
        font-size: 40px;
    }
}
@media screen and (max-width: 767px) {
    .error-content {
        bottom: 310px;
        font-size: 18px;
    }
}
@media screen and (max-height: 440px) {
    .error-content {
        bottom: 270px;
    }
}
@media screen and (max-height: 340px) {
    .error-content {
        top: 20px;
    }
}
.error-content a {
    color: #fff;
    text-decoration: underline;
}
.error-content a:focus,
.error-content a:hover {
    color: #fff;
    text-decoration: none;
}
.button-home {
    height: 57px;
    width: 250px;
    background: url(https://hemingxaun-1256953833.cos.ap-shanghai.myqcloud.com/mingxuan-component/desert404-button.png)
        no-repeat center -57px;
    background-size: 250px 114px;
    border: 2px solid #fff;
    border-radius: 2px;
    bottom: 470px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    left: 50%;
    line-height: 55px;
    margin-left: -125px;
    overflow: hidden;
    position: absolute;
    text-indent: -9999px;
    z-index: 60;
}
.button-home:focus,
.button-home:hover {
    background-position: center 0;
}
@media screen and (max-width: 1280px), screen and (max-height: 720px) {
    .button-home {
        bottom: 350px;
    }
}
@media screen and (max-width: 1024px), screen and (max-height: 580px) {
    .button-home {
        bottom: 280px;
    }
}
@media screen and (max-width: 767px) {
    .button-home {
        bottom: 210px;
    }
}
@media screen and (max-height: 440px) {
    .button-home {
        bottom: 190px;
    }
}
@media screen and (max-height: 340px) {
    .button-home {
        top: 90px;
    }
}
</style>
