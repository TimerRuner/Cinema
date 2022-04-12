import axios from "axios"
import interceptors from "./interceptors"

const instance = axios.create({
    baseURL: "https://www.omdbapi.com",
})

interceptors(instance)

export default instance
