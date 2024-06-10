<script setup lang="ts">
import { onMounted } from "vue";
import PreLoader from "@/components/shared/pre-loader/PreLoader.vue";

interface Props {
  title: string;
  rate?: number;
  unity: string;
  error?: boolean;
}

withDefaults(defineProps<Props>(), {
  error: false,
});
</script>

<template>
  <div class="flex items-center justify-between text-dark font-medium">
    <p class="text-lg">{{ title }}</p>
    <PreLoader v-if="error" :loading="true" preloader-class="!w-[100px]" />
    <p v-else class="text-base">
      <span class="mr-2 text-xl text-black">{{ rate ? rate : '0.0' }}</span> {{ unity }}
    </p>
  </div>
</template>

<style scoped></style>
