<template>
    <div></div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import * as THREE from 'three'

    @Component({
        name: 'webThree',
    })

    export default class extends Vue {

        mounted() {
            let scene = new THREE.Scene();
            let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            let renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            camera.position.z = 5;

            var animate = function() {
                requestAnimationFrame(animate);

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();
        }

    }
</script>

<style lang="scss">

</style>