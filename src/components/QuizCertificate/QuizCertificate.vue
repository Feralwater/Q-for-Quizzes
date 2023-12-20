<script setup lang="ts">

defineProps({
  stamp: {
    type: String,
  },
  quizName: {
    type: String,
    required: true,
    default: '',
  },
  certificateNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    required: true,
    default: '',
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  quizTaker: {
    type: String,
    required: true,
    default: '',
  },
});
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
          {{ quizTaker }}
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
        width="100"
        height="100"
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