<script setup lang="ts">
import { ref } from 'vue';
import wave from '@/assets/images/wave.png';
import avatar from '@/assets/images/avatar.svg';
import owl from '@/assets/images/owlNotebook.svg';

const username = ref('');
const password = ref('');

</script>


<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="d-flex align-end"
      >
        <v-img
          :src="owl"
          alt="owl looking at notebook"
          class="owl"
        />
        <v-img
          :src="wave"
          alt="wave"
          class="wave"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <div class="login-content">
          <v-form>
            <div class="text-center">
              <v-img
                width="100"
                height="100"
                :src="avatar"
                alt="user avatar"
                class="avatar"
              />
              <h2 class="title">
                Welcome
              </h2>
            </div>

            <v-text-field
              prepend-icon="mdi-account-circle"
              label="Username"
              type="text"
            />

            <v-text-field
              prepend-icon="mdi-lock"
              label="Password"
              type="password"
            />

            <v-btn
              text
              color="primary"
              class="mb-4"
            >
              Forgot Password?
            </v-btn>

            <v-btn
              block
              color="primary"
              type="submit"
            >
              Login
            </v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>

</style>