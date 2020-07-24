<template>
  <div id="app" style="background-color: rgba(235, 235, 235, 0.08)">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <p>这是 app.vue 界面</p> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
