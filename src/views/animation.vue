<template>
    <div>
        <div class="a-transform"></div>
        <div class="a-transition"></div>
        <div class="a-animation"></div>
        <div class="box">
            <div class="ball">1</div>
        </div>
        <div class="a-rec"></div>

        <div class='x-container'>
            <div class='y-container'></div>
        </div>
    </div>
</template>
<style lang="scss">
    @import "~@/assets/style/animation.scss";

    .a {
        &-rec {
            position: absolute;
            top: calc(50% - 100px);
            left: calc(50% - 100px);
            width: 200px;
            height: 200px;
            background-color: coral;
            animation: square-to-circle 3s cubic-bezier(1, 0.15, .29, 1.21) .5s alternate infinite;
        }

        &-transform {
            width: 100px;
            height: 100px;
            margin: 100px auto;
            background: #f40;
            transform: rotate(-37deg);
            /* transform: skew(7deg); */
            /* transform: scale(1.5); */
            /* transform: translate(-32px); */
            /* transform-origin: bottom; */

        }

        &-transition {
            width: 100px;
            height: 101px;
            margin-left: 50px;
            background: #f40;
            /*transform: translateX(50px);*/
            transition: margin-left 2s cubic-bezier(.25, .97, .89, .88) 1s;
        }

        &-animation {
            width: 100px;
            height: 100px;
            margin: 10px auto;
            background: #f40;
            animation: transform 2s cubic-bezier(.25, .97, .89, .88) 1s infinite normal forwards;
        }


    }

    .box {
        padding: 50px;
        width: 250px;
        height: 250px;
        background: yellow;
        border-radius: 50%;
        animation: spin 3s infinite linear;

        .ball {
            background: blue;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            animation: anti-spin 3s infinite linear;
            color: #fff;
        }
    }

    .x-container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 50px;
        height: 50px;
        animation: xMove 2s linear infinite;
    }

    .y-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #000;
        animation: yMove 2s cubic-bezier(.98, .03, .91, .77) infinite;
    }
</style>