<template>
    <div class="ball run_top_right"></div>
</template>

<style lang="scss">
    html {
        background: #ad4e24;
    }

    //定义球的初始值，位置是绝对定位；
    .ball {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        position: absolute;
        bottom: 20px;
        z-index: 10;
        left: 20px;
        background: greenyellow;
    }

    //定义动画的流程
    .run_top_right {
        display: block;
        animation: run-right-right 3s 0.4s 1 linear, run-right-top 3s 0.4s 1 cubic-bezier(.66, .1, 1, .41);
        // animation: run-right-right 3s 0.4s 1 linear, run-right-top 3s 0.4s 1 ease-out;
        animation-fill-mode: forwards;
    }

    //向上走的动画初始及结尾值
    @keyframes run-right-top {
        0% {
            bottom: 20px;
        }

        100% {
            bottom: 400px;
        }
    }

    //向上右的动画初始及结尾值
    @keyframes run-right-right {
        0% {
            left: 20px;
            transform: scale(0.7);
        }

        100% {
            left: 300px;
            transform: scale(0.45);
        }
    }
</style>