import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
    }
})