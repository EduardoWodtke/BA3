<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import debounce from 'lodash.debounce'


const search = ref('')

const router = useRouter()

watch(
  search,
  debounce(() => {
    router.push({ name: 'search', query: { search: search.value } })
  }, 600)
)
</script>

<template>
  <header>
    <div id="titulo">
      <Router-Link to="/">
        <img src="../assets/BA3Lgo.png" alt="" />
      </Router-Link>
    </div>
    <div id="barra-nav" style="display: flex; justify-content: space-between">
      <input type="text" v-model="search" id="barra-pesquisa" placeholder="Pesquisar" />
      <!-- <button @keypress.enter="handleKeyPress"> -->
      <Router-Link :to="{ name: 'search', query: { search } }" class="botaoSearch">
        <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="" />
      </Router-Link>
      <!-- </button> -->
    </div>
    <div id="login">
      <router-link to="login">
          <p class="botao">login</p>
      </router-link>
      <router-link to="sign">
        <p class="botao">sign</p>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.botao {
  text-align: center;
  background-color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: white;
  text-shadow: 3px 1px 4px black;
  box-shadow: 7px 7px 20px blue;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  background: blue;
  margin: 20px;
}

.botao:hover{
  background: rgb(17, 17, 143);
  transition: 1s;
}

#sugestoes {
  padding: 5px 10px 10px 10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);
  position: sticky;
  top: 0%;
  margin: 0 1% 0 5.5%;
}

#titulo img {
  width: 100px;
  cursor: pointer;
}

#login img {
  width: 70px;
  border-radius: 60px;
  border: 3px solid rgb(25, 0, 255);
}

#login {
  display: flex;
  padding: 10px;
}

#barra-nav img {
  width: 30px;
}

.botaoSearch {
  background-color: rgb(25, 0, 255);
  text-decoration: none;
  border-radius: 0px 30px 30px 0px;
  border: none;
  width: 43px;
  height: 45px;
  cursor: pointer;
  padding: 5px 0 0 5px;
}

#barra-nav button:hover {
  background-color: rgb(0, 119, 255);
  transition: 2s;
}

#barra-pesquisa {
  width: 600px;
  height: 45px;
  border-radius: 30px 0px 0px 30px;
  background-color: rgb(255, 255, 255);
  font-size: 22px;
  padding: 0px 15px;
}
</style>
