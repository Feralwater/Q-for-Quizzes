<script setup lang="ts">
defineProps({
  snackbar: {
    type: Boolean,
    required: true,
  },
  snackbarText: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:snackbar']);
</script>

<template>
  <div class="text-center">
    <v-snackbar
      :model-value="snackbar"
      timeout="2000"
      :color="color"
      @update:model-value="emit('update:snackbar', $event)"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn
          color="lightTextColor"
          variant="text"
          icon="mdi-close"
          @click="emit('update:snackbar', false)"
        />
      </template>
    </v-snackbar>
  </div>
</template>

<style scoped>

</style>