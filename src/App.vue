<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import headerBA from './components/BA3Header.vue'
import footerBA from './components/BA3Footer.vue'
import navBA from './components/BA3Nav.vue'

const ativo = ref(false)
</script>

<template>
  <headerBA />
  <navBA />
  <main>
    <div id="imagem-estatica">
      <h1>Seja Bem vindo</h1>
      <h2>Deixe rirem do seus sonhos!</h2>
    </div>
    <div id="recomendados">
      <h1>2</h1>
    </div>
  </main>
  <footerBA />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1% 0 0 4%;
}

#imagem-estatica {
  display: flex;
  flex-direction: column;
  background-color: rgba(5, 5, 139, 0.671);
  padding: 15vh 0 0 10vh;
  width: 100%;
  height: 30rem;
  font-size: 2.5vh;
}

#recomendados{
  margin-top: 5vh;
  background-color: rgb(255, 0, 0);
  height: 50vh;
}
</style>
