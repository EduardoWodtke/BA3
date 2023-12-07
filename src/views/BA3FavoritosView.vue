<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])
const movies = ref([]);
const maxLength = 200;

const getShortText = overview => {
    if (overview.length > maxLength) {
        return `${overview.substring(0, maxLength)}...`;
    } else if (overview.length === 0) {
        return mensagemNada.value;
    } else {
        return overview;
    }
};

onMounted(async () => {
    const response = await api.get('genre/movie/list?language=pt-BR&sort_by=popularity')
    genres.value = response.data.genres
    await listMovies(16);
})


const listMovies = async (genreId) => {
    const response = await api.get('discover/movie', {
        params: {
            with_genres: genreId,
            language: 'pt-BR'
        }
    });
    movies.value = response.data.results
};

function openMovie(movieId) {
    router.push({ name: 'info', params: { movieId } });
}
</script>

<template>
   <div class="Populares">
        <h1>{{ titulo }}</h1>
        <h2>{{ subtitulo }}</h2>
        <div class="popularesCartaz">
            <div v-for="movie in movies" :key="movie.id" class="cartazDeMovie">
                <router-link :to="`/info/${movie.id}`"> <img class="poster-filme"
                        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title"
                        @click="openMovie(movie.id)" /></router-link>
                <div class="content">
                    <router-link :to="`/info/${movie.id}`">
                        <h3>{{ movie.title }}</h3>
                    </router-link>
                    <div >
                        <router-link class="info" :to="`/info/${movie.id}`">
                            <p>{{ getShortText(movie.overview) }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.cartazDeMovie:hover {
    height: 380px;
    margin: 0 2vh 4vh 0;
}
.cartazDeMovie {
    margin: 0 2vh 4vh 0;
}
.Populares{
    margin-left: 7%;
}
.poster-filme:hover {
    opacity: 0.3;
    transition: 0.5s ease;
    backface-visibility: hidden;    
    
}

.info {
    font-size: 18px;
    color: white;
    text-decoration: none;
}

.content {
    position: relative;
    bottom: 52%;
    display: none;
    opacity: 1;
    padding: 4% 6% 0 6%;
    font-size: 23px;
    text-decoration: none;
    color: white;
    width: 270px;
}

.content h3{
    color: white;
    text-decoration: none;
}
.content:hover+div {
    display: block;   
}

.poster-filme {
    margin: 0 .4vw;
    height: 380px;
    display: block;
    opacity: 1;
    border-radius: 5px;
}

.cartazDeMovie:hover .content {
    display: block;
}

.cartazDeMovie:hover .poster-filme {
    opacity: 0.3;
}


.popularesCartaz {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.Populares h1 {
    font-size: 50px;
}

.Populares h2 {
    font-size: 30px;
    padding: 1vh;
}
</style>
