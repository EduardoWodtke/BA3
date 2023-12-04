<script setup>
import { ref, onMounted, onUpdated, defineProps } from 'vue';
import { useRoute } from 'vue-router'
import api from '@/plugins/axios'

const route = useRoute()
const movies = ref([]);
const semFilme = ref('Filme não encontrado');

// const getShortText = overview => {
    // if (overview.length > maxLength) {
        // return `${overview.substring(0, maxLength)}...`;
    // } else if (overview.length === 0) {
        // return semFilme.value;
    // } else {
        // return overview;
    // }
// };

async function buscarFilmes(search) {
    const url = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=pt-BR&page=1`;
    try {
        const response = await api.get(url);
        console.log(response)
        movies.value = response.data.results.filter(movie => movie.genre_ids.includes(16));
    } catch (error) {
        return semFilme;
    }
}

onMounted(() => {
    const { search } = route.query
    buscarFilmes(search)
});
onUpdated(() => {
    const { search } = route.query
    buscarFilmes(search)
});

// const props = defineProps(['movies', 'titulo', 'subtitulo']);
const maxLength = 200;
const mensagemNada = ref('Mais informações em breve...');

const getShortText = overview => {
    if (overview.length > maxLength) {
        return `${overview.substring(0, maxLength)}...`;
    } else if (overview.length === 0) {
        return mensagemNada.value;
    } else {
        return overview;
    }
};

</script>

<template>
    <main>
        <div class="semFilme" v-if="movies.length == 0">
            <h1>
                Filme não encontrado
            </h1>
            <h2>
                tente outro nome
            </h2>
            <img class="mensagemNaoEncontrado" src="../assets/patoDonald.png" alt="">
        </div>
        <div v-else class="filmesCartaz">
            <div class="cartazDeMovie" v-for="movie in movies" :key="movie.id">            
                <router-link :to="`/info/${movie.id}`"> <img class="poster-filme"
                        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
                        @click="openMovie(movie.id)" /></router-link>
                <div class="content">
                    <router-link :to="`/info/${movie.id}`">
                        <h3>{{ movie.title }}</h3>
                    </router-link>
                    <div>
                        <router-link class="info" :to="`/info/${movie.id}`">
                            <p>{{ getShortText(movie.overview) }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.content h3{
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.mensagemNaoEncontrado{
    width: 40vh;
}

.semFilme{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 15%;
}
.info {
    font-size: 17px;
    color: white;
    text-decoration: none;
}

.poster-filme:hover {
    opacity: 0.3;
    transition: 0.5s ease;
    backface-visibility: hidden;
}

.content {
    position: relative;
    bottom: 140%;
    display: none;
    opacity: 1;
    font-size: 23px;
    width: 240px;
    right: 9%;
}

.poster-filme {
    margin: 0 0 32% 0;
    display: block;
    opacity: 1;
    height: 380px;
    box-shadow: rgb(5, 3, 66) 7px 7px 7vh 1px;
    border-radius: 5px;
    border: solid rgb(12, 12, 88) 1px;
}

.cartazDeMovie:hover {
    max-height: 360px;
}

.cartazDeMovie:hover .content {
    display: block;

}

.cartazDeMovie:hover .poster-filme {
    opacity: 0.3;
}

.filmesCartaz {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 0 3.93vh 0;
}

* {
    margin: 1% 0 0 5.5%;
}
</style>
