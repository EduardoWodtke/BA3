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
  <navBA/>
  <main>
    
    <div id="main">
      <div id="imagem-estatica">
        <h1>1</h1>
        <p>2</p>
      </div>
    </div>
  </main>
  <footerBA />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#main{
  display: flex;
  justify-content: space-around;
} 

#imagem-estatica{
  display: flex;
  background-color: blue;
  width: 20vh;
  
}

</style>
