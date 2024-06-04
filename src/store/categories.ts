import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import { ICategories } from "@/types/categories";
import { ICommon } from "@/types/common";

export const categoriesStore = defineStore("categories", {
  state: () => ({
    categories: [] as ICategories[],
    loading: false,
    isEmpty: false,
  }),
  actions: {
    fetchCategories() {
      return new Promise((resolve, reject) => {
        if (this.isEmpty) {
          resolve(this.categories);
          return;
        }
        this.loading = true;
        axios
          .get<ICommon<ICategories>>("/categories")
          .then((res) => {
            this.categories = res.data?.data;
            this.isEmpty = true;
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
