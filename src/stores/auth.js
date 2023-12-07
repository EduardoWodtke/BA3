// store/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    username: ''
  }),
  actions: {
    login(username) {
      // Lógica de login... Suponha que após o login bem-sucedido,
      // você obtenha o nome do usuário

      // Simulando um login bem-sucedido
      this.isLoggedIn = true
      this.username = username // Aqui você teria o nome do usuário retornado da API
    },
    logout() {
      this.isLoggedIn = false
      this.username = ''
    }
  }
})


