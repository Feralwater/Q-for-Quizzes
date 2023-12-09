<script setup lang="ts">
import logo from '@/assets/logo.svg';

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>

<template>
  <div class="sidebar">
    <h1 class="sidebar__header">
      <v-img
        :src="logo"
        width="50px"
        height="50px"
      />
      Vuejs Quiz
    </h1>
    <div class="sidebar__footer">
      {{ props.progress }}% completed
      <v-progress-linear
        color="primaryDark"
        :model-value="props.progress"
        class="sidebar__progress"
        height="20"
      />
    </div>
  </div>
</template>

<style scoped>
@import './SideBar.scss';
</style>