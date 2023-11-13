<script setup>
import headerBA from "./components/BA3Header.vue";
import footerBA from "./components/BA3Footer.vue";
import navBA from "./components/BA3Nav.vue";
</script>

<template>
  <headerBA />
  <navBA />
  <router-view />
  <footerBA />
</template>
<style scoped>
</style>
