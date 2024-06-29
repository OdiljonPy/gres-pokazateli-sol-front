import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { IGet_years, IResGetYears } from "@/types/get_years";

export const useYearsStore = defineStore("years_store", {
  state: () => ({
    years: [] as IGet_years[],
    sumAllYears: 0,
    loading: false,
  }),
  actions: {
    fetchGetYears(page: number) {
      return new Promise((resolve, reject) => {
        this.loading = true;
        axios
          .get<IResGetYears>(`/get_year/?page=${page}&page_size=2`)
          .then((res) => {
            if (!res.data.ok) {
              throw new Error("error");
            }
            this.years = res.data.result;
            this.sumAllYears = res.data.result?.reduce(
              (acc, arr) => acc + arr.value,
              0
            );
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },
  },
});
