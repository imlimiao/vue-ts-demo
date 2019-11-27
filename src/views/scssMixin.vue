<template>
    <div class="head price" :data-txt="bgColor" @click="changeSkin">
        <div class="head-top"> 头部
            <div class="linka"> 模仿链接</div>
            <div class="linb"> 模仿链接B </div>
        </div>
        <div class="head-content"> 内容区域
            <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
            <!-- 即事件不是从内部元素触发的 .只有点击自己的时候才触发-->
            <button class="button" @mousemove.self="buttonMove($event)">
                <span>我来试试这个！</span>
            </button>

        </div>
        <div class="head-foot"> 尾部</div>
        
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
    import { mixins } from 'vue-class-component'
    //import demoMixins from './mixins/demoMixins'
    @Component({
        name: 'scssMixin',
    })
    export default class extends Vue {

        bgColor: string = "blue";
        //按钮移动事件
        private buttonMove(e: any) {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop
            e.target.style.setProperty('--x', `${ x }px`)
            e.target.style.setProperty('--y', `${ y }px`)
        }

        private changeSkin() {
            //this.$refs.bgDom.attributes('data-txt', 'green');
            this.bgColor = this.bgColor == "blue" ? "green" : "blue";
        }


    }
</script>
<style lang="scss">
    @import "~@/assets/style/sunAbout.scss";
</style>