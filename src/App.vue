<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/' }">Profile</router-link>
    <router-link class="link" :to="{ path: '/Contact' }">Contact</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  margin: 60px;
  text-align: center;
}
.link {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: white;
}
.router-link-exact-active {
  color: blue;
}
body {
  background-color: rgb(43, 40, 40);
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
