<script setup lang="ts">
import PreLoader from "@/components/shared/pre-loader/PreLoader.vue";

interface Props {
  title: string;
  value?: number;
  error?: boolean;
}

withDefaults(defineProps<Props>(), {
  error: false,
});
</script>

<template>
  <div class="px-4 flex justify-between">
    <p class="text-xl font-medium">{{ title }}</p>
    <PreLoader v-if="error" :loading="true" preloader-class="!w-[100px]" />
    <p v-else class="text-lg">
      <span class="font-semibold text-2xl mr-1">{{
        value ? value?.toFixed(2) : "0.0"
      }}</span>
      kvW * h
    </p>
  </div>
</template>

<style scoped></style>
