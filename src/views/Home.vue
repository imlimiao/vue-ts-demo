<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="我在测试---HelloWorld" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";

    export default {
        name: "home",
        components: {
            HelloWorld
        }
    };
</script>