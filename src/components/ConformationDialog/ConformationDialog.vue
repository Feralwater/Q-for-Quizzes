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
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:dialog']);

const closeDialog = () => {
  emit('update:dialog', false);
};

</script>

<template>
  <v-dialog
    :model-value="dialog"
    width="auto"
    @update:model-value="emit('update:dialog', $event)"
  >
    <v-card>
      <v-card-title class="headline">
        <span>
          {{ title }}
        </span>
        <v-icon
          size="24"
          color="grey"
          class="close-icon"
          @click="closeDialog"
        >
          mdi-close
        </v-icon>
      </v-card-title>
      <v-card-text class="text-center">
        Are you sure you want to delete
        <span class="colored">
          {{ deletedItem }}
        </span>
        ?
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="closeDialog"
        >
          No
        </v-btn>
        <v-btn
          color="danger"
          @click="onConfirm"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
@import "ConformationDialog.scss";
</style>