<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <my-lifecycle-component />
    </div>
</template>

<script>
import MyLifecycleComponent from '@/components/MyLifecycleComponent.vue';

export default {
    name: 'App',
    components: {
        MyLifecycleComponent
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
