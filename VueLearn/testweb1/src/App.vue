<template>
  <div id="app">
<!--    初始页面不显示这些 -->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg=" HelloWorld.vue Welcome to Your Vue.js App"/>-->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
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
