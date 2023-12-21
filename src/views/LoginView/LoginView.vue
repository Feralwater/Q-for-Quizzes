<script setup lang="ts">
import { ref } from 'vue';
import wave from '@/assets/images/wave.png';
import avatar from '@/assets/images/avatar.svg';
import owl from '@/assets/images/owlNotebook.svg';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import router from '@/router';

const { setLocalStorage } = useLocalStorage('user', { firstName: '', secondName: '' });

const firstName = ref('');
const secondName = ref('');

const login = () => {
  setLocalStorage({ firstName: firstName.value, secondName: secondName.value });
  router.push({ name: 'Dashboard' });
};

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
          <v-form @submit.prevent="login">
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
              v-model="firstName"
              prepend-icon="mdi-account-circle"
              label="First Name"
              type="text"
            />

            <v-text-field
              v-model="secondName"
              prepend-icon="mdi-lock"
              label="Second Name"
              type="text"
            />

            <p>
              Please make sure you have entered your name correctly. It will be used on your certificates.
            </p>

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