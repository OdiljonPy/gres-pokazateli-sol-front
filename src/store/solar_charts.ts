import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { IChartSolarCommon, IChartSolarRes } from "@/types/charts";

export const useChartStore = defineStore("solar_chart", {
  state: () => ({
    solar: {} as IChartSolarRes,
    loading: false,
    error: false,
  }),
  actions: {
    fetchSolarChart() {
      return new Promise((resolve, reject) => {
        this.loading = true;
        this.error = false;
        axios
          .get<IChartSolarCommon>("/solar_day/")
          .then((res) => {
            this.solar = res.data?.response;
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
