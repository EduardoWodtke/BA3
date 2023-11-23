<script setup>
import { defineProps, ref } from 'vue';

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
    <div class="Populares">
        <h1>{{ titulo }}</h1>
        <h2>{{ subtitulo }}</h2>
        <div class="popularesCartaz">
            <div v-for="movie in movies" :key="movie.id" class="cartazDeMovie">
                <img class="poster-filme" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
                <div class="content">
                    <h3>{{ movie.title }}</h3>
                    <div class="info">
                        <p>{{ getShortText(movie.overview) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.poster-filme:hover {
    opacity: 0.3;
    transition: 0.5s ease;
    backface-visibility: hidden;
}

.info {
    font-size: 15px;
}

.content {
    position: relative;
    bottom: 100%;
    display: none;
    opacity: 1;
    padding: 4% 6% 0 6%;
    font-size: 20px;
}

.content:hover+div {
    display: block;
}

.poster-filme {
    margin: 0 .4vw;
    height: 380px;
    display: block;
    opacity: 1;
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
    height: 27rem;
    background: rgb(92, 13, 172);
    background: linear-gradient(82deg, rgba(92, 13, 172, 1) 0%, rgba(46, 0, 115, 1) 47%, rgba(0, 18, 255, 0) 95%);
    overflow-x: scroll;
    padding: 2vh;
}

.popularesCartaz::-webkit-scrollbar {
    width: .5em;
    height: 0.6em;
}

.popularesCartaz::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.popularesCartaz::-webkit-scrollbar-thumb {
    background-color: rgb(88, 88, 88);
    outline: 2px solid rgb(15, 0, 0);
    border-radius: 0.2cm;
}

.Populares h1 {
    font-size: 45px;
}

.Populares h2 {
    font-size: 30px;
    padding: 1vh;
}
</style>