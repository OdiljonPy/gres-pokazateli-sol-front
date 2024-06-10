<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="bg-[#F7F7F7] px-6 py-5 rounded-[6px] text-lg w-[400px]">
      <p class="text-center font-medium text-2xl">Log in</p>
      <form class="mt-1">
        <div class="mb-4">
          <label
            for="phone"
            class="mb-2 text-base font-medium transition duration-300"
            :class="v$.login.$error ? 'text-[red]' : ''"
            >Login</label
          >
          <SInput
            placeholder="Login"
            type="phone"
            v-model="state.login"
            :error="v$.login.$error"
            customClass="!p-2 bg-white"
            class="w-full"
          >
          </SInput>
        </div>

        <div class="mt-4">
          <label
            for="password"
            class="mb-2 font-medium transition duration-300 text-base"
            :class="v$.password.$error ? 'text-[red]' : ''"
            >Parol</label
          >
          <SInput
            placeholder="Parol"
            v-model="state.password"
            :error="v$.password.$error"
            type="password"
            inputClass="h-[20px]"
            custom-class=" "
          />
        </div>

        <SButton
          variant="blue"
          class="w-full !rounded-0 mt-5"
          @click.prevent="formLoginData"
          :loading="loading"
          >Kirish</SButton
        >
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import SButton from "@/components/shared/button/SButton.vue";
import SInput from "@/components/shared/form/SInput.vue";
import { useLoginStore } from "@/store/auth";
import { useRouter } from "vue-router";
const router = useRouter();

const loginStore = useLoginStore();

const state = reactive({
  password: "",
  login: "",
});
const rules = computed(() => {
  return {
    password: {
      required,
    },
    login: { required },
  };
});
const v$ = useVuelidate(rules, state);
const loading = ref(false);
const formLoginData = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    const option = {
      login: state.login,
      password: state.password,
    };
    loginStore.login(option);
  }
};

onMounted(() => {
  if (sessionStorage.getItem("token")) router.push("/");
});
</script>
