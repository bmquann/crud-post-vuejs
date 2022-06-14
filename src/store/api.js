import axios from 'axios'

const baseURL =  "https://jsonplaceholder.typicode.com/"
export const API = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer {token}'
      }
})