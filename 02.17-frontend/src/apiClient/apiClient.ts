import axios from "axios";

const apiClient=axios.create({
    baseURL:"http://localhost:3020/api"
})

export default apiClient;