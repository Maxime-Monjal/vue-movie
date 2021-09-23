<template>
  <div id="app">
    <Header />
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
import NavBar from "../src/components/NavBar.vue";
export default {
  components: { Header, NavBar },
};
</script>

<style></style>
