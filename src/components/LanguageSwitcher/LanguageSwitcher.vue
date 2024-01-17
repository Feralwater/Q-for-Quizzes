<script setup lang="ts">
import { trans } from '@/i18n/translation';
import { type Locale, useI18n } from 'vue-i18n';
import plFlag from '@/assets/images/flags/pl.svg';
import enFlag from '@/assets/images/flags/en.svg';
import { useLocale } from 'vuetify';

const flags: Record<Locale, string> = {
  'pl-PL': plFlag,
  'en-US': enFlag,
};

const { t, locale } = useI18n();
const supportedLocales = trans.supportedLocales;

const { current } = useLocale();
const switchLanguage = async (newLocale: Locale) => {
  current.value = newLocale.split('-')[0];
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
    height="12"
    @click="switchLanguage(sLocale)"
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