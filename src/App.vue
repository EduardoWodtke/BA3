<script setup>
import headerBA from "./components/BA3Header.vue";
import footerBA from "./components/BA3Footer.vue";
import navBA from "./components/BA3Nav.vue";
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";

const movies = ref([])

onMounted(async () => {
  const response = await api.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
  movies.value = response.data.results
})
</script>

<template>
  <headerBA />
  <navBA />
  <main>
    <div id="imagem-estatica">
      <h1>Seja Bem vindo</h1>
      <h2>Deixe rirem do seus sonhos!</h2>
    </div>
    <div class="Populares">
      <h1>Populares,</h1>
      <h2>Apenas os melhores!</h2>
      <div id="popularesCartaz">
        <div v-for="movie in movies" :key="movie.id" class="cartazDeMovie">
          <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
          <p class="tituloDeMovie">{{ movie.title }}</p>
        </div>
      </div>
    </div>
  </main>
  <footerBA />
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  /* overflow: hidden; */
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
  padding: 15vh 0 0 10vh;
  height: 30rem;
  font-size: 2.5vh;
  margin-bottom: 6vh;
  background: rgb(1, 66, 255);
  background: linear-gradient(278deg,
      rgba(1, 66, 255, 1) 2%,
      rgba(15, 15, 119, 0.6306897759103641) 49%,
      rgba(0, 0, 0, 1) 100%);
}

#popularesCartaz {
  display: flex;
  flex-direction: row;
  height: 30rem;
  background: rgb(255, 0, 0);
  background: linear-gradient(278deg,
      rgb(255, 1, 1) 2%,
      rgba(119, 15, 15, 0.631) 49%,
      rgba(0, 0, 0, 1) 100%);
  overflow-x: scroll;  
  padding: 2vh;
}

#popularesCartaz::-webkit-scrollbar {
  width: .5em;
  height: .4em;
}
 
#popularesCartaz::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
#popularesCartaz::-webkit-scrollbar-thumb {
  background-color: rgb(0, 7, 105);
  outline: 1px solid rgb(54, 54, 61);
}

.cartazDeMovie img {
  margin: 0 .4vw;  
  height: 380px;

}

.Populares h1{
  font-size: 45px;
}

.Populares h2{
  font-size: 30px;
  padding: 1vh;
}

.Populares p {
  font-size: 20px;
  text-align: center;
}
</style>
