<script setup>
import { ref, onMounted } from "vue";
import api from "@/plugins/axios";
import ListaFilmes from "../components/BA3ListaFilmes.vue";

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
  <main>
    <div class="banner">
      <div class="banner-text">
        <h1>Seja Bem vindos,</h1>
        <h2>Deixem rirem dos seus sonhos</h2>
      </div>
    </div>
    <ListaFilmes class="info-filmes" titulo="Populares" subtitulo="Os melhores" :movies="movies" />
    <ListaFilmes titulo="Recentes" subtitulo="Filmes atuais"  :movies="movies2" />
    <ListaFilmes titulo="Futuros laçamentos" subtitulo="Embreve em sua tela"  :movies="movies3" />
    <ListaFilmes titulo="Romance" subtitulo="Paixão no ar"  :movies="movies4" />
  </main>
</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Anton&display=swap');
  
* {
  padding: 0;
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1% 0 0 5.5%;
}

.banner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32rem;
  background-image: url("../assets/gon.jpg") ;
  background-position: center;
} 

.banner-text{
  text-align: center;
  color:rgb(255, 254, 254); 
  font-weight: 900px;
  font-style: italic;
  font-size: 4vh;
  text-shadow: 6px 3px 5px black;
  font-family: "https://fonts.googleapis.com/css2?family=Agbalumo&family=Anton&display=swap";
  }
</style>
