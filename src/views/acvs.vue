<template>
    <div class='cx-container' :style="{'--x':x}">
        <div class='cy-container' :style="{'--y':y}"></div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    @Component({
        name: 'scssMixin',
    })
    export default class extends Vue {
        x = "0px";
        y = "0px";
        //按钮移动事件
        private buttonMove(e: any) {
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;
            e.target.style.setProperty('--x', `${ x }px`);
            e.target.style.setProperty('--y', `${ y }px`);
            this.x = `${ x }px`;
            this.y = `${ y }px`;
            console.log(this.x, this.y);
        }

        mounted() {
            document.addEventListener('click', (event) => {
                //console.log("111");
                this.buttonMove(event);
            });
        }
    }
</script>

<style lang="scss">
    .cx-container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 50px;
        height: 50px;
        transition: all 2s cubic-bezier(.06, .09, .81, .78);
        transform: translateX(var(--x));
        //animation: cxMove 2s linear infinite;
    }

    .cy-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #000;
        //transition: all 2s cubic-bezier(0.14, -1.33, 1, 0.18);
        transition: all 2s cubic-bezier(.98, .03, .91, .77);
        //transition: all 2s cubic-bezier(1, -0.83, 0, 1.08);
        transform: translateY(var(--y));
        //animation: cyMove 2s cubic-bezier(.98, .03, .91, .77) infinite;
    }

    @keyframes cxMove {
        0% {}

        100% {
            transform: translateX(200px);
        }
    }

    @keyframes cyMove {
        0% {}

        100% {
            transform: scale(0.5) translateY(400px);
        }
    }
</style>