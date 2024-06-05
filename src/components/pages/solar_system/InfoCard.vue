<script setup lang="ts">
interface Props {
  title: string;
  idx: number;
}

defineProps<Props>();
</script>

<template>
  <div
    class="bg-[#7F7F7F] p-2 min-h-[70px] border-2 border-black"
  >
    <p class="text-white">Unv. N {{ idx }}</p>
  </div>
</template>

<style scoped></style>
