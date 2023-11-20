<script setup>
const props = defineProps(['movies', 'titulo', 'subtitulo'])
</script>

<template>
    <div class="Populares">
        <h1>{{ props.titulo }},</h1>
        <h2>{{ props.subtitulo }}</h2>
        <div class="popularesCartaz">
            <div v-for="movie in props.movies" :key="movie.id" class="cartazDeMovie">
                <img class="poster-filme" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="movie.title"  />
                <div class="title">
                    {{ movie.title }}
                    <div class="info">
                        {{ movie.overview }}
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
.info{
    padding: 5% 5% 0 0;
    font-size: 15px;
    text-align: center;
}
.title {
  position: relative;
  bottom: 100%;
  display: none;
  opacity: 1;
  padding: 4% 0 0 4%;
  font-size: 20px;
}
  
.title:hover + div {
  display: block;
}

.poster-filme {
    margin: 0 .4vw;
    height: 380px;
    display: block;
    opacity: 1;
}

.cartazDeMovie:hover .title {
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
    height: .6em;
}

.popularesCartaz::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.popularesCartaz::-webkit-scrollbar-thumb {
    background-color: rgb(37, 37, 37);
    outline: 1px solid rgb(15, 0, 0);
}

.Populares h1 {
    font-size: 45px;
}

.Populares h2 {
    font-size: 30px;
    padding: 1vh;
}
</style>