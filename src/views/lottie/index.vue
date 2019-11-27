<template>
    <div class="thumb_animation">
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
    </div>
</template>
<script>
    
    import Lottie from './lottie.vue';
    import animationData from './lottie.json' // 引入json文件
    export default {
        props: ['learning'],
        components: {
            'lottie': Lottie
        },
        data() {
            return {
                thumb_animation: false,
                defaultOptions: {
                    animationData: animationData,
                    autoplay: true,
                    loop: true
                },
                animationSpeed: 0.1
            }
        },
        methods: {
            thumbUp() {
                this.anim.play()
            },
            handleAnimation(anim) {
                this.anim = anim;
            }
        },
        destroyed() {
            this.animation.destroy()
        }
    }
</script>