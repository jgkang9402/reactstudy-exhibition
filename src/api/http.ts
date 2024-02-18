import axios from "axios";
import setupInterceptors from "./intercepter";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
setupInterceptors(axiosInstance);

export default axiosInstance;
