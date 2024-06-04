<template>
  <div class="container my-4">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-9">
        <div class="grid grid-cols-12 gap-3 items-center">
          <ShadowButton class="col-span-4"> Jenson button </ShadowButton>
          <ShadowButton class="col-span-4"> Jenson button </ShadowButton>
          <ShadowButton class="col-span-2"> Jenson button </ShadowButton>
          <ShadowButton class="col-span-2"> Jenson button </ShadowButton>
        </div>
        <div class="grid grid-cols-12 gap-3 items-center mt-3">
          <ShadowButton class="col-span-4"> Jenson button </ShadowButton>
          <ShadowButton class="col-span-4"> Jenson button </ShadowButton>
          <ShadowButton class="col-span-2"> Jenson button </ShadowButton>
          <ShadowButton class="col-span-2"> Jenson button </ShadowButton>
        </div>
      </div>
      <div class="col-span-3">
        <ShadowButton class="col-span-4"> Chiqish </ShadowButton>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-3 mt-3">
      <div class="col-span-6 flex gap-3">
        <ShadowButton class="col-span-4"> Jenson button </ShadowButton>
        <ShadowButton class="col-span-4"> Jenson button </ShadowButton>
      </div>
      <div class="col-span-6 flex">
        <SButton variant="black" class="grow-[2]">Button</SButton>
        <SButton variant="black" class="grow-[1]">Button</SButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ShadowButton from "@/components/shared/button/ShadowButton.vue";
import SButton from "@/components/shared/button/SButton.vue";
</script>
