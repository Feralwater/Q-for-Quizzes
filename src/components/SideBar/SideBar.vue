<script setup lang="ts">
import logo from '@/assets/logo.svg';
import { computed, ref, watch } from 'vue';
import { useDisplay } from 'vuetify';
import { Routers } from '@/router/Routers';

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    default: 0,
  },
});

const roundProgress = computed(() => Math.round(props.progress));

const { mdAndDown } = useDisplay();
const drawer = ref(!mdAndDown.value);

watch(mdAndDown, (newVal) => {
  drawer.value = !newVal;
});

</script>

<template>
  <v-layout>
    <v-app-bar-nav-icon
      v-if="mdAndDown"
      class="sidebar__burger"
      @click="drawer = !drawer"
    />
    <v-navigation-drawer
      v-model="drawer"
      :temporary="mdAndDown"
      :permanent="!mdAndDown"
    >
      <div class="sidebar">
        <h1 class="sidebar__header">
          <v-img
            :src="logo"
            width="40px"
            height="40px"
            alt="Vuejs Logo"
          />
          Vuejs Quiz
        </h1>
        <v-list nav>
          <v-list-item
            class="sidebar__item"
            link
            prepend-icon="mdi-home"
            :href="Routers.Dashboard"
            title="Back to Dashboard"
          />
        </v-list>
        <div class="sidebar__footer">
          {{ roundProgress }}% completed
          <v-progress-linear
            aria-label="Progress Bar"
            color="primaryDark"
            :model-value="props.progress"
            class="sidebar__progress"
            height="20"
          />
        </div>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped>
@import './SideBar.scss';
</style>