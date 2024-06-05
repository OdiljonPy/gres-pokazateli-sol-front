<script setup lang="ts">
import { ref } from "vue";
import InfoText from "@/components/pages/solar_system/InfoText.vue";
import InfoCard from "@/components/pages/solar_system/InfoCard.vue";

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
      <div class="flex gap-8 items-center">
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
