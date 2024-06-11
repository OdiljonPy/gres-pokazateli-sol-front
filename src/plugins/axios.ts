import axios from "axios";
import router from "@/router";

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

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refresh_token");
      router.push("/login");
    }
    console.log(error.response.status === 401, "axios response");
  }
);

export default $axios;
