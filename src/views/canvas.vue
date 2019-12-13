<template>
    <div>
        <canvas id="tutorial" width="350" height="700" class="canvas">
            current stock price: $3.15 +0.15
            <img src="../../src/assets/logo.png" width="150" height="150" alt="" />
        </canvas>
        <img src="https://img.58cdn.com.cn/chinahr/img/og-im.png" id="source" width="350" height="150" />

    </div>

</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    let angle = 0;
    let hsl = 0;
    @Component({
        name: 'canvasHTML',
    })
    export default class extends Vue {
        ctx: any;
        //method 
        private paint(ctx: any) {
            let W = window.innerWidth;
            let H = window.innerHeight;
            angle += 0.03;
            hsl <= 360 ? hsl += 0.25 : hsl = 0;
            var s = -Math.sin(angle);
            var c = Math.cos(angle);
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.fillStyle = 'hsla(' + hsl + ', 100%, 50%, 1)';
            //ctx.arc(W / 2, H / 2, 25, 0, Math.PI);
            ctx.arc(W / 2 + (s * 75), H / 2 + (c * 75), 10, 0, 2 * Math.PI, true);
            console.log(W / 2 + (s * 75), H / 2 + (c * 75), "---长宽----")
            ctx.fill();
            ctx.restore();
        }

        private draw(ctx: any) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    ctx.save();
                    ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
                    ctx.translate(10 + j * 50, 10 + i * 50); // 使用这个来调整圆的位置
                    ctx.fillRect(0, 0, 25, 25);
                    ctx.restore();
                }
            }
        }

        private rotate(ctx: any) {
            ctx.translate(275, 75);
            for (var i = 1; i < 6; i++) { // Loop through rings (from inside to out)
                ctx.save();
                ctx.fillStyle = 'rgb(' + (51 * i) + ',' + (255 - 51 * i) + ',255)';

                for (var j = 0; j < i * 6; j++) { // draw individual dots
                    ctx.rotate(Math.PI * 2 / (i * 6));
                    ctx.beginPath();
                    ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
                    ctx.fill();
                }

                ctx.restore();
            }
        }

        //加载完之后
        mounted() {
            const canvasHTML = document.getElementById('tutorial') as HTMLCanvasElement;
            if (canvasHTML.getContext) {
                const ctx = canvasHTML.getContext('2d') as CanvasRenderingContext2D;
                console.log(this.ctx, "浏览器是支持的")
                // 描边三角形
                ctx.beginPath();
                ctx.moveTo(125, 250);
                ctx.lineTo(125, 125);
                ctx.lineTo(25, 250);
                ctx.closePath();
                ctx.stroke();

                // 绘制圆形
                ctx.save();
                ctx.beginPath();
                ctx.translate(175, 0);
                ctx.arc(70, 300, 50, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.restore();
                // 2次贝塞尔q曲线

                ctx.beginPath();
                ctx.moveTo(75, 25);
                ctx.quadraticCurveTo(25, 25, 25, 62.5);
                ctx.quadraticCurveTo(25, 100, 50, 100);
                ctx.quadraticCurveTo(50, 120, 30, 125);
                ctx.quadraticCurveTo(60, 120, 65, 100);
                ctx.quadraticCurveTo(125, 100, 125, 62.5);
                ctx.quadraticCurveTo(125, 25, 75, 25);
                ctx.stroke();

                //矩形
                ctx.beginPath();
                ctx.fillStyle = "#FFA500";
                ctx.globalAlpha = 0.2;
                ctx.fillRect(25, 350, 100, 100); //填充的矩形
                ctx.clearRect(45, 370, 60, 60); //清除指定矩形区域
                ctx.strokeStyle = "red";
                ctx.strokeRect(50, 375, 50, 50); //绘制一个矩形的边框

                //三次贝塞尔曲线
                ctx.beginPath();
                ctx.fillStyle = "blue";
                ctx.moveTo(175, 40);
                ctx.bezierCurveTo(175, 37, 70, 25, 50, 25);
                ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                ctx.bezierCurveTo(20, 80, 40, 102, 175, 120);
                ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                ctx.bezierCurveTo(85, 25, 175, 37, 175, 40);
                ctx.fill();
                ctx.globalAlpha = 0.8;
                ctx.fillText("Hello world", 10, 350);
                ctx.font = "48px serif";
                ctx.strokeText("Hello world", 10, 450);

                // canvas image share
                let canvasImg = new Image();
                canvasImg.onload = function() {
                    // 执行drawImage语句
                    ctx.drawImage(canvasImg, 10, 500, 100, 100);
                    ctx.drawImage(document.getElementById('frame') as HTMLImageElement, 0, 0);
                    console.log("load over");
                }
                canvasImg.src = "https://img.58cdn.com.cn/chinahr/img/og-im.png";

                //cancas 简单动画
                // setInterval(() => {
                //     console.log("setInterval");
                //     this.paint(ctx)
                // }, 5)

                ctx.drawImage(document.getElementById('source') as HTMLImageElement,
                    33, 71, 104, 124, 21, 20, 87, 104);

                //translate  
                this.draw(ctx);

                // rotate
                this.rotate(ctx);



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