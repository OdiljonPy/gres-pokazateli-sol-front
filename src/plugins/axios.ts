import axios from "axios";

const $axios = axios.create(<any>{
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

$axios.interceptors.request.use(
  (config: any) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $axios;
