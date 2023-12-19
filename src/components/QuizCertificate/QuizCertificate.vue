<script setup lang="ts">
import stamp from '@/assets/images/stamp.svg';

const recipientName = 'John Doe';
const score = 58;

const date = new Date().toLocaleDateString('en-Us', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const quizName = 'Vue Basics';
const certificateNumber = '1234567890';
</script>

<template>
  <div class="certificate">
    <div class="certificate__content">
      <div class="certificate__header">
        CERTIFICATE OF COMPLETION
      </div>
      <div class="certificate__body">
        <p class="certificate__intro">
          THIS IS AWARDED TO
        </p>
        <p class="certificate__recipientName">
          {{ recipientName }}
        </p>
        <p class="certificate__achievingText">
          in recognition of achieving a
        </p>
        <p class="certificate__score">
          {{ score }}%
        </p>
        <div class="certificate__info">
          <span>Quiz: {{ quizName }}</span>
          <span>Date: {{ date }}</span>
        </div>
        <p class="certificate__congratulations">
          Well done!
        </p>
      </div>
      <div class="certificate__footer">
        Q for Quizzes app
      </div>
      <v-img
        class="certificate__stamp"
        :src="stamp"
        alt="stamp"
      />
      <div class="certificate__number">
        {{ certificateNumber }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "QuizCertificate.scss";
</style>