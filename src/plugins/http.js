import axios from 'axios';

const axiosInstace = axios.create({
    baseURL: 'https://localhost:8000/api',
    headers: {
      'Content-type': 'application/json'
    }
  })
  
  export default axiosInstace;