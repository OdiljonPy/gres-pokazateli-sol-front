<template>
  <div class="relative z-[20000]">
    <label
      v-if="label"
      for=""
      class="mb-1 sm:mb-2 font-medium text-sm sm:text-base flex justify-start"
      :class="error ? 'text-[red]' : ''"
      >{{ label }}</label
    >
    <el-select
      v-model="value"
      size="large"
      :placeholder="placeholder"
      @change="handleSelect"
      clearable
      @clear="clearSelect"
      class="w-full border border-gray-500 rounded-[4px] relative z-[9999]"
      :class="error ? 'border border-[red] rounded-[4px]' : ''"
    >
      <el-option
        v-for="item in data"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  data?: {
    value: string;
    label: string;
  }[];
  modelValue: string | number;
  label?: string;
  placeholder?: string;
  error?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  error: false,
});
const value = ref(props.modelValue);

watch(
  () => props.modelValue,
  () => {
    value.value = props.modelValue;
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
  (e: "changeSelect", value: any): void;
}>();

function handleSelect(e: any) {
  emit("update:modelValue", e);
  emit("changeSelect", true);
}

function clearSelect() {
  console.log("run");
}
</script>
