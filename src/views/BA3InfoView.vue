<script setup>
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'

const movies = ref([])
const props = defineProps({
  id: Number
})

onMounted(async () => {
  const movieDetails = await fetchMovieDetails(props.id)
  movies.value = [movieDetails]
})

const fetchMovieDetails = async (id) => {
  try {
    const response = await api.get(`movie/${id}`, {
      params: {
        language: 'pt-BR'
      }
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar os detalhes do filme:', error)
    return {}
  }
}
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
</script>

<template>
  <div v-for="movie in movies" :key="movie.id">
  <div class="conteinerInfo">

      <div class="container-movie">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" width="300"
          class="poster-movie" />
        <div class="movie-date-av">
          <p>{{ formatDate(movie.release_date) }}</p>
          <p>Avaliações de Usúario</p>
          <p>{{ movie.vote_average }}</p>
        </div>
      </div>

      <div class="info">
        <div class="titulo">
          <h1>{{ movie.title }}</h1>
        </div>
        <div class="sinopse">
          <h2>Sinopse</h2>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conteinerInfo {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 1% 0 0 5.4%;
  padding: 1% 0 1% 1%;
  background: rgb(13, 27, 172);
  background: linear-gradient(82deg, rgba(13, 27, 172, 1) 0%, rgba(71, 77, 241, 1) 47%, rgba(0, 18, 255, 0) 80%);
}

.container-movie {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.movie-date-av {
  display: flex;
  flex-direction: column;
  padding: 1% 23% 0 0;
  text-shadow: 5px 5px 10px black;
  text-align: center;
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: 1%;
  width: 100vh;
  text-shadow: 5px 5px 10px black;
  line-height: auto;  
}

.sinopse{
  max-width: 70%;
}
.poster-movie {
  border-radius: 3%;
  width: 75%;
}

</style>
