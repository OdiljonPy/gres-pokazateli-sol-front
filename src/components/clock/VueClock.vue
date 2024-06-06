<script setup lang="ts">
import { onMounted, ref } from "vue";

const second = ref<string | number>(new Date().getSeconds());
const minute = ref<string | number>(new Date().getMinutes());
const hours = ref<string | number>(new Date().getHours());

const updateTime = () => {
  second.value =
    new Date().getSeconds() < 10
      ? `0${new Date().getSeconds()}`
      : new Date().getSeconds();

  minute.value =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes();

  hours.value =
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : new Date().getHours();
};

onMounted(() => {
  setInterval(() => {
    updateTime();
  }, 100);
});
</script>

<template>
  <div class="text-white text-xl">
    {{ hours }} : {{ minute }} : {{ second }}
  </div>
</template>

<style scoped></style>
