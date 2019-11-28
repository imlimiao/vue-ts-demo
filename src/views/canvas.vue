<template>
    <div>
        <canvas id="tutorial" width="150" height="150" class="canvas">
            current stock price: $3.15 +0.15
            <img src="../../src/assets/logo.png" width="150" height="150" alt="" />
        </canvas>
    </div>

</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'

    @Component({
        name: 'canvasHTML',
    })
    export default class extends Vue {
        ctx: any;
        //加载完之后
        mounted() {
            const canvasHTML = document.getElementById('tutorial') as HTMLCanvasElement;
            if (canvasHTML.getContext) {
                this.ctx = canvasHTML.getContext('2d') as CanvasRenderingContext2D;
                console.log(this.ctx, "浏览器是支持的")
                this.ctx.fillRect(25, 25, 100, 100); //填充的矩形
                this.ctx.clearRect(45, 45, 60, 60); //清除指定矩形区域
                this.ctx.strokeRect(50, 50, 50, 50); //绘制一个矩形的边框
            } else {
                console.log("浏览器不支持")
            }
        }

    }
</script>

<style lang="scss">
    .canvas {
        border: 1px solid red;
    }
</style>