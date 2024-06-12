<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import InfoText from "@/components/pages/solar_system/InfoText.vue";
import InfoCard from "@/components/pages/solar_system/InfoCard.vue";
import SButton from "@/components/shared/button/SButton.vue";
import VueClock from "@/components/clock/VueClock.vue";
import VueDate from "@/components/date/VueDate.vue";
import { useChartStore } from "@/store/solar_charts";
import { useSolarInfoStore } from "@/store/solar_info";
import formatDate from "@/helpers/format-date";
import { useToast } from "vue-toastification";
import PowerInfo from "@/components/pages/solar_system/PowerInfo.vue";
import { useChartDay } from "@/store/char_day";
import BlockLoader from "@/components/block_loader/BlockLoader.vue";

const toast = useToast();

const chartStore = useChartStore();
const infoStore = useSolarInfoStore();
const chartDayStore = useChartDay();
const loadingInfo = ref(false);

const chart = ref();
const chart1 = ref();
const chart2 = ref();

const series = ref([
  {
    name: "Солнечная Nº1",
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
    name: "Солнечная Nº2",
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
      "16:17",
      "18:17",
    ],
  },
});

const series3 = ref([
  {
    name: "Солнечная Nº1",
    data: [31, 40, 28, 109, 100, 23, 40, 20, 30, 70, 40, 10],
  },
  {
    name: "Солнечная Nº2",
    data: [11, 32, 45, 52, 41, 20, 100, 80, 60, 30, 10, 70],
  },
]);
const chartOptions3 = ref({
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "string",
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
      "12:17",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
});

const solar1 = computed(() => chartStore.solar?.solar_3);
const solar2 = computed(() => chartStore.solar?.solar_4);
const chartDaySolar1 = computed(() => chartDayStore.cords?.solar_3);
const chartDaySolar2 = computed(() => chartDayStore.cords?.solar_4);

function updateDayChart() {
  const dataSolarDay1 = chartDaySolar1.value?.map((solar) => solar.value);
  const dataSolarDay2 = chartDaySolar2.value?.map((solar) => solar.value);

  series2.value[0].data = dataSolarDay1;
  series.value[0].data = dataSolarDay2;

  const xaxisDataSolar1 = chartDaySolar1.value?.map(
    (solar) => formatDate(solar.created_at).hm
  );

  const xaxisDataSolar2 = chartDaySolar2.value?.map(
    (solar) => formatDate(solar.created_at).hm
  );

  if (xaxisDataSolar1?.length) {
    chart1.value?.updateOptions({
      xaxis: {
        categories: xaxisDataSolar1,
      },
    });
  }
  if (xaxisDataSolar2?.length) {
    chart2.value?.updateOptions({
      xaxis: {
        categories: xaxisDataSolar2,
      },
    });
  }
}

function updateMergeChart() {
  const dataSolar1 = solar1.value?.reverse()?.map((solar) => solar.P_total);
  const dataSolar2 = solar2.value?.reverse()?.map((solar) => solar.P_total);

  series3.value[0].data = dataSolar1;
  series3.value[1].data = dataSolar2;

  const xaxisData = solar1.value?.map(
    (solar) => formatDate(solar.crated_at).hours
  );

  if (xaxisData?.length) {
    chart.value?.updateOptions({
      xaxis: {
        categories: xaxisData,
      },
    });
  }
}

onMounted(async () => {
  loadingInfo.value = true;
  try {
    await chartStore.fetchSolarChart(2);
    await infoStore.fetchSolarInfo(2);
    await chartDayStore.fetchSolarDay(2);
  } catch (err) {
    toast.error("Xatolik yuz berdi");
  } finally {
    loadingInfo.value = false;
    updateDayChart();
    updateMergeChart();
  }
});

setInterval(() => {
  if (!infoStore.loading) infoStore.fetchSolarInfo(2);

  if (!chartStore.loading) {
    chartStore.fetchSolarChart(2).then(() => {
      updateMergeChart();
    });
  }
}, 5000);

