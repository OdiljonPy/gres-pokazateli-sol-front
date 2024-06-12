<script setup lang="ts">
import { watch } from "vue";

interface Props {
  loading: boolean;
}

const props = defineProps<Props>();

watch(
  () => props.loading,
  (newVal) => {
    if (newVal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }
);
</script>

<template>
  <div
    v-if="loading"
    class="w-screen h-screen bg-black opacity-[0.7] flex justify-center items-center absolute top-0 left-0"
  >
    <img
      class="w-[22%] object-cover"
      src="@/assets/loading_gif.gif"
      alt="loading gift"
    />
  </div>
</template>

<style scoped></style>
