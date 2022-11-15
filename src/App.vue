<template>
  <div>
    <mobile-menu></mobile-menu>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-page></footer-page>
    <pre-loader></pre-loader>
  </div>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";
import MobileMenu from "./components/MobileMenu.vue";
import NavBar from "./components/NavBar.vue";
import PreLoader from "./components/PreLoader.vue";

import custom from "./js/custom.js";
import navbar from "./js/navbar.js";

export default {
  name: "App",
  components: { NavBar, PreLoader, MobileMenu, FooterPage },
  data() {
    return {};
  },
  mounted() {
    custom.init();
    navbar.init();
  },
};
</script>

<style></style>
