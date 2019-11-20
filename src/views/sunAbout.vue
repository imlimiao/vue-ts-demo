<template>
    <div class="Modal" v-if="show">
        <div class="box clearfix">
            <div class="box-main">
                <div class="box-txt">{{text}}</div>
                <div class="box-btons">
                    <div class="box-btons-right " @click="cancel">{{cancelText}}</div>
                    <div class="box-btons-left zp-border-top" @click="confirm">{{confirmText}}</div>
                </div>
            </div>
            <div class="layoutfix"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
    import { mixins } from 'vue-class-component'
    import demoMixins from './mixins/demoMixins'

    @Component({
        name: 'ModalComponrnt',
    })
    export default class extends mixins(demoMixins) {
        // 子组件的属性
        @Prop({ default: false }) private value!: boolean
        @Prop({ default: '提示' }) private title!: string
        @Prop({ default: '' }) private text!: string
        @Prop({ default: '确定' }) private confirmText!: string
        @Prop({ type: String, default: '取消' }) private cancelText!: string

        // 子组件的数据data
        private show = this.value;
        // 方法
        @Emit('confirm')
        private confirm() {
            console.log(this.minxMsg, "混合哈哈");
            //this.$emit("confirm");
        }
        @Emit('cancel')
        private cancel() {
            this.minxFun("什么亲戚啊");
            //this.$emit("cancel");
        }

        @Watch('value')
        private onValueChange(value: boolean) {
            console.log("watch===");
            this.show = value;
        }

    }
</script>

<style scoped lang='scss'>
    .layoutfix {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background: rgba(0, 0, 0, 0.8);
    }

    .box-main {
        width: 315px;
        height: 135px;
        background: #fff;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.10);
        border-radius: 8px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        z-index: 999;
    }

    .box-txt {
        font-size: 16px;
        color: #333333;
        width: 315px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        box-sizing: border-box;
    }

    .box-btons {
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .box-btons-left {
        width: 50%;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        color: #333333;
        text-align: center;
    }

    .box-btons-left::before {
        border-bottom-left-radius: 8px;
    }

    .box-btons-right {
        width: 50%;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
        background: #FF5A5A;
        border-bottom-left-radius: 8px;
    }

    .zp-border-top {
        position: relative;
    }

    .zp-border-top:before {
        top: 0;
        transform-origin: 0 0;
    }

    .zp-border-top:before {
        position: absolute;
        content: '';
        width: 200%;
        border-top: 1px solid #DDDDDD;
        transform: scale(.5);
        display: block;
        left: 0;
    }
</style>