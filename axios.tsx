import axios from "axios"
export const BASE_URL = "http://localhost:3100"
const app = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default app