<script setup lang="ts">
import scarecrow from '@/assets/images/scarecrow.png';
import { useDisplay } from 'vuetify';
import { trans } from '@/i18n/translation';
import { Routers } from '@/router/Routers'

const { mdAndDown } = useDisplay();
</script>

<template>
  <v-container>
    <p class="error__404">
      404 Not Found
    </p>
    <main
      :class="{
        error__main: true,
        error__main__mobile: mdAndDown,
      }"
    >
      <div class="error__image">
        <v-img
          :src="scarecrow"
          alt="scarecrow"
        />
      </div>
      <div class="error__text">
        <h1
          :class="{
            error__header: true,
            error__header__mobile: mdAndDown,
          }"
        >
          Oops!
        </h1>
        <p
          :class="{
            error__description: true,
            error__description__mobile: mdAndDown,
          }"
        >
          The page you are looking for might be removed or is temporarily unavailable.
        </p>
        <router-link
          :to="Routers.Dashboard"
          :class="{
            error__link: true,
            error__link__mobile: mdAndDown,
          }"
        >
          Back to homepage
        </router-link>
      </div>
    </main>
  </v-container>
</template>

<style scoped>
@import 'NotFoundView.scss';
</style>