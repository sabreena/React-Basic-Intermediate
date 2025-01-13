import axios from "axios"


// export const baseApi = axios.create({ baseURL: "http://localhost:3000/" })
export const baseApi = axios.create({ baseURL: import.meta.env.VITE_API_URL })
console.log(import.meta.env.VITE_API_URL);