<script setup lang="ts">

import { useDisplay } from 'vuetify';

defineProps({
  dialogTitle: {
    type: String,
    required: true,
  },
  activator: {
    type: Object,
    required: true,
  },
  dialogContent: {
    type: Object,
    required: true,
  },
});

const { xs } = useDisplay();
</script>

<template>
  <v-dialog
    width="500"
  >
    <template #activator="{ props }">
      <component
        v-bind="props"
        :is="activator"
      />
    </template>

    <template #default="{ isActive }">
      <v-card
        :class="{
          dialog: true,
          dialog__mobile: xs,
        }"
      >
        <v-card-title class="dialog__title">
          {{ dialogTitle }}
        </v-card-title>
        <component :is="dialogContent" />

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="primary"
            :text="$t('quizRules.closeDialog')"
            @click="isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
@import 'DialogWindow.scss';
</style>