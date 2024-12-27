<template style="height: 100%;width: 100%">
  <div style="width: 100%;height: 100%;">
    <router-view/>
  </div>
</template>

<style>
html,body,#app {
  height: calc(100% - 8px);
  width: calc(100% - 8px);
  overflow: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>