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
import PreLoader from "@/components/shared/pre-loader/PreLoader.vue";
import PowerInfo from "@/components/pages/solar_system/PowerInfo.vue";
import { useRoute } from "vue-router";
import { useChartDay } from "@/store/char_day";

const toast = useToast();
const route = useRoute();

const chartStore = useChartStore();
const infoStore = useSolarInfoStore();
const chartDayStore = useChartDay();
const loadingInfo = ref(false);

const chart = ref();
const chart1 = ref();
const chart2 = ref();

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
      "2024-06-08T17:28:38.029993Z",
      "2024-06-08T17:28:37.150767Z",
      "2024-06-08T17:28:35.548735Z",
      "2024-06-08T17:28:35.259309Z",
      "2024-06-08T17:28:33.447971Z",
      "2024-06-08T17:28:33.147468Z",
      "2024-06-08T17:28:32.369093Z",
      "2024-06-08T17:28:32.367031Z",
      "2024-06-08T17:28:31.469284Z",
      "2024-06-08T17:28:30.770053Z",
      "2024-06-08T17:28:29.751479Z",
      "2024-06-08T17:28:29.350668Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
});

const solar1 = computed(() => chartStore.solar?.solar_1);
const solar2 = computed(() => chartStore.solar?.solar_2);

const chartDaySolar1 = computed(() => chartDayStore.cords?.solar_1);
const chartDaySolar2 = computed(() => chartDayStore.cords?.solar_2);

function updateDayChart() {
  const dataSolarDay1 = chartDaySolar1.value?.map((solar) => solar.value);
  const dataSolarDay2 = chartDaySolar2.value?.map((solar) => solar.value);

  series2.value[0].data = dataSolarDay1;
  series.value[0].data = dataSolarDay2;

  const xaxisDataSolar1 = chartDaySolar1.value?.map(
    (solar) => formatDate(solar.created_at).hours
  );

  const xaxisDataSolar2 = chartDaySolar2.value?.map(
    (solar) => formatDate(solar.created_at).hours
  );

  chart1.value?.updateOptions({
    xaxis: {
      categories: xaxisDataSolar1,
    },
  });
  chart2.value?.updateOptions({
    xaxis: {
      categories: xaxisDataSolar2,
    },
  });
  chart1.value?.render();
  chart2.value?.render();
}

function updateMergeChart() {
  const dataSolar1 = solar1.value?.map((solar) => solar.P_total);
  const dataSolar2 = solar2.value?.map((solar) => solar.P_total);

  series3.value[0].data = dataSolar1;
  series3.value[1].data = dataSolar2;

  const xaxisData = solar1.value?.map(
    (solar) => formatDate(solar.crated_at).hours
  );

  chart.value?.updateOptions({
    xaxis: {
      categories: xaxisData,
    },
  });
  chart.value?.render();
}

onMounted(() => {
  loadingInfo.value = true;

  chartStore.fetchSolarChart(1);
  infoStore.fetchSolarInfo(1).then(() => {
    updateMergeChart();
    loadingInfo.value;
  });

  chartDayStore.fetchSolarDay(1).then(() => {
    updateDayChart();
  });

  if (chartStore.error || infoStore.error) {
    toast.error("Xatolik yuz berdi");
  }
});

setInterval(() => {
  if (!infoStore.loading) infoStore.fetchSolarInfo(1);

  if (!chartStore.loading) {
    chartStore.fetchSolarChart(1).then(() => {
      updateMergeChart();
    });
  }
}, 5000);
</script>

<template>
  <div class="my-4">
    <div class="container">
      <div class="mb-3 grid grid-cols-2 items-center">
        <div class="flex items-center gap-4">
          <RouterLink to="/">
            <SButton variant="black" class="w-[300px]">Menu</SButton>
          </RouterLink>
          <p class="text-3xl text-dark">"Sirdaryo IES"</p>
        </div>
        <div class="flex items-center gap-6">
          <VueClock class="!text-dark !w-[120px]" />
          <VueDate class="!text-dark" />
        </div>
      </div>
      <div class="mb-4 border-2 border-black grid grid-cols-3 items-center">
        <div class="flex items-center gap-2 px-4 justify-between">
          <p class="text-lg flex items-center gap-4">
            Суммарная мощность <span class="font-semibold text-3xl">P</span>
          </p>
          <div>
            <PreLoader
              v-if="infoStore.error"
              :loading="true"
              preloader-class="!w-[100px]"
            />
            <div v-else>
              <span class="text-4xl font-semibold mr-1">{{
                infoStore.info.data?.solar_1?.P_total +
                infoStore.info.data?.solar_2?.P_total
                  ? (
                      infoStore.info.data?.solar_1?.P_total +
                      infoStore.info.data?.solar_2?.P_total
                    ).toFixed(2)
                  : "0.0"
              }}</span>
              <span class="text-xl">kvW</span>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 border-x-2 border-black">
          <PowerInfo
            title="Haч. суток"
            :value="infoStore.info?.total_P_today"
            :error="infoStore.error"
          />
          <PowerInfo
            title="Пред. сутки"
            :value="infoStore.info?.total_P_yesterday"
            :error="infoStore.error"
          />
        </div>
        <div>
          <PowerInfo
            title="Нач. месяца"
            :value="infoStore.info?.total_P_month"
            :error="infoStore.error"
          />
          <PowerInfo
            title="Нач. годы"
            :value="infoStore.info?.total_P_year"
            :error="infoStore.error"
          />
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
              <InfoText
                title="P"
                :rate="infoStore.info.data?.solar_1?.P_total"
                :error="infoStore.error"
                unity="kvW"
              />
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
          <div class="mt-8" id="chart">
            <div class="flex items-center gap-2 ml-2">
              <span class="w-3 h-3 rounded-[50%] !bg-green-500"></span>
              <p>
                Max :
                {{
                  infoStore.info?.max?.solar_1[0]?.P_total?.toFixed(2) || "0.0"
                }}
                kvW
              </p>
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
              <InfoText
                title="P"
                :rate="infoStore.info.data?.solar_2?.P_total"
                :error="infoStore.error"
                unity="kvW"
              />
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
          <div class="mt-8" id="chart">
            <div class="flex items-center gap-2 ml-2">
              <span class="w-3 h-3 rounded-[50%] !bg-green-500"></span>
              <p>
                Max :
                {{
                  infoStore.info?.max?.solar_2[0]?.P_total?.toFixed(2) || "0.0"
                }}
                kvW
              </p>
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
      <div id="chart">
        <apexchart
          ref="chart"
          type="area"
          height="350"
          :options="chartOptions3"
          :series="series3"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
