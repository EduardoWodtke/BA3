<script setup>

</script>

<template>
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
        <img src="../assets/populares.png" alt="">
      </div>
      <div>
        <img src="../assets/lancados.png" alt="">
      </div>
      <div>
        <img src="" alt="favoritos">
      </div>
      <div>
        <img src="https://o.remove.bg/downloads/ad13a6c7-ace5-45b8-aaf8-d8e40f39820c/OIP-removebg-preview.png" alt="assitri mais tarde">
      </div>
      <div>
        <img src="../assets/R.png" alt="">
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav{
  width: 4%;
  position: absolute;
  top: 0;
}
.barra{
  width: 5vh;
  border-bottom: 5px solid white;
  padding: 0.7vh;
  border-radius: 3px;
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
  height: 100%;
  overflow: hidden;
  /*border-right: 2px solid rgb(65, 65, 65);*/
 
}

#conteiner img {
  width: 6vh;
  margin: 1vh;
}
</style>