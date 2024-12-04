import axios from "axios";

export const api = axios.create({
    baseURL: "https://dummyjson.com"
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = "token"
    return config
})