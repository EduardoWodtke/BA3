<template>
    <div class="wrapContainer">
      <div class="containerPrincipal">
        <div class="logo">
          <img src="@/assets/img/Main-img/CriarConta/Logo.png" alt="" width="130">
        </div>
        <div class="forms">
          <form class="wrapForm" @submit.prevent="register">
            <div class="input-container">
              <input type="text" id="username" v-model="username" class="inputForm" placeholder="Informe o usuario"/>
            </div>
            <div class="input-container">
              <input type="email" id="email" v-model="email" class="inputForm" placeholder="Informe sue e-mail" />
            </div>
            <div class="input-container">
              <input type="password" id="password" v-model="password" class="inputForm" placeholder="Informe sua senha" />
            </div>
            <div class="input-container">
              <input type="password" id="confirmPassword" v-model="confirmPassword" class="inputForm" placeholder="Confirme sua senha" />
    
            </div>
            <div class="displayBtn">
              <button type="submit" class="BtnCriar">Criar Conta</button>
            </div>
          </form>
          <div class="message-container">
            <p>{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .input-container {
    position: relative;
    margin-top: 25px;
  }
  .message-container {
    text-align: center;
    color: #cc0000; 
    padding: 10px; 
    margin-top: 10px; 
    border-radius: 5px;
    font-weight: bold; 
  }
  .inputForm {
    width: 610px;
    height: 50px;
    padding: 15px;
    border: 1px solid #43055D;
    transition: all 0.3s;
    font-size: 16px;
  }
  
  .labelForm {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all 0.3s;
    font-size: 16px;
    color: #555;
  }
  
  .inputForm:focus + .labelForm,
  .inputForm:not(:placeholder-shown) + .labelForm {
    font-size: 12px;
    color: #555;
    top: 10px;
    transform: translateY(0);
  }
  
  .wrapContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
  }
  
  .containerPrincipal {
    width: 700px;
    height: 640px;
    border: 1px solid black;
  }
  
  .logo {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .wrapForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .BtnCriar {
    width: 350px;
    height: 50px;
    border: none;
    background-color: #43055D;
    border: 1px solid black;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
    margin-top: 80px;
  }
  
  .marginForm {
    margin-top: 25px;
  }
  
  .displayBtn {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  p {
    margin-top: 20px;
    color: #43055D;
    font-weight: bold;
  }
  
  /* Responsividade Estranha */
  
  
  @media screen and (min-width: 268px) {
      .containerPrincipal {
         margin: 10px;
         width: 500px;
         height: 580px;
      }
      .inputForm{
        width: 400px;
      }
  }
  
  </style>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const message = ref('')

    const register = () => {
      // Lógica de validação e envio dos dados para a API usando Axios
      // ...

      const credentials = {
        username: username.value,
        email: email.value,
        password: password.value
      }

      axios
        .post('http://localhost:3000/register', credentials)
        .then((response) => {
          message.value = response.data.message
        })
        .catch((error) => {
          message.value = error.response.data.message
        })
    }

    return {
      username,
      email,
      password,
      confirmPassword,
      register,
      message
    }
  }
}
</script>

