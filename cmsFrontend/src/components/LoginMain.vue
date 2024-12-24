<template>
  <main class="flex flex-col items-center gap-6 w-64 sm:w-96">
    <div class="flex flex-col gap-2 w-full">
      <label for="uname">{{ t('username') }}</label>
      <input type="text" :placeholder="t('enterUsername')" name="uname" required class="input input-bordered w-full">
    </div>

    <div class="flex flex-col gap-2 w-full">
      <div class="flex justify-between">
        <label for="psw">{{ t('password') }}</label>
        <button @click="togglePasswordVisibility" class="flex items-center gap-1">
          <Icon :icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'" class="w-5 h-5" />
          {{ showPassword ? t('hide') : t('show') }}
        </button>
      </div>

      <input id="passwordInput" :type="showPassword ? 'text' : 'password'" v-model="password"
        :placeholder="t('enterPassword')" name="psw" required class="input input-bordered w-full">

      <div class="flex gap-2 justify-start w-full">
        <input id="rememberMe" type="checkbox" v-model="rememberMe" name="remember" class="checkbox checkbox-md">
        <label for="rememberMe" class="cursor-pointer">{{ t('remember') }}</label>
      </div>

    </div>

    <router-link to="/dashboard" class="w-full"><button type="submit" class="btn btn-accent w-full text-base">{{
      t('login')
        }}</button></router-link>
  </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { ref } from 'vue';

const rememberMe = ref(false)
const password = ref('')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
