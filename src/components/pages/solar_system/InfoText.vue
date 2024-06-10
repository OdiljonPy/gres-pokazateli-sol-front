<script setup lang="ts">
interface Props {
  title: string;
  rate?: number;
  unity: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-between text-dark font-medium">
    <p class="text-lg">{{ title }}</p>
    <p class="text-base">
      <span class="mr-2 text-xl text-black">{{ rate }}</span> {{ unity }}
    </p>
  </div>
</template>

<style scoped></style>
