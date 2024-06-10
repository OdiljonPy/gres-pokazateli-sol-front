import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { ISolarInfoCommon, ISolarInfoRes } from "@/types/solar_info";

export const useSolarInfoStore = defineStore("solar_info", {
  state: () => ({
    info: {} as ISolarInfoRes,
    loading: false,
    error: false,
  }),
  actions: {
    fetchSolarInfo(page: number) {
      return new Promise((resolve, reject) => {
        this.loading = true;
        this.error = false;
        axios
          .get<ISolarInfoCommon>(`/get_updates/?page=${page}`)
          .then((res) => {
            this.info = res.data?.response;
            resolve(res.data);
          })
          .catch((err) => {
            this.error = true;
            this.loading = false;
            reject(err);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },
  },
});
