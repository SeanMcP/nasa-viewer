<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Earth />
  </div>
</template>

<script>
import Earth from "./components/Earth.vue";

export default {
  name: "app",
  components: {
    Earth
  }
};
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
