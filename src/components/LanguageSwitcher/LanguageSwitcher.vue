<script setup lang="ts">
import { Trans } from "@/i18n/translation";
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const trans = new Trans();
const supportedLocales = trans.supportedLocales;

const switchLanguage = async (event)=>{
  const newLocale = event.target.value;
  
  await trans.switchLanguage(newLocale);
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