<script setup lang="ts">
const month =
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1;
const day =
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
</script>

<template>
  <div class="text-white text-xl">
    {{ day }}.{{ month }}.{{ new Date().getFullYear() }}
  </div>
</template>

<style scoped></style>
