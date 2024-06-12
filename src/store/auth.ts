import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import $axios from "@/plugins/axios";
import router from "@/router";
import { ILoginResponse } from "@/types/auth";

const toast = useToast();

export const useLoginStore = defineStore("login", {
  state: () => ({
    isLogin: !!sessionStorage.getItem("token"),
    loading: false,
  }),
  actions: {
    login(user: { login: string; password: string }) {
      return new Promise((resolve, reject) => {
        this.loading = true;
        $axios
          .post<ILoginResponse>("/login/", {
            username: user.login,
            password: user.password,
          })
          .then((res) => {
            if (res?.data?.ok) {
              this.isLogin = true;
              sessionStorage.setItem("token", res?.data?.result?.access_token);
              sessionStorage.setItem(
                "refresh_token",
                res?.data?.result?.refresh_token
              );
              toast.success("Tizimga muvaffaqiyatli kirdingiz");
              router.push("/");
            }
            resolve(res?.data);
          })
          .catch((err) => {
            toast.error("Login yoki parol xato");
            reject(err);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },
    logout() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("refresh_token");
      this.isLogin = false;
    },
  },
});
