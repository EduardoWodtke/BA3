import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzljNzg5YjEyOWIxY2VhMjQ5ODg4NTYyZThlMmY0YiIsInN1YiI6IjY0ZmYxNTg2ZWZlYTdhMDExYWI3NmE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PViDt4Oz0f9MvPr7QKC8dwjccHjFZQKZ00IGh7ng-OU`
  }
})

export default api