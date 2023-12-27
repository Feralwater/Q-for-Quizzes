<script setup lang="ts">
defineProps({
  onConfirm: {
    type: Function,
    required: true,
  },
  dialog: {
    type: Boolean,
    required: true,
    default: false,
  },
  deletedItem: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:dialog']);

</script>

<template>
  <div class="text-center">
    <v-dialog
      :model-value="dialog"
      width="auto"
      @update:model-value="emit('update:dialog', $event)"
    >
      <v-card>
        <v-card-title class="headline">
          Delete Item
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete {{ deletedItem }}?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            variant="outlined"
            color="primary"
            @click="emit('update:dialog', false)"
          >
            <v-icon>mdi-close</v-icon>
            <span>Cancel</span>
          </v-btn>
          <v-btn
            variant="outlined"
            color="danger"
            @click="onConfirm"
          >
            <v-icon>mdi-check</v-icon>
            <span>Confirm</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
@import "ConformationDialog.scss";
</style>