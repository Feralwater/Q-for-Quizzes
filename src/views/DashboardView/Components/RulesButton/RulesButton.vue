<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useI18n } from 'vue-i18n';

const { mdAndDown } = useDisplay();
const i18n = useI18n();
</script>

<template>
  <v-btn
    color="primary"
    variant="outlined"
    :class="{
      infoButton: true,
      infoButton__mobile: mdAndDown,
    }"
    icon
    aria-label="Open book"
    :title="i18n.t('quizRules')"
  >
    <v-icon
      color="lightTextColour"
      icon="mdi-book-open-page-variant"
      :size="mdAndDown ? '24' : '50'"
    />
  </v-btn>
</template>
<style scoped>
@import 'RulesButton.scss';
</style>