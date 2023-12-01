<script setup>
import { ref, onMounted, onUpdated, defineProps } from 'vue';
import { useRoute } from 'vue-router'
import api from '@/plugins/axios'

const route = useRoute()

const movies = ref([]);

async function buscarFilmes(search) {
    const url = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=pt-BR&page=1`;
    try {
        const response = await api.get(url);
        console.log(response)
        movies.value = response.data.results.filter(movie => movie.genre_ids.includes(16));
    } catch (error) {
        console.error("Erro ao fazer a requisição: ", error);
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

const props = defineProps(['movies', 'titulo', 'subtitulo']);
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
        <div class="filmesCartaz">
            <div class="cartazDeMovie" v-for="movie in movies" :key="movie.id">
                <img class="poster-filme" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
                <div class="content">
                    <div>{{ movie.title }}</div>
                    <div class="info">
                        <p>{{ getShortText(movie.overview) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.info {
    font-size: 15px;
}

.poster-filme:hover {
    opacity: 0.3;
    transition: 0.5s ease;
    backface-visibility: hidden;
}

.content {
    position: relative;
    bottom: 110%;
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
    height: 360px;
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
