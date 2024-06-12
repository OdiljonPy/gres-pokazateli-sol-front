import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { IChartDay, IChartDayRes } from "@/types/chart_day";

export const useChartDay = defineStore("chart_day", {
  state: () => ({
    cords: {} as IChartDay,
    loading: false,
    error: false,
  }),
  actions: {
    fetchSolarDay(page: number) {
      return new Promise((resolve, reject) => {
        this.loading = true;
        this.error = false;
        axios
          .get<IChartDayRes>(`/get_data/?page=${page}&page_size=2`)
          .then((res) => {
            this.cords = res?.data?.result;
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
