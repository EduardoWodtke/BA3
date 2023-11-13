<script setup>

const props = defineProps(['movies', 'titulo', 'subtitulo'])
</script>

<template>
    <div class="Populares">
        <h1>{{ props.titulo }},</h1>
        <h2>{{ props.subtitulo }}</h2>
        <div id="popularesCartaz">
            <div v-for="movie in props.movies" :key="movie.id" class="cartazDeMovie">
                <img class="info-filme" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
                <p class="tituloDeMovie">{{ movie.title }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .info-filme:hover {
    width: 300vh;
    transition: 1s;
} */

#popularesCartaz {
    display: flex;
    flex-direction: row;
    height: 32rem;
    background: rgb(92, 13, 172);
    background: linear-gradient(82deg, rgba(92, 13, 172, 1) 0%, rgba(46, 0, 115, 1) 47%, rgba(0, 18, 255, 0) 95%);
    overflow-x: scroll;
    padding: 2vh;
}

#popularesCartaz::-webkit-scrollbar {
    width: .5em;
    height: .6em;
}

#popularesCartaz::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#popularesCartaz::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0);
    outline: 1px solid rgb(211, 209, 209);
}

.cartazDeMovie img {
    margin: 0 .4vw;
    height: 380px;

}

.Populares h1 {
    font-size: 45px;
}

.Populares h2 {
    font-size: 30px;
    padding: 1vh;
}

.Populares p {
    font-size: 20px;
    text-align: center;
}
</style>