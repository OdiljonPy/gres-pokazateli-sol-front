<template>
  <div class="my-4">
    <div class="container">
      <!--      col-1-->
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9">
          <div class="grid grid-cols-12 gap-3 items-center">
            <SButton class="col-span-4 h-16" variant="black">
              Jenson button
            </SButton>
            <SButton class="col-span-4 h-16" variant="black">
              Jenson button
            </SButton>
            <SButton class="col-span-2 h-16" variant="black">
              Jenson button
            </SButton>
            <SButton class="col-span-2 h-16" variant="black">
              Jenson button
            </SButton>
          </div>
          <div class="grid grid-cols-12 gap-3 items-center mt-4">
            <SButton class="col-span-4 h-16" variant="black">
              Jenson button
            </SButton>
            <SButton class="col-span-4 h-16" variant="black">
              Jenson button
            </SButton>
            <SButton class="col-span-2 h-16" variant="black">
              Jenson button
            </SButton>
            <SButton class="col-span-2 h-16" variant="black">
              Jenson button
            </SButton>
          </div>
        </div>
        <div class="col-span-3">
          <ShadowButton class="h-16 w-full">Chiqish</ShadowButton>
        </div>
      </div>
      <!--col-3-->
      <div class="grid grid-cols-12 gap-3 mt-3">
        <SButton class="col-span-3 h-16 w-full" variant="black">
          Jenson button
        </SButton>
        <SButton class="col-span-3 h-16 w-full" variant="black">
          Jenson button
        </SButton>
        <div class="col-span-6 grid grid-cols-12 gap-3">
          <SButton variant="black" class="col-span-3 w-full h-16"
            >Button</SButton
          >
          <div class="col-span-3 grid gap-3 grid-cols-2">
            <SButton variant="green" class="h-16" custom-class="!text-[12px] !px-2  !leading-4">ФЭС </SButton>
            <SButton variant="green" class="h-16 " custom-class="!text-[12px] !px-2  !leading-4">ФЭС ХВО</SButton>
          </div>
          <SButton variant="black" class="col-span-3 h-16 w-full"
            >Button</SButton
          >
          <SButton variant="black" class="col-span-3 h-16 w-full"
            >Button</SButton
          >
        </div>
      </div>
      <!--      col-4-->
      <div class="grid grid-cols-10 mt-3 gap-3">
        <SButton v-for="item in 10" :key="item" class="h-16" variant="black"
          >ТГ-{{ item }}</SButton
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ShadowButton from "@/components/shared/button/ShadowButton.vue";
import SButton from "@/components/shared/button/SButton.vue";
</script>
