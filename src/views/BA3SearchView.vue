<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router'
import api from '@/plugins/axios'

const route = useRoute()

const movies = ref([]);


async function buscarFilmes(search) {    
    const url = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=pt-BR&page=1&with_genres=16&vote_average.gte=7_`;
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
            <div  v-for="movie in movies" :key="movie.id">
                <img class="poster" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
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
.poster{
    margin: 0 .4vw;
    height: 350px;
}
* {
    margin: 1% 0 0 5.5%;
}

</style>
