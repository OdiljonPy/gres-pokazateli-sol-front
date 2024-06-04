<script setup lang="ts">
</script>

<template>
  <button
    class="bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] group w-full h-16 inline-flex transition-all duration-300 overflow-visible p-1 rounded-[4px] group"
  >
    <div
      class="w-full h-full bg-[linear-gradient(to_top,#ececec,#fff)] overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-[4px] hover:shadow-none duration-300"
    >
      <div
        class="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#101010] bg-[linear-gradient(#f4f4f4,#fefefe)] group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)] group-hover:text-orange-600 duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-2 rounded-[4px] black"
      >
        <slot />
      </div>
    </div>
  </button>
</template>

<style scoped></style>
