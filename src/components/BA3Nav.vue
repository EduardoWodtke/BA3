<script setup>
import { ref } from 'vue'

const mostrarDesc = ref(false)

const clickHamburguer = () => {
  mostrarDesc.value = !mostrarDesc.value
}

// const clickHamburguerF = () => {
//   mostrarDesc.value = !mostrarDesc.value
// }
</script>

<template>
  <nav>
    <div id="conteiner">
      <button @click="clickHamburguer()" class="barra-lateral">
        <div class="barra teto"></div>
        <div class="barra"></div>
        <div class="barra baixo"></div>
      </button>
      <div>
        <img src="../assets/populares.png" alt="populares" />
      </div>
      <div>
        <img src="../assets/coracao.png" alt="favoritos" />
      </div>
      <div>
        <img src="../assets/cadeira.png" alt="lançamentos" />
      </div>
      <div>
        <img src="../assets/foguete.png" alt="futuros-lançamentos" />
      </div>
      <div>
        <img src="../assets/relogio.png" alt="assitri mais tarde" />
      </div>
      <div class="desc" v-if="mostrarDesc">
        <div @click="clickHamburguer()">
          <div class="x"></div>
        </div>
        <div>
          
          <p>aaaaaaa</p>
        </div>
        <div>
        <img src="../assets/coracao.png" alt="favoritos" />
      </div>
      <div>
        <img src="../assets/cadeira.png" alt="lançamentos" />
      </div>
      <div>
        <img src="../assets/foguete.png" alt="futuros-lançamentos" />
      </div>
      <div>
        <img src="../assets/relogio.png" alt="assitri mais tarde" />
      </div>
     
      </div>
    </div>
  </nav>
</template>

<style scoped>
button {
  background-color: black;
  border: none;
}

.desc {
  display: flex;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 1) 49%,
    rgba(0, 0, 0, 0.6306897759103641) 100%
  );
  flex-direction: column;
  position: fixed;
  left: 0vh;
  top: 0vh;
  width: 30%;
  height: 100%;
  /* flex-direction: column; */
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
  align-items: center;
  background-color: rgb(0, 0, 0);
  height: 100%;
  overflow: hidden;
  /*border-right: 2px solid rgb(65, 65, 65);*/
}

#conteiner img {
  margin: 2.5vh;
  width: 4vh;
}

.x{
    width:40px;
    height:40px;  
    position:relative;
    left: 35vh;
    border-radius:6px;
    cursor: pointer;
}

.x:before, .x:after{
    content:'';
    position:absolute;
    width:36px;
    height:4px;
    background-color:white;
    border-radius:2px;
    top:0vh;
    
}

.x:before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
    left:2px;
}
.x:after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
    right:2px;
}
</style>
