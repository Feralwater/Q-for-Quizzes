<script setup lang="ts">



</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-title class="headline">
          Delete Item
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete this item?
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            variant="outlined"
            color="primary"
            @click="dialog = false"
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