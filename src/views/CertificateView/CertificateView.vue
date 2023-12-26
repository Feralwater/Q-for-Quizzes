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

const quizCertificateRef = ref();

const onPrint = () => {
  const printContent = quizCertificateRef.value.$el.innerHTML;
  const windowPrint = window.open('', '_blank');

  const styles = [...document.styleSheets]
    .map(styleSheet => {
      try {
        return [...styleSheet.cssRules]
          .map(rule => rule.cssText)
          .join('');
      } catch (e) {
        console.warn('Cannot access stylesheet:', styleSheet);
        return '';
      }
    })
    .join('\n');

  windowPrint?.document.write(`
    <html lang="en">
      <head>
        <title>Print</title>
        <style>${styles}</style>
      </head>
      <body>
        ${printContent}
      </body>
    </html>
  `);

  windowPrint?.document.close();
  windowPrint?.focus();
  windowPrint?.print();
  windowPrint?.close();
};

const quizRef = ref<HTMLDivElement | null>(null);

const downloadPDF = (quizName: string, date: string, id: number) => {

  const options = {
    margin: 10,
    filename: `${quizName} - ${date}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };

  html2pdf(quizRef.value, options);
};

</script>

<template>
  <header>
    <span>
      Your certificate is ready!</span>
    <v-icon
      :class="{
        'mr-6': true,
     
      }"
      color="primary"
      @click="onPrint"
    >
      mdi-printer
    </v-icon>
    <v-icon
      :class="{
        'mr-6': true,
     
      }"
      color="primary"
      @click="downloadPDF(quizName, date, certificateId)"
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