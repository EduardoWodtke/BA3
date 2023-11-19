<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router'
import api from '@/plugins/axios'

const route = useRoute()

const movies = ref([]);


async function buscarFilmes(search) {    
    const url = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=fakse&language=pt-BR&page=1&with_genres=16&vote_average.gte=7_`;
    try {
        const response = await api.get(url);
        console.log(response)
        movies.value = response.data.results;
    } catch (error) {
        console.error("Erro ao fazer a requisição: ", error);
    }
}

onMounted(() => {
    const {search} = route.query
    buscarFilmes(search)
});
onUpdated(() => {
    const {search} = route.query
    buscarFilmes(search)
});


</script>

<template>
    <main>
        <div class="info-filmes">
            <div class="cartazDeMovie" v-for="movie in movies" :key="movie.id">
                <img class="poster-filme" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
                <div class="middle">
                    <div class="text">{{ movie.title }}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.info-filmes{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.poster-filme:hover {
    opacity: 0.3;
    transition: 0.5s ease;
    backface-visibility: hidden;
}

.poster-filme {
    margin: 0 .4vw;
    height: 365px;
    display: block;
    opacity: 1;
}

.cartazDeMovie:hover .middle {
  opacity: 1;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.cartazDeMovie:hover .poster-filme {
  opacity: 0.3;
}
.text {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  font-size: 16px;
  padding: 16px 32px;
}

* {
    margin: 1% 0 0 5.5%;
}

</style>
