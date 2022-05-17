<template>
  <nav id="nav">
    <NavbarComp />
    <br /><br />
    <router-view />
    <br /><br /><br />
    <FooterComp />
  </nav>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "app",
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style>
#app {
  font-family: cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app a.router-link-exact-active {
  color: #ff7700;
}
</style>
