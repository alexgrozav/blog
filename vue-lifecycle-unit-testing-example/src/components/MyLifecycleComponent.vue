<template>
    <div>Hello lifecycle component!</div>
</template>

<script>
    export default {
        name: 'LifecycleComponent',
        methods: {
            initialize() {
                console.log('initialized');
            }
        },
        mounted() {
            this.initialize();
        }
    }
</script>
