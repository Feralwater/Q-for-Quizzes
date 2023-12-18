<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mdAndDown } = useDisplay();
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
  >
    <v-icon
      color="lightTextColour"
      icon="mdi-book-open-page-variant"
      :size="mdAndDown ? '24' : '50'"
      aria-hidden="true"
    />
  </v-btn>
</template>
<style scoped>
@import 'RulesButton.scss';
</style>