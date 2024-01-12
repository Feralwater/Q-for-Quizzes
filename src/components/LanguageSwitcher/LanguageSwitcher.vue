<script setup lang="ts">
import { Trans } from '@/i18n/translation';
import { useI18n } from 'vue-i18n';
import plFlag from '@/assets/images/flags/pl.svg';
import enFlag from '@/assets/images/flags/en.svg';

const flags = {
  'pl-PL': plFlag,
  'en-US': enFlag,
  pl: plFlag,
  en: enFlag,
};

const { t, locale } = useI18n();
const trans = new Trans();
const supportedLocales = trans.supportedLocales;

const switchLanguage = async (newLocale) => {
  await trans.switchLanguage(newLocale);
};
</script>

<template>
  <v-btn
    v-for="sLocale in supportedLocales"
    :key="`locale-${sLocale}`"
    :class="{
      'language-switcher': true,
      'language-switcher__active': locale === sLocale,
    }"
    :title="t(`locale.${sLocale}`)"
    @click="switchLanguage(sLocale)"
    height="12"
  >
    <v-img
      width="20"
      :src="`${flags[sLocale]}`"
      :alt="`Switch to ${sLocale} language`"
    />
  </v-btn>
</template>

<style scoped>
.language-switcher {
  width: 20px;
  min-width: 20px;
  padding: 0;
  border-radius: 0;
  margin-left: 10px;
}
</style>