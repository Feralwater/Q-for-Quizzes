<script setup lang="ts">
import { useQuizScore } from '@/stores/score';
import { type NavigationGuardNext, onBeforeRouteLeave, type RouteLocationNormalized } from 'vue-router';

const { score, isQuizCompleted } = useQuizScore();
const beforeRouteLeave = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (isQuizCompleted) {
    next(false);
  }
};

onBeforeRouteLeave(beforeRouteLeave);

</script>

<template>
  <div class="certificate-container">
    <div class="certificate-header">
      CERTIFICATE OF COMPLETION
    </div>
    <div class="certificate-body">
      <p class="intro-text">
        THIS IS AWARDED TO
      </p>
      <p class="recipient-name">
        John Doe
      </p>
      <p class="achievement-text">
        in recognition of achieving a
      </p>
      <p class="grade">
        {{ score * 10 }}%
      </p>
      <div class="certificate-info">
        <span>Class: A</span>
        <span>Date: {{ new Date().toDateString() }}</span>
      </div>
      <p class="congratulations-text">
        Well done
      </p>
    </div>
    <div class="certificate-footer">
      BRIGHTWELL ACADEMY
    </div>
  </div>
</template>


<style scoped>
.certificate-container {
  width: 600px;
  height: 464px;
  border: 2px solid #000;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  font-family: 'Arial', sans-serif;
}

.certificate-header {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
}

.certificate-body {
  text-align: center;
}

.intro-text, .achievement-text, .congratulations-text {
  font-size: 18px;
  margin: 5px 0;
}

.recipient-name {
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
}

.grade {
  font-size: 24px;
  margin: 10px 0;
}

.certificate-info {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.certificate-footer {
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
}
</style>