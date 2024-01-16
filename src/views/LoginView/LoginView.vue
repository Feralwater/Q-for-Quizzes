<script setup lang="ts">
import { computed, ref } from 'vue';
import wave from '@/assets/images/wave.png';
import avatar from '@/assets/images/avatar.svg';
import owl from '@/assets/images/owlNotebook.svg';
import router from '@/router';
import { Routers } from '@/router/Routers';
import { useAuthStore } from '@/stores/auth';
import { useDisplay } from 'vuetify';
import { trans } from '@/i18n/translation';

const { login } = useAuthStore();

const firstName = ref('');
const secondName = ref('');
const isFormValid = computed(() => !!firstName.value && !!secondName.value);

const handleLogin = () => {
  login({ firstName: firstName.value, secondName: secondName.value });
  router.push(trans.i18nRoute({ name: 'dashboard' }));
};

const { xs } = useDisplay();
</script>

<template>
  <v-container
    fluid
    fill-height
  >
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
        class="image"
      >
        <v-form
          class="login__form"
          @submit.prevent="handleLogin"
        >
          <div class="login">
            <v-img
              :src="avatar"
              alt="user avatar"
              :class="{
                login__avatar: true,
                login__avatar__mobile: xs,
              }"
            />
            <h2
              :class="{
                login__title: true,
                login__title__mobile: xs,
              }"
            >
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