setInterval(() => {
  chartDayStore.fetchSolarDay(2).then(() => {
    updateDayChart();
  });
}, 6 * 24 * 60 * 1000);
</script>

<template>
  <div class="my-4">
    <div class="container">
      <div class="mb-3 grid grid-cols-1 gap-4 xl:grid-cols-2 items-center">
        <div class="flex justify-between xl:justify-start items-center gap-4">
          <RouterLink to="/">
            <SButton variant="black" class="w-[180px] sm:w-[300px]"
              >Menu</SButton
            >
          </RouterLink>
          <p class="text-3xl text-dark flex shrink-0">"Sirdaryo IES"</p>
        </div>
        <div class="flex justify-start xl:justify-center items-center gap-6">
          <VueClock class="!text-dark !w-[120px]" />
          <VueDate class="!text-dark" />
        </div>
      </div>
      <div
        class="mb-4 md:border-2 border-black grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center"
      >
        <div class="flex items-center gap-2 px-4 justify-between">
          <p class="text-lg flex items-center gap-4">
            Суммарная мощность <span class="font-semibold text-3xl">P</span>
          </p>
          <div>
            <span class="text-4xl font-semibold mr-1">{{
              infoStore.info?.data?.solar_3?.P_total +
              infoStore.info?.data?.solar_4?.P_total
                ? (
                    infoStore.info?.data?.solar_3?.P_total +
                    infoStore.info?.data?.solar_4?.P_total
                  ).toFixed(2)
                : "0.0"
            }}</span>
            <span class="text-xl">kvW</span>
          </div>
        </div>
        <div class="xl:px-4 py-3 xl:border-x-2 border-black">
          <PowerInfo
            title="Haч. суток"
            :value="infoStore.info?.total_P_today"
          />
          <PowerInfo
            title="Пред. сутки"
            :value="infoStore.info?.total_P_yesterday"
          />
        </div>
        <div>
          <PowerInfo
            title="Нач. месяца"
            :value="infoStore.info?.total_P_month"
          />
          <PowerInfo title="Нач. годы" :value="infoStore.info?.total_P_year" />
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div
          class="mt-4 md:mt-0 w-full flex gap-8 flex-col-reverse md:flex-col"
        >
          <div class="flex gap-3">
            <div
              class="basis-[48%] md:basis-[60%] border-2 border-black p-1 md:p-3 grid grid-cols-2 gap-1 md:gap-2"
            >
              <InfoCard
                v-for="(item, idx) in 6"
                :key="item"
                title=""
                :idx="idx + 1"
              />
            </div>
            <div class="basis-[50%] md:basis-[38%] flex flex-col gap-[1px]">
              <InfoText
                title="P"
                :rate="infoStore.info?.data?.solar_3?.P_total"
                unity="kvW"
              />
              <InfoText
                title="P1"
                :rate="infoStore.info?.data?.solar_3?.P_1"
                unity="kvW"
              />
              <InfoText
                title="P2"
                :rate="infoStore.info?.data?.solar_3?.P_2"
                unity="kvW"
              />
              <InfoText
                title="P3"
                :rate="infoStore.info?.data?.solar_3?.P_3"
                unity="kvW"
              />
              <InfoText
                title="U1"
                :rate="infoStore.info?.data?.solar_3?.U_1"
                unity="V"
              />
              <InfoText
                title="U2"
                :rate="infoStore.info?.data?.solar_3?.U_2"
                unity="V"
              />
              <InfoText
                title="U3"
                :rate="infoStore.info?.data?.solar_3?.U_3"
                unity="V"
              />
              <InfoText
                title="I1"
                :rate="infoStore.info?.data?.solar_3?.I_1"
                unity="A"
              />
              <InfoText
                title="I2"
                :rate="infoStore.info?.data?.solar_3?.I_2"
                unity="A"
              />
              <InfoText
                title="I3"
                :rate="infoStore.info?.data?.solar_3?.I_3"
                unity="A"
              />
              <InfoText title="f" :rate="49.98" unity="Hz" />
            </div>
          </div>
          <div id="chart">
            <div class="flex items-center gap-2 ml-2">
              <span class="w-2 h-10 !bg-green-500"></span>
              <div>
                <p>
                  Max :
                  {{
                    infoStore.info?.max?.solar_3?.[0]?.P_total?.toFixed(2) ||
                    "0.0"
                  }}
                  kvW
                </p>
                <p>
                  Time :
                  {{
                    formatDate(infoStore.info?.max?.solar_3?.[0]?.crated_at)
                      .hours
                  }}
                </p>
              </div>
            </div>
            <apexchart
              type="line"
              height="350"
              ref="chart1"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
        <div
          class="mt-4 md:mt-0 w-full flex gap-8 flex-col-reverse md:flex-col"
        >
          <div class="flex gap-3">
            <div
              class="basis-[48%] md:basis-[60%] border-2 border-black p-1 md:p-3 grid grid-cols-2 gap-1 md:gap-2"
            >
              <InfoCard
                v-for="(item, idx) in 6"
                :key="item"
                title=""
                :idx="idx + 1"
              />
            </div>
            <div class="basis-[50%] md:basis-[38%] flex flex-col gap-[1px]">
              <InfoText
                title="P"
                :rate="infoStore.info?.data?.solar_4?.P_total"
                unity="kvW"
              />
              <InfoText
                title="P1"
                :rate="infoStore.info?.data?.solar_4?.P_1"
                unity="kvW"
              />
              <InfoText
                title="P2"
                :rate="infoStore.info?.data?.solar_4?.P_2"
                unity="kvW"
              />
              <InfoText
                title="P3"
                :rate="infoStore.info?.data?.solar_4?.P_3"
                unity="kvW"
              />
              <InfoText
                title="U1"
                :rate="infoStore.info?.data?.solar_4?.U_1"
                unity="V"
              />
              <InfoText
                title="U2"
                :rate="infoStore.info?.data?.solar_4?.U_2"
                unity="V"
              />
              <InfoText
                title="U3"
                :rate="infoStore.info?.data?.solar_4?.U_3"
                unity="V"
              />
              <InfoText
                title="I1"
                :rate="infoStore.info?.data?.solar_4?.I_1"
                unity="A"
              />
              <InfoText
                title="I2"
                :rate="infoStore.info?.data?.solar_4?.I_2"
                unity="A"
              />
              <InfoText
                title="I3"
                :rate="infoStore.info?.data?.solar_4?.I_3"
                unity="A"
              />
              <InfoText title="f" :rate="49.98" unity="Hz" />
            </div>
          </div>
          <div id="chart">
            <div class="flex items-center gap-2 ml-2">
              <span class="w-2 h-10 !bg-green-500"></span>
              <div>
                <p>
                  Max :
                  {{
                    infoStore.info?.max?.solar_4?.[0]?.P_total?.toFixed(2) ||
                    "0.0"
                  }}
                  kvW
                </p>
                <p>
                  Time :
                  {{
                    formatDate(infoStore.info?.max?.solar_4?.[0]?.crated_at)
                      .hours
                  }}
                </p>
              </div>
            </div>
            <apexchart
              type="line"
              height="350"
              ref="chart2"
              :options="chartOptions2"
              :series="series2"
            ></apexchart>
          </div>
        </div>
      </div>
      <div class="mt-8" id="chart">
        <apexchart
          ref="chart"
          type="area"
          height="350"
          :options="chartOptions3"
          :series="series3"
        ></apexchart>
      </div>
    </div>
    <BlockLoader :loading="loadingInfo" />
  </div>
</template>

<style scoped></style>
