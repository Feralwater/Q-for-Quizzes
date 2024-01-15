<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useDisplay } from 'vuetify';
import { trans } from '@/i18n/translation';

const props = defineProps({
  progress: {
    type: Number,
    required: false,
    default: undefined,
  },
  headerName: {
    type: String,
    required: true,
    default: '',
  },
  headerIcon: {
    type: String,
    required: true,
    default: '',
  },
});

const roundProgress = computed(() => {
  if (props.progress === undefined) return;
  return Math.round(props.progress);
});

const { mdAndDown } = useDisplay();
const drawer = ref(!mdAndDown.value);

watch(mdAndDown, (newVal) => {
  drawer.value = !newVal;
});

</script>

<template>
  <v-layout 
    aria-label="Sidebar"
  >
    <v-app-bar-nav-icon
      v-if="mdAndDown"
      class="sidebar__burger"
      aria-label="Open navigation drawer"
      @click="drawer = !drawer"
    />
    <v-navigation-drawer
      v-model="drawer"
      :temporary="mdAndDown"
      :permanent="!mdAndDown"
      aria-label="Main navigation drawer"
    >
      <div
        class="sidebar"
        role="navigation"
      >
        <h1 class="sidebar__header">
          <v-img
            :src="headerIcon"
            width="60"
            height="60"
            :alt="`${headerName} icon`"
          />
          {{ headerName }}
        </h1>
        <v-list
          nav
          aria-label="Main navigation"
          role="listbox"
        >
          <v-list-item
            class="sidebar__item"
            prepend-icon="mdi-home"
            role="option"
          >
            <router-link
              :to="trans.i18nRoute({ name: 'dashboard' })"
              class="sidebar__Link"
            >
              {{ $t('sidebar.goToDashboard') }}
            </router-link>
          </v-list-item>
          <v-list-item
            class="sidebar__item"
            prepend-icon="mdi-account"
            role="option"
          >
            <router-link
              :to="trans.i18nRoute({ name: 'profile' })"
              class="sidebar__Link"
            >
              {{ $t('sidebar.goToMyProfile') }}
            </router-link>
          </v-list-item>
        </v-list>
        <div
          v-if="progress !== undefined"
          class="sidebar__footer"
        >
          {{ roundProgress }}% completed
          <v-progress-linear
            aria-label="Quiz progress"
            :aria-valuenow="roundProgress"
            aria-valuemin="0"
            aria-valuemax="100"
            color="primaryDark"
            :model-value="progress"
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