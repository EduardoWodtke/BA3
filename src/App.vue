<script setup>
import headerBA from "./components/BA3Header.vue";
import footerBA from "./components/BA3Footer.vue";
import navBA from "./components/BA3Nav.vue";

// import { ref, onMounted } from "vue";
// import api from "@/plugins/axios";

// const genres = ref([]);

// const movies = ref([]);

// const listMovies = async (genreId) => {
//   const response = await api.get("discover/movie", {
//     params: {
//       with_genres: genreId,
//       language: "pt-BR",
//     },
//   });
//   movies.value = response.data.results;
// };

// onMounted(async () => {
//   const response = await api.get("genre/movie/list?language=pt-BR");
//   genres.value = response.data.genres;
// });
</script>

<template>
  <headerBA />
  <navBA />
  <main>
    <div id="imagem-estatica">
      <h1>Seja Bem vindo</h1>
      <h2>Deixe rirem do seus sonhos!</h2>
    </div>
    <div id="populares">
      <h1>Populares</h1>
      <div class="movie-list">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            :alt="movie.title"
          />
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
  padding: 15vh 0 0 10vh;
  height: 30rem;
  font-size: 2.5vh;
  background: rgb(1, 66, 255);
  background: linear-gradient(
    278deg,
    rgba(1, 66, 255, 1) 2%,
    rgba(15, 15, 119, 0.6306897759103641) 49%,
    rgba(0, 0, 0, 1) 100%
  );
}

#populares {
  display: flex;
  flex-direction: column;
  padding: 15vh 0 0 10vh;

  height: 30rem;
  font-size: 2.5vh;
  margin-top: 20vh;
  background: rgb(255, 1, 1);
  background: linear-gradient(
    278deg,
    rgb(255, 1, 1) 2%,
    rgba(119, 15, 15, 0.631) 49%,
    rgba(0, 0, 0, 1) 100%
  );
}

.genre-item {
  background-color: #5d6424;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-self: center;
  color: #fff;
  display: flex;
  justify-content: center;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #7d8a2e;
  box-shadow: 0 0 0.5rem #5d6424;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
</style>
