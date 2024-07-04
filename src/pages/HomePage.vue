<template>
  <div class="my-4">
    <div class="container">
      <!--      col-1-->
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9">
          <div class="flex flex-wrap gap-3 items-center">
            <SButton class="grow-[2] w-full basis-[250px] h-16" variant="black">
              Мнемосхема Выработка, СН, УРТ
            </SButton>
            <SButton class="grow-[2] w-full basis-[250px] h-16" variant="black">
              Расход входящего газа
            </SButton>
            <SButton class="grow w-full basis-[180px] h-16" variant="black">
              Таблица отопление PMT
            </SButton>
            <SButton
              class="grow w-full basis-[180px] h-16"
              variant="black"
              custom-class="!leading-4 !text-[12px]"
            >
              Таблица отопление ЛОГИКА СПТ
            </SButton>
          </div>
          <div class="flex flex-wrap gap-3 items-center mt-4">
            <SButton class="grow-[2] w-full basis-[250px] h-16" variant="black">
              Технико-экономические показатели Выработка, СН, УРТ, Выра бота
            </SButton>
            <SButton class="w-full grow basis-[100px] h-16" variant="black">
              Изменения Плана </SButton
            ><SButton
              class="grow-[2] w-full basis-[250px] h-16"
              variant="black"
            >
              Параметры газа
            </SButton>
            <SButton class="grow-[2] w-full basis-[250px] h-16" variant="black">
              Таблица выработка, архивная
            </SButton>
          </div>
        </div>
        <div class="col-span-3">
          <ShadowButton class="h-16 w-full" @click="logout">Выход</ShadowButton>
          <div class="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-6 items-center xl:h-16">
            <VueClock class="mx-auto" />
            <VueDate class="mx-auto" />
          </div>
        </div>
      </div>
      <!--col-3-->
      <div class="flex flex-wrap xl:flex-nowrap gap-3 mt-3">
        <SButton class="basis-[200px] grow-[2] h-16 w-full" variant="black">
          Подпитка воды
        </SButton>
        <SButton class="basis-[200px] grow-[2] h-16 w-full" variant="black">
          Таблица текущих измерений по блокам
        </SButton>

        <SButton variant="black" class="basis-[200px] grow-[2] w-full h-16"
          >Диагностика</SButton
        >
        <SButton
          @click="$router.push('/solar_system1')"
          variant="green"
          class="h-16 basis-[100px]"
          custom-class="!text-[14px] !px-2 !leading-4"
          >ФЭС ДOУ
        </SButton>
        <SButton
          @click="$router.push('/solar_system2')"
          variant="green"
          class="h-16 basis-[100px]"
          custom-class="!text-[14px] !px-1 !leading-3"
          >ФЭС ХВО</SButton
        >
        <SButton variant="black" class="basis-[200px] grow h-16 w-full"
          >Таблица измерений M3X-1</SButton
        >
        <SButton variant="black" class="basis-[200px] grow h-16 w-full"
          >Тепловая схема MSX-1</SButton
        >
      </div>
      <!--      col-4-->
      <div class="flex flex-wrap mt-3 gap-3">
        <SButton
          v-for="item in 10"
          :key="item"
          class="h-16 w-full basis-[100px] grow"
          variant="black"
          >ТГ-{{ item }}</SButton
        >
      </div>

      <div class="mt-10 px-4 sm:px-20 flex flex-col gap-3">
        <HomeInfo
          class="text-[#F20300]"
          unity="MВт"
          :rate="infoStore?.info?.total_P_month"
          title="P"
        />
        <HomeInfo class="text-[#17BB0E]" unity="%" :rate="3.62" title="CH" />
        <HomeInfo
          class="text-[#FDFD06]"
          unity="г/кВт*ч"
          :rate="141"
          title="УРТ"
        />
      </div>
    </div>
    <BlockLoader :loading="loadingInfo" />
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
import { onMounted, ref } from "vue";
import { useSolarInfoStore } from "@/store/solar_info";
import { useToast } from "vue-toastification";
import BlockLoader from "@/components/block_loader/BlockLoader.vue";

const toast = useToast();

const infoStore = useSolarInfoStore();
const loadingInfo = ref(false);
const authStore = useLoginStore();

const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push("/login");
};

onMounted(async () => {
  loadingInfo.value = true;
  try {
    await infoStore.fetchSolarInfo(1);
  } catch (err) {
    toast.error("Xatolik yuz berdi");
  } finally {
    loadingInfo.value = false;
  }
});
</script>
