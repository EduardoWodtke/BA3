<script setup>
import headerBA from "./components/BA3Header.vue";
import footerBA from "./components/BA3Footer.vue";
import navBA from "./components/BA3Nav.vue";
import loading from "./components/BA3Loading.vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showPreloader = ref(false);

router.beforeEach(() => {
  showPreloader.value = true; // Exibir o indicador de carregamento antes da mudança de página
});

router.afterEach(() => {
  setTimeout(() => {
    showPreloader.value = false; // Ocultar o indicador de carregamento após a transição de página
  }, 1500); // Defina um tempo limite para garantir que o indicador seja visível por um curto período
});

</script>

<template>
  <headerBA />
  <navBA />  
  <router-view />
  <loading v-if="showPreloader" />
  <footerBA />
</template>
<style scoped>
</style>
