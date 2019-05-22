<template>
  <div id="app">
    <div>Vue App</div>
    <VueComponent/>
  </div>
</template>

<script>
import VueComponent from "./components/VueComponent.vue";

export default {
  name: "app",
  components: {
    VueComponent
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 40px;
  background-color: rgb(220, 223, 219);
}

.vue-html-text {
  font-size: 2rem;
  margin-bottom: 20px;
}

#app {
  display: block;
  height: 500px;
  width: 500px;
  background-color: #2c3e50;
  padding: 20px;
  font-size: 2rem;
  color: white;
  border: solid 2px darkgray;
}
</style>
