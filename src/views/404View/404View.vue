<script setup lang="ts">
import scarecrow from '@/assets/images/scarecrow.png';
import { Routers } from '@/router/Routers';
</script>

<template>
  <v-container>
    <p class="error__404">
      404 Not Found
    </p>
    <main class="error__main">
      <div class="error__image">
        <v-img
          :src="scarecrow"
          alt="scarecrow"
        />
      </div>
      <div class="error__text">
        <h1 class="error__header">
          I have bad news for you
        </h1>
        <p class="error__description">
          The page you are looking for might be removed or is temporarily unavailable.
        </p>
        <router-link
          :to="Routers.Dashboard"
          class="error__link"
        >
          Back to homepage
        </router-link>
      </div>
    </main>
  </v-container>
</template>

<style scoped>
@import '404View.scss';
</style>