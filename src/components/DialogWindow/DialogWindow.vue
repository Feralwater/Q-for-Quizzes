<script setup lang="ts">

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

</script>

<template>
  <v-dialog width="500">
    <template #activator="{ props }">
      <component
        v-bind="props"
        :is="activator"
        v-on="on"
      />
    </template>

    <template #default="{ isActive }">
      <v-card :title="dialogTitle">
        <v-card-text>
          <component :is="dialogContent" />
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close Dialog"
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