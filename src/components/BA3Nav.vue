<script setup>
import { ref } from 'vue'

const mostrarDesc = ref(false)

const clickHamburguer = () => {
  mostrarDesc.value = !mostrarDesc.value
}


</script>

<template>
  <nav>
    <div id="conteiner" :class="mostrarDesc ? 'large' : 'small'">
      <div v-if="mostrarDesc" @click="clickHamburguer()" class="barTitle">
        <Router-Link to="/">
          <img src="../assets/BA3Lgo.png" alt="" />
        </Router-Link>
        <button class="butao">X</button>
      </div>
      <div v-else @click="clickHamburguer()" class="barTitle">
        <div>
          <div class="barra teto"></div>
          <div class="barra"></div>
          <div class="barra baixo"></div>
        </div>
      </div>
      <div class="coluna">
        <div class="info-item">
          <img src="../assets/populares.png" alt="populares" />
          <p :class="mostrarDesc ? 'show' : 'hide'">Populares</p>
        </div>

        <div class="info-item">
          <img src="../assets/coracao.png" alt="favoritos" />
          <p :class="mostrarDesc ? 'show' : 'hide'">Favoritos</p>
        </div>

        <div class="info-item">
          <img src="../assets/cadeira.png" alt="lançamentos" />
          <p :class="mostrarDesc ? 'show'
            : 'hide'">Lançamentos</p>
        </div>

        <div class="info-item">
          <img src="../assets/foguete.png" alt="futuros-lançamentos" />
          <p :class="mostrarDesc ? 'show' : 'hide'">Futuros Lançamentos</p>
        </div>

        <div class="info-item">
          <img src="../assets/relogio.png" alt="assitri mais tarde" />
          <p :class="mostrarDesc ? 'show' : 'hide'">Assitir mais tarde</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.barTitle img {
  width: 10vh !important;
  margin-top: 5px;
}

.info-item p {
  font-size: 20px;
}

.barTitle {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.butao {
  width: 100px;
  background: none;
  font-size: 50px;
  color: white;
  border: none;
  cursor: pointer;
}

.show {
  display: block;
}

.hide {
  display: none;
}

.large {
  width: 300px;
}

.small {
  width: 100px;
}

.info-item {
  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 0 10px 70px 0;
}

nav {
  width: 4%;
  position: fixed;
  top: 0;
}

.barra {
  width: 5vh;
  border-bottom: 5px solid white;
  padding: 0.7vh;
  border-radius: 3px;

}

.barra-lateral {
  cursor: pointer;
}

.teto {
  margin-top: 1.5vh;
}

.baixo {
  margin-bottom: 6vh;
}

#conteiner {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  background: rgb(34, 35, 40);
  background: linear-gradient(180deg, rgba(34, 35, 40, 1) 0%, rgba(42, 6, 68, 1) 28%, rgba(46, 0, 115, 1) 52%, rgba(14, 8, 159, 1) 75%, rgba(0, 18, 255, 0) 100%);
  height: 100vh;
  overflow: hidden;
}

#conteiner img {

  width: 4vh;
}

.x {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 6px;
  cursor: pointer;
}

.x:before,
.x:after {
  content: '';
  position: absolute;
  width: 80px;
  height: 10px;
  background-color: white;
  border-radius: 2px;
}

.x:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 2px;
}

.x:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  right: 2px;
}

.coluna {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: left;
  padding: 10px;
}
</style>
