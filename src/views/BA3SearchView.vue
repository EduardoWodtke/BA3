<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const movies = ref([]);

onMounted(async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&vote_average.gte=7`;

    try {
        const response = await axios.get(url);
        movies.value = response.data.results;
    } catch (error) {
        console.error("Erro ao fazer a requisição: ", error);
    }
});
</script>

<template>
    <main>
        <div>
            <div v-for="movie in movies" :key="movie.id">
                <h2>{{ movie.title }}</h2>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
* {
    margin: 1% 0 0 5.5%;
}

main {
    height: 50.7vh;
}
</style>
