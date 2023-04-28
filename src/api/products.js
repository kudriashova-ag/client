import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/products'
});

export const getProducts = () => api.get('/');
export const getProductById = (id) => api.get(`/${id}`);
export const createProduct = (payload) => api.post(`/`, payload);
export const updateProduct = (id, payload) => api.patch(`/${id}`, payload);
export const removeProduct = (id) => api.delete(`/${id}`);