<template>
  <div class="my-4">
    <div class="container">
      <!--      col-1-->
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9">
          <div class="grid grid-cols-12 gap-3 items-center">
            <SButton class="col-span-4 h-16" variant="black">
              Мнемосхема Выработка, СН, УРТ
            </SButton>
            <SButton class="col-span-4 h-16" variant="black">
              Расход входящего газа
            </SButton>
            <SButton class="col-span-2 h-16" variant="black">
              Таблица отопление PMT
            </SButton>
            <SButton
              class="col-span-2 h-16"
              variant="black"
              custom-class="!leading-4 !text-[12px]"
            >
              Таблица отопление ЛОГИКА СПТ
            </SButton>
          </div>
          <div class="grid grid-cols-12 gap-3 items-center mt-4">
            <SButton class="col-span-4 h-16" variant="black">
              Технико-экономические показатели Выработка, СН, УРТ, Выра бота
            </SButton>
            <SButton class="col-span-4 h-16" variant="black">
              Параметры газа
            </SButton>
            <SButton class="col-span-4 h-16" variant="black">
              Таблица выработка, архивная
            </SButton>
          </div>
        </div>
        <div class="col-span-3">
          <ShadowButton class="h-16 w-full" @click="logout">Выход</ShadowButton>
          <div class="mt-4 grid grid-cols-2 gap-6 items-center h-16">
            <VueClock class="mx-auto" />
            <VueDate class="mx-auto" />
          </div>
        </div>
      </div>
      <!--col-3-->
      <div class="grid grid-cols-12 gap-3 mt-3">
        <SButton class="col-span-3 h-16 w-full" variant="black">
          Подпитка воды
        </SButton>
        <SButton class="col-span-3 h-16 w-full" variant="black">
          Таблица текущих измерений по блокам
        </SButton>
        <div class="col-span-6 grid grid-cols-12 gap-3">
          <SButton variant="black" class="col-span-3 w-full h-16"
            >Диагностика</SButton
          >
          <div class="col-span-3 grid gap-3 grid-cols-2">
            <SButton
              @click="$router.push('/solar_system/1')"
              variant="green"
              class="h-16"
              custom-class="!text-[12px] !px-2  !leading-4"
              >ФЭС
            </SButton>
            <SButton
              @click="$router.push('/solar_system/2')"
              variant="green"
              class="h-16"
              custom-class="!text-[10px] !px-1  !leading-3"
              >ФЭС ХВО</SButton
            >
          </div>
          <SButton variant="black" class="col-span-3 h-16 w-full"
            >Таблица измерений M3X-1</SButton
          >
          <SButton variant="black" class="col-span-3 h-16 w-full"
            >Тепловая схема MSX-1</SButton
          >
        </div>
      </div>
      <!--      col-4-->
      <div class="grid grid-cols-10 mt-3 gap-3">
        <SButton v-for="item in 10" :key="item" class="h-16" variant="black"
          >ТГ-{{ item }}</SButton
        >
      </div>

      <div class="mt-10 px-20 flex flex-col gap-3">
        <HomeInfo class="text-[#F20300]" unity="MВт" rate="2048" title="P" />
        <HomeInfo class="text-[#17BB0E]" unity="%" rate="3.62" title="CH" />
        <HomeInfo
          class="text-[#FDFD06]"
          unity="г/кВт*ч"
          rate="141"
          title="УРТ"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ShadowButton from "@/components/shared/button/ShadowButton.vue";
import SButton from "@/components/shared/button/SButton.vue";
import HomeInfo from "@/components/pages/home/HomeInfo.vue";
import { useLoginStore } from "@/store/auth";
import { useRouter } from "vue-router";
import VueClock from "@/components/clock/VueClock.vue";
import VueDate from "@/components/date/VueDate.vue";

const authStore = useLoginStore();

const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push("/login");
};
</script>
