import axios, { InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});
