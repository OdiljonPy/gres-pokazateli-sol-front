<script setup lang="ts">
interface Props {
  title: string;
  rate?: number;
  unity: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-3 font-medium">
    <p class="text-3xl">{{ title }}:</p>
    <p class="text-5xl font-semibold mr-2 ml-1">
      {{ rate ? rate : "0.0" }}
    </p>
    <p class="text-3xl">{{ unity }}</p>
  </div>
</template>

<style scoped></style>
