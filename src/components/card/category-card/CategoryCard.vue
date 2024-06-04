<script setup lang="ts">
import { ICategories } from "@/types/categories";
import { useI18n } from "vue-i18n";
interface Props {
  category: ICategories;
}
defineProps<Props>();

const base_url = import.meta.env.VITE_IMAGE_URL;
const { locale } = useI18n();
</script>
<template>
  <router-link
    :to="`/brand?id=${category?.id}`"
    class="group h-[110px] sm:h-[200px] relative cursor-pointer w-full rounded-2xl sm:rounded-[22px] overflow-hidden"
  >
    <img
      :src="`${base_url}/${category?.cat_photo}`"
      alt="logo"
      class="flex-shrink-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.1]"
    />
    <p
      class="text-lg sm:text-xl absolute bottom-3 sm:bottom-4 left-4 sm:left-6 z-20 text-[#fff] uppercase"
    >
      {{ category?.name[locale] }}
    </p>
    <div
      class="card-shadow rounded-[22px] absolute w-full h-full bottom-0 left-0 z-10 transition-all duration-150 !bg-black opacity-0 group-hover:opacity-[0.3]"
    ></div>
  </router-link>
</template>

<style>
.card-shadow {
  background: linear-gradient(
    173.59deg,
    rgba(0, 0, 0, 0) 49.76%,
    rgba(0, 0, 0, 0.3) 94.95%
  );
  transition: all 0.7s ease-in-out;
}
</style>
