<template>
    <div>
        <div class="clip-path1"></div>
        <div class="clip-path2"></div>
        <div class="clip-path3"></div>
        <div class="clip-path4"></div>
        <div class="clip-path5"></div>
        <hgroup class="triangle2rect">
            <div class="a"></div>
            <div class="b"></div>
            <div class="c"></div>
            <div class="d"></div>
        </hgroup>

    </div>
</template>

<style lang="scss">
    /**
     clip-path 属性的应用
    */
    @import "~@/assets/style/clipPath.scss";

    .clip {
        &-path1 {
            width: 180px;
            height: 100px;
            background: red;
            border-radius: 50%;
            clip-path: polygon(100% 100%, 0 100%, 50% 0);
            border-bottom: 10px solid green;
        }

        &-path2 {
            width: 100px;
            height: 100px;
            background: red;
            clip-path: polygon(0 0, 0 100%, 100% 50%);

        }

        &-path3 {
            @extend .clip-path2;
            clip-path: polygon(100% 50%, 0 100%, 50% 50%, 0 0);
        }

        &-path4 {
            @extend .clip-path1;
            clip-path: polygon(50% 100%, 100% 10%, 0 10%);
        }

        &-path5 {
            @extend .clip-path2;
            border-radius: 50%;
            background: #ffa700;
            clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%, 0% 25%, 50% 50%, 0% 80%);
            animation: apath 1s infinite alternate;
        }



        @keyframes apath {

            0%,
            10% {
                clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%, 0% 25%, 50% 50%, 0% 80%)
            }

            90%,
            100% {
                clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%, 0% 50%, 60% 50%, 0% 60%)
            }
        }

    }
</style>