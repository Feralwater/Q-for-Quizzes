<script setup lang="ts">
import { computed, ref } from 'vue';
import wave from '@/assets/images/wave.png';
import avatar from '@/assets/images/avatar.svg';
import owl from '@/assets/images/owlNotebook.svg';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import router from '@/router';
import type { User } from '@/types/user';

const { setLocalStorage } = useLocalStorage<User>('user', { firstName: '', secondName: '' });

const firstName = ref('');
const secondName = ref('');
const isFormValid = computed(() => !!firstName.value && !!secondName.value);

const login = () => {
  setLocalStorage({ firstName: firstName.value, secondName: secondName.value });
  router.push({ name: 'dashboard' });
};

</script>


<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        class="image"
      >
        <v-img
          :src="owl"
          alt="owl looking at notebook"
          class="image__owl"
        />
        <v-img
          :src="wave"
          alt="wave"
          class="image__wave"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-form @submit.prevent="login">
          <div class="login">
            <v-img
              width="100"
              height="100"
              :src="avatar"
              alt="user avatar"
              class="login__avatar"
            />
            <h2 class="login__title">
              Welcome
            </h2>

            <v-text-field
              v-model="firstName"
              prepend-icon="mdi-account"
              label="First Name"
              type="text"
              variant="underlined"
              color="primary"
              clearable
            />

            <v-text-field
              v-model="secondName"
              prepend-icon="mdi-account"
              label="Second Name"
              type="text"
              variant="underlined"
              color="primary"
              clearable
            />

            <p class="login__info">
              Please make sure you have entered your name correctly. It will be used on your certificates.
            </p>
          </div>
          <v-btn
            block
            :disabled="!isFormValid"
            color="primary"
            type="submit"
          >
            <span class="login__button">
              Login
            </span>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
@import 'LoginView.scss';
</style>