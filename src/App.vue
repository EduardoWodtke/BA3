<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import headerBA from './components/BA3Header.vue'
import footerBA from './components/BA3Footer.vue'

const ativo = ref(false)
</script>

<template>
  <headerBA/>
  <nav>
    <div id="conteiner">
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



#conteiner{
  display: flex; 
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0);
  width: 4%;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.568);
}

#conteiner img{
  width: 60px;
  margin: 10px;
}
</style>
