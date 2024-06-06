<script setup lang="ts">
const date = new Date();
const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
</script>

<template>
  <div class="text-white text-xl">
    {{ day }}.{{ month }}.{{ date.getFullYear() }}
  </div>
</template>

<style scoped></style>
