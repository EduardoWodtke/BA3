<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import headerBA from './components/BA3Header.vue'
import footerBA from './components/BA3Footer.vue'

const ativo = ref(false)
</script>

<template>
  <headerBA />
  <nav>
    <div id="conteiner">
      <div class="barra-lateral">
        <div class="barra teto">

        </div>
        <div class="barra">

        </div>
        <div class="barra baixo">

        </div>
      </div>
      <div>
        <img src="./assets/populares.png" alt="">
      </div>
      <div>
        <img src="./assets/lancados.png" alt="">
      </div>
    </div>
  </nav>
  <main>
    <h1>
    </h1>
  </main>
  <footerBA />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.barra{
  width: 5vh;
  border-bottom: 4px solid white;
  padding: 0.7vh;
} 

.teto{
  margin-top: 1.5vh;
}

.baixo{
  margin-bottom: 5vh;
}

#conteiner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0);
  width: 4%;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid rgb(65, 65, 65);
}

#conteiner img {
  width: 6vh;
  margin: 1vh;
}
</style>
