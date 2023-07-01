import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_API_URL,
};

export const api = axios.create(config);

console.log(import.meta.env.VITE_STRAPI_TOKEN);

api.interceptors.request.use(
  async (config) => {
    const token = import.meta.env.VITE_STRAPI_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
