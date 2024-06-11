<template>
  <button
    class="cursor-pointer select-none flex gap-2 justify-center text-sm ms:text-base items-center py-[10px] px-[18px] ms:px-4 rounded-xl transition duration-300"
    :class="[customClass, buttonStyle]"
  >
    <svg
      v-if="loading"
      class="spin"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    <slot></slot>
    <slot name="pre"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  customClass?: string;
  variant?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "blue",
});

// eslint-disable-next-line vue/return-in-computed-property
const buttonStyle = computed(() => {
  switch (props.variant) {
    case "blue":
      return "bg-main_blue hover:bg-[#1877F2] hover:text-white transition duration-300 text-white";
    case "white":
      return "bg-white  text-base sm:text-lg leading-5 text-[#363636] transition duration-300 hover:bg-[#F4F4F3]";
    case "gray":
      return "bg-[#BAE06A] text-[#141920] text-base sm:text-lg sm:leading-[30.525px] transition duration-300 hover:bg-[#21AE2E]";
    case "light":
      return "bg-[#8E9DCC] hover:bg-[#49549D] ";
    case "black":
      return "bg-[#2E3036] text-white rounded-[4px] text-center !leading-[22px] !px-2  text-[14px] border transition duration-300 border-[#ffffff26] hover:bg-[#66676B]";
    case "light_blue":
      return "bg-indigo-600 hover:bg-main_color hover:text-white transition duration-300 text-white";
    case "green":
      return "bg-[#17BB0E] hover:bg-[#17BB0E] rounded-[4px] text-white hover:text-white transition duration-300";
  }
});
</script>

<style lang="css">
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
