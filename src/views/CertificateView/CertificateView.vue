<script setup lang="ts">
import stamp from '@/assets/images/stamp.svg';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';
import router from '@/router';
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

const { getLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

const completedQuiz = getLocalStorage();

const certificateId = Number(router.currentRoute.value.params.certificateId);

const certificate = completedQuiz.find((quiz: CompletedQuiz) => quiz.certificateId === certificateId);

const {
  quizName,
  certificateId:certificateNumber,
  date,
  score,
  quizTaker,
} = certificate;

const quizRef = ref<HTMLDivElement | null>(null);

const onPrint = () => window.print();

const downloadPDF = (quizName: string, date: string) => {
  const clone = quizRef.value?.cloneNode(true) as HTMLDivElement;
  clone.style.margin = '0';

  const options = {
    margin: 10,
    filename: `${quizName} - ${date}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };

  html2pdf(clone, options);
};

</script>

<template>
  <header class="header">
    <span>
      Your certificate is ready!</span>
    <v-icon
      color="lightTextColor"
      @click="onPrint"
    >
      mdi-printer
    </v-icon>
    <v-icon
      color="lightTextColor"
      @click="downloadPDF(quizName, date)"
    >
      mdi-download
    </v-icon>
  </header>
  <div
    ref="quizRef"
    class="certificate"
  >
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
@import "CertificateView.scss";
</style>