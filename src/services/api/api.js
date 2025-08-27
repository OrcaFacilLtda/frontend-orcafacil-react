import axios from 'axios';

// A URL base da sua API que está no backend Spring
const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});


export default api;
