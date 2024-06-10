import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { User } from "@/constant/user";
import router from "@/router";

export const useLoginStore = defineStore("login", {
  state: () => ({
    user: {},
    isLogin: !!sessionStorage.getItem("token"),
    loading: false,
  }),
  actions: {
    login(user: { login: string; password: string }) {
      this.user = User;
      this.isLogin = true;
      sessionStorage.setItem("token", User.phone);
      router.push("/").then((r) => true);
      // return new Promise((resolve, reject) => {
      //   this.loading = true;
      //   axios
      //     .get("/login")
      //     .then((res) => {
      //       if (user.phone == User.phone && user.password == User.password) {
      //         this.user = User;
      //         this.isLogin = true;
      //         sessionStorage.setItem("token", User.phone);
      //         router.push("/").then((r) => true);
      //       }
      //       resolve(res.data);
      //     })
      //     .catch((err) => {
      //       reject(err);
      //     })
      //     .finally(() => {
      //       this.loading = false;
      //     });
      // });
    },
    logout() {
      sessionStorage.removeItem("token");
      this.isLogin = false;
      this.user = {};
    },
  },
});
