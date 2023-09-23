<script setup>
</script>

<template>
  <header @submit.prevent="ativo = !ativo">
    <div id="titulo">
      <img src="../assets/BA3Lgo.png" alt="" />
    </div>
    <div id="barra-nav">
      <input type="text" v-model="nome" id="barra-pesquisa" placeholder="Pesquisar" />
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="" />
      </button>
      <div id="topicos" v-if="ativo">
        <div id="categorias"></div>
        <div id="sugestoes"></div>
      </div>
    </div>
    <div id="login">
      <RouterLink to="/">
        <img src="../assets/perfil.jpg" alt="" />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  margin-left: 75px;
}

#titulo img {
  margin: 0px 42vh 0px 3vh;
  width: 100px;
}

#login img {
  width: 70px;
  border-radius: 60px;
  border: 3px solid rgb(25, 0, 255);
  margin-right: 30px;
}

#login {
  margin-top: 20px;
}

#barra-nav {
  display: flex;
  justify-content: flex-end;
  margin-right: 42vh;
}

#barra-nav img {
  width: 30px;
}

#barra-nav button {
  background-color: rgb(25, 0, 255);
  text-decoration: none;
  border-radius: 0px 30px 30px 0px;
  border: none;
  width: 43px;
  height: 45px;
  margin-top: 20px;
  cursor: pointer;
}

#barra-nav button:hover {
  background-color: rgb(49, 0, 139);
  transition: 2s;
}

#barra-pesquisa {
  width: 600px;
  height: 45px;
  border-radius: 30px 0px 0px 30px;
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  font-size: 22px;
  padding: 0px 15px;
  border: 2px solid white;
}
</style>
