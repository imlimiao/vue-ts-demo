<template>
    <div>
        <div class="root" id="root"></div>
        <div class="root-son" id="test"></div>
        <div class="foot" id="foot"></div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    @Component({
        name: 'intersection',
    })
    export default class extends Vue {
        private useIsIntersecting() {
            let nav = document.getElementById('test') as HTMLElement;
            let reference = document.getElementById('root') as HTMLElement;
            let io = new IntersectionObserver((entries) => {
                console.log('entries---:', entries);
                entries.forEach((item) => {
                    //console.log('entries:', entries);
                    let entLength = entries.length;
                    if (entLength == 1) {
                        if (item.target.id == "root") {
                            console.log("都可视");
                            if (item.isIntersecting == false) {
                                console.log("root 不可见");
                                nav.style.position = "fixed";
                                nav.style.top = "0px";
                                //io.unobserve(item.target);
                            } else {
                                console.log("查看ID", item.target.id);
                                nav.style.position = "static";
                                //io.unobserve(item.target);
                            }
                        } else {
                            console.log(item.target.id, "应该是root-son");
                            nav.style.position = "fixed";
                            nav.style.top = "0px";
                            io.unobserve(item.target);
                        }
                    }
                });

            }, {
                threshold: [0, 0.25, 1]
            });
            io.observe(document.getElementById('test') as HTMLElement);
            io.observe(document.getElementById('root') as HTMLElement);
        }
        mounted() {
            console.log("----111intersection")
            let nav = document.getElementById('test') as HTMLElement;
            let reference = document.getElementById('root') as HTMLElement;
            reference.style.top = nav.offsetTop + "px";
            new IntersectionObserver(entries => {
                let item = entries[0];
                let top = item.boundingClientRect.top;
                let isIntersecting = item.isIntersecting;
                console.log(top, "=====", isIntersecting, item.target.id, item);
                // 当参照元素的的top值小于0，也就是在视窗的顶部的时候，开始吸顶，否则移除吸顶
                if (!isIntersecting) nav.classList.add("fixed");
                else nav.classList.remove("fixed");
            }).observe(reference);

        }
    }
</script>
<style lang="scss">
    * {
        margin: 0px;
        padding: 0px;
    }

    .root {
        width: 100%;
        height: 200px;
        background: #f22;



        &-son {
            width: 100%;
            height: 100px;
            background-color: #3f3;

            &.fixed {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
            }
        }
    }

    .foot {
        width: 100%;
        height: 1200px;
        background: black;
    }
</style>