<script setup lang="ts">
import { Trans } from "@/i18n/translation";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const supportedLocales = Trans.supportedLocales;

const switchLanguage = async (event)=>{
  const newLocale = event.target.value;
  
  await Trans.switchLanguage(newLocale);
};
</script>

<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<style scoped>

</style>