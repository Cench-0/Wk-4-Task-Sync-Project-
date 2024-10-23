import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const registerUser = (username, password) => {
    return axios.post(`${API_URL}/register`, { username, password });
};

export const loginUser = (username, password) => {
    return axios.post(`${API_URL}/login`, { username, password });
};

export const fetchTasks = (token) => {
    return axios.get(`${API_URL}/tasks`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
