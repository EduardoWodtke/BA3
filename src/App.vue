<script setup>
import headerBA from "./components/BA3Header.vue";
import footerBA from "./components/BA3Footer.vue";
import navBA from "./components/BA3Nav.vue";
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
import ListaFilmes from "./components/ListaFilmes.vue";

const movies = ref([])
const movies2 = ref([])
const movies3 = ref([])
const movies4 = ref([])

onMounted(async () => {
  let response = await api.get('https://api.themoviedb.org/3/discover/movie?language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&vote_average.gte=7');
  movies.value = response.data.results
  
  response = await api.get('https://api.themoviedb.org/3/discover/movie?language=pt-BR&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=16&vote_average.gte=7');
  movies2.value = response.data.results

  response = await api.get('https://api.themoviedb.org/3/discover/movie?language=pt-BR&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&with_genres=16&primary_release_date.gte=2023-11-09');
  movies3.value = response.data.results
  
  response = await api.get('https://api.themoviedb.org/3/discover/movie?language=pt-BR&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=16,10749&vote_average.gte=7');
  movies4.value = response.data.results
})
</script>

<template>
  <headerBA />
  <navBA />
  <main>
    <div id="imagem-estatica">
      <h1>Seja Bem vindo</h1>
      <h2>Deixe rirem dos seus sonhos!</h2>
    </div>
    <ListaFilmes titulo="Populares" subtitulo="Os melhores" :movies="movies" />
    <ListaFilmes titulo="Recentes" subtitulo="Filmes atuais"  :movies="movies2" />
    <ListaFilmes titulo="Futuros laçamentos" subtitulo="Embreve em sua tela"  :movies="movies3" />
    <ListaFilmes titulo="Romance" subtitulo="Paixão no ar"  :movies="movies4" />

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
  margin: 1% 0 0 5.5%;
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

</style>
