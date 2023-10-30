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
        <img src="../assets/BA3Lgo.png" alt="" />
        <button>X</button>
      </div>
      <div v-else @click="clickHamburguer()" class="barTitle">
        <div>
          <div class="barra teto"></div>
          <div class="barra"></div>
          <div class="barra baixo"></div>
        </div>
      </div>
      <div class="linha">
        <div class="info-item">
          <img src="../assets/populares.png" alt="populares" />
          <p :class="mostrarDesc ? 'show' : 'hide'">Populares</p>
        </div>

        <div class="info-item">
          <img src="../assets/coracao.png" alt="favoritos" />
          <p :class="mostrarDesc ? 'show' : 'hide'">hsshf</p>
        </div>

        <div class="info-item">
          <img src="../assets/cadeira.png" alt="lançamentos" />
          <p :class="mostrarDesc ? 'show' : 'hide'">dbhfh</p>
        </div>

        <div class="info-item">
          <img src="../assets/foguete.png" alt="futuros-lançamentos" />
        </div>

        <div class="info-item">
          <img src="../assets/relogio.png" alt="assitri mais tarde" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.barTitle {
  background-color: red;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
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
}

.desc {
  display: flex;
  background: rgb(17, 17, 17);
  background: linear-gradient(180deg,
      rgba(17, 17, 17, 1) 49%,
      rgba(0, 0, 0, 0.6306897759103641) 100%);
  flex-direction: column;
  position: fixed;
  left: 0vh;
  top: 0vh;
  width: 30%;
  height: 10%;
  padding: 5vh;
  align-content: space-around;
}

nav {
  width: 4%;
  position: absolute;
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
  background-color: rgb(0, 0, 0);
  height: 100%;
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

.linha {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: left;
}
</style>
