<template>
  <div id="app">
    <NavBarComponent></NavBarComponent>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBarComponent from "./partials/NavBar";

export default {
  name: "App",
  components: {
    NavBarComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f7f7f8;
}

.container {
  padding-top: 20px;
}
</style>
