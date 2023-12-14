<script setup lang="ts">
defineProps({
  onClick: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <v-btn
    color="primary"
    class="infoButton"
    icon
    @click="onClick"
  >
    <v-icon
      color="lightTextColour"
      icon="mdi-book-open-page-variant"
      size="small"
    />
  </v-btn>
</template>

<style scoped>
@import 'RulesButton.scss';
</style>