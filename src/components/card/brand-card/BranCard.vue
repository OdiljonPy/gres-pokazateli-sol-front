<script setup lang="ts">
import { IBrand } from "@/types/brands";
import { useI18n } from "vue-i18n";

interface Props {
  brand: IBrand;
}

defineProps<Props>();
const { locale } = useI18n();
const base_url = import.meta.env.VITE_IMAGE_URL;
</script>
<template>
  <a
    :href="`${base_url}${locale}/location/${brand?.slug}`"
    class="flex flex-col gap-2 group cursor-pointer overflow-hidden group"
  >
    <div
      class="h-[110px] ms:h-[130px] rounded-2xl sm:rounded-[22px] overflow-hidden relative"
    >
      <img
        :src="`${base_url}${brand?.store_photo}`"
        alt="brand images"
        class="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.1]"
      />
      <div
        class="card-shadow rounded-[22px] absolute w-full h-full bottom-0 left-0 z-10 transition-all duration-150 !bg-black opacity-0 group-hover:opacity-[0.3]"
      ></div>
    </div>
    <div class="ms:pl-4">
      <p
        class="text-dark text-base ms:text-xl transition duration-300 group-hover:text-black"
      >
        {{ brand?.name?.[locale] }}
      </p>
      <p
        class="text-sm ms:text-base text-dark_light line-clamp-1 transition duration-300 group-hover:text-dark"
      >
        {{ brand?.slogan?.[locale] }}
      </p>
    </div>
  </a>
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
