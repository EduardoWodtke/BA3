<script setup>
import headerBA from './components/BA3Header.vue'
import footerBA from './components/BA3Footer.vue'
import navBA from './components/BA3Nav.vue'

import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])

const movies = ref([])

const listMovies = async (genreId) => {
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  })
  movies.value = response.data.results
}

onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR')
  genres.value = response.data.genres
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
    <div id="recomendados">
      <h1>Populares</h1>
      <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      <div class="movie-details">
        <p class="movie-title">{{ movie.title }}</p>
        <p class="movie-release-date">{{ movie.release_date }}</p>
        <p class="movie-genres">{{ movie.genre_ids }}</p>
      </div>
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
  background-color: rgba(5, 5, 139, 0.671);
  padding: 15vh 0 0 10vh;
  width: 100%;
  height: 30rem;
  font-size: 2.5vh;
}

#recomendados{
  margin-top: 5vh;
  background-color: rgb(255, 0, 0);
  height: 50vh;
}
</style>
