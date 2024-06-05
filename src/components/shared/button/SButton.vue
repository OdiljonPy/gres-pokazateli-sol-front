<template>
  <div
    class="cursor-pointer select-none flex justify-center text-sm ms:text-base items-center py-[10px] px-[18px] ms:px-4 rounded-xl transition duration-300"
    :class="[customClass, buttonStyle]"
  >
    <slot></slot>
    <slot name="pre"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  customClass?: string;
  variant?: string;
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
      return "bg-[#2E3036] text-white rounded-[4px] border transition duration-300 border-[#ffffff26] hover:bg-[#66676B]";
    case "light_blue":
      return "bg-indigo-600 hover:bg-main_color hover:text-white transition duration-300 text-white";
    case "green":
      return "bg-[#17BB0E] hover:bg-[#17BB0E] rounded-[4px] text-white hover:text-white transition duration-300";
  }
});
</script>
