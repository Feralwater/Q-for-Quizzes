<script setup lang="ts">
import SideBar from '@/components/SideBar/SideBar.vue';
import { useDisplay } from 'vuetify';
import owl from '@/assets/images/owl.svg';
import QuizTable from '@/views/ProfileView/components/QuizTable/QuizTable.vue';

const { mdAndDown } = useDisplay();
</script>

<template>
  <div
    role="main"
    aria-label="My Profile"
    :class="{
      profile: true,
      profile__mobile: mdAndDown
    }"
  >
    <side-bar
      :header-icon="owl"
      :header-name="$t('profile.myProfile')"
    />
    <v-container>
      <quiz-table />
    </v-container>
  </div>
</template>

<style scoped>
@import "ProfileView.scss";
</style>