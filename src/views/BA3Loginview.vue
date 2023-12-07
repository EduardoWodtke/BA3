<template>
  <div class="login-container">
    <img src="../assets/foto-login.png" alt="">
    <form @submit.prevent="loginUser" class="login-form">
      <input type="text" v-model="username" placeholder="Nome de Usuário ou Email" class="input-field" />
      <input type="password" v-model="password" placeholder="Senha" class="input-field" />
      <button type="submit" class="login-button">Login</button>
    </form>
    <p class="message">{{ message }}</p>
    <img src="../assets/foto-login2.png" alt="">
  </div>
</template>

<style>
.login-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  background: rgb(14, 14, 14);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.input-field {
  width: 300px;
  height: 40px;
  margin: 10px 0;
  border: none;
  border-bottom:1px solid rgb(68, 68, 68);
  padding: 8px;
  background: rgb(14, 14, 14);
  border-radius: 5px;
  font-size: 16px;
  color: white;
}

.login-button {
  width: 150px;
  height: 40px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #43055D;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #5f2b96;
}

.message {
  margin-top: 20px;
  color: #cc0000;
  font-weight: bold;
}
</style>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const message = ref('')

    const loginUser = () => {
      const credentials = {
        username: username.value,
        password: password.value
      }

      axios.post('http://localhost:3000/login', credentials)
        .then(response => {
          message.value = response.data.message
        })
        .catch(error => {
          message.value = error.response.data.message
        })
    }

    return {
      username,
      password,
      loginUser,
      message
    }
  }
}
</script>
