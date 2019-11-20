<template>
    <div class="about">
        <h1 @click="showModla">This is an about page</h1>
        <h1 :class="2|resolveIconType"> 添加过滤器</h1>
        <modal v-model="isModal" text="内容未发布 是否退出编辑？111111" confirmText="确定退出1" cancelText="取2消" @confirm='confirm' @cancel="cancel" />
    </div>

</template>
<script lang="ts">
    import { Component, Prop, Vue, Emit } from "vue-property-decorator";
    import modal from './sunAbout.vue';
    import { resolveIconType } from './filter/filterData'

    @Component({
        name: 'About',
        components: {
            modal
        },
        filters: {
            resolveIconType,
        }
    })
    export default class extends Vue {
        private isModal: boolean = false;
        
        private confirm() {
            this.isModal = false;
            console.log("我点击的是确认");
        }
      
        private cancel() {
            this.isModal = false;
            this.canlesun();
            console.log("我点击的是取消");
        }

        private canlesun() {
            console.log("我是儿子方法");
        }

        showModla() {
            console.log("点击急急急");
            this.isModal = !this.isModal
        }

    }
</script>
<style lang="scss">
    .about {
        color: red;
    }
</style>