<script setup>
import http from '../plugins/http.js'
import {reactive} from 'vue';

const user =  reactive({
    email:'',
    password: ''
})

async function Login(){
    try {
        const {data} = await http.post('/auth',user);
        console.log(data)
    } catch (error) {
        console.log(error?.response?.data)
    }
}
</script>

<template>
    <main>
        <form @submit.prevent="Login">
            <input type="text" placeholder="Seu email" v-model="user.email">
            <input type="passaword" placeholder="Sua senha" v-model="user.password">
            <button type="submit">
                login
            </button>
        </form>
    </main>
</template>

<style scoped>
    main{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: 0 0 0 5.5%;
    }
</style>../plugins/https.js