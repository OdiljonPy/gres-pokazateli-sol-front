<script setup lang="ts">
import { ref } from "vue";
import InfoText from "@/components/pages/solar_system/InfoText.vue";
import InfoCard from "@/components/pages/solar_system/InfoCard.vue";
import SButton from "@/components/shared/button/SButton.vue";
import VueClock from "@/components/clock/VueClock.vue";
import VueDate from "@/components/date/VueDate.vue";

const series = ref([
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
]);

const chartOptions = ref({
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Солнечная Nº1",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "17:17",
      "20:17",
      "02:17",
      "05:17",
      "07:17",
      "09:17",
      "11:17",
      "13:17",
      "14:17",
      "15:17",
      "14:17",
    ],
  },
});

const series2 = ref([
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
]);

const chartOptions2 = ref({
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Солнечная Nº2",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "17:17",
      "20:17",
      "02:17",
      "05:17",
      "07:17",
      "09:17",
      "11:17",
      "13:17",
      "14:17",
    ],
  },
});
</script>

<template>
  <div class="my-4">
    <div class="container">
      <div class="mb-3 grid grid-cols-2 items-center">
        <div class="flex items-center gap-4">
          <SButton variant="black" class="w-[300px]" @click="$router.push('/')"
            >Menu</SButton
          >
          <p class="text-3xl text-dark">"Sirdaryo IES"</p>
        </div>
        <div class="flex items-center gap-6">
          <VueClock class="!text-dark !w-[120px]" />
          <VueDate class="!text-dark" />
        </div>
      </div>
      <div class="mb-4 border-2 border-black grid grid-cols-3 items-center">
        <div class="flex px-4 justify-between">
          <p class="text-lg flex items-center gap-4">
            Суммарная мощность <span class="font-semibold text-3xl">P</span>
          </p>
          <p class="text-xl">
            <span class="text-4xl font-semibold mr-1">12.5</span> kvW
          </p>
        </div>
        <div class="px-4 py-3 border-x-2 border-black">
          <div class="flex items-center justify-between">
            <p class="text-xl font-medium">Нач. суток</p>
            <p class="text-lg">
              <span class="font-semibold text-2xl mr-1">17.4</span> kvW * h
            </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-xl font-medium">Пред. сутки</p>
            <p class="text-lg">
              <span class="font-semibold text-2xl mr-1">0.0</span> kvW * h
            </p>
          </div>
        </div>
        <div class="px-4 flex justify-between">
          <p class="text-xl font-medium">Нач. месяца</p>
          <p class="text-lg">
            <span class="font-semibold text-2xl mr-1">17.0</span> kvW * h
          </p>
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <div class="w-full">
          <div class="flex gap-3">
            <div
              class="basis-[60%] border-2 border-black p-3 grid grid-cols-2 gap-2"
            >
              <InfoCard
                v-for="(item, idx) in 6"
                :key="item"
                title=""
                :idx="idx + 1"
              />
            </div>
            <div class="basis-[38%] flex flex-col gap-[1px]">
              <InfoText title="P" rate="5.2" unity="kvW" />
              <InfoText title="P1" rate="5.2" unity="kvW" />
              <InfoText title="P2" rate="5.2" unity="kvW" />
              <InfoText title="P3" rate="5.2" unity="kvW" />
              <InfoText title="U1" rate="227.2" unity="V" />
              <InfoText title="U2" rate="236.2" unity="V" />
              <InfoText title="U3" rate="215.2" unity="V" />
              <InfoText title="I1" rate="0.0" unity="A" />
              <InfoText title="I2" rate="0.0" unity="A" />
              <InfoText title="I3" rate="0.0" unity="A" />
              <InfoText title="f" rate="49.98" unity="Hz" />
            </div>
          </div>
          <div class="mt-4" id="chart">
            <apexchart
              type="line"
              height="350"
              ref="chart"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
        <div class="w-full">
          <div class="flex gap-3">
            <div
              class="basis-[60%] border-2 border-black p-3 grid grid-cols-2 gap-3"
            >
              <InfoCard
                v-for="(item, idx) in 6"
                :key="item"
                title=""
                :idx="idx + 1"
              />
            </div>
            <div class="basis-[38%] flex flex-col gap-[1px]">
              <InfoText title="P" rate="5.2" unity="kvW" />
              <InfoText title="P1" rate="5.2" unity="kvW" />
              <InfoText title="P2" rate="5.2" unity="kvW" />
              <InfoText title="P3" rate="5.2" unity="kvW" />
              <InfoText title="U1" rate="227.2" unity="V" />
              <InfoText title="U2" rate="236.2" unity="V" />
              <InfoText title="U3" rate="215.2" unity="V" />
              <InfoText title="I1" rate="0.0" unity="A" />
              <InfoText title="I2" rate="0.0" unity="A" />
              <InfoText title="I3" rate="0.0" unity="A" />
              <InfoText title="f" rate="49.98" unity="Hz" />
            </div>
          </div>
          <div class="mt-4" id="chart">
            <apexchart
              type="line"
              height="350"
              ref="chart"
              :options="chartOptions2"
              :series="series2"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
