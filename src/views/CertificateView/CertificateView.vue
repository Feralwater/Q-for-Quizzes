<script setup lang="ts">
import stamp from '@/assets/images/stamp.svg';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';
import router from '@/router';
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';
import { decryptScore } from '@/utils/crypt';
import { useI18n } from 'vue-i18n';

const { getLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

const completedQuiz = getLocalStorage();

const certificateId = Number(router.currentRoute.value.params.certificateId);

const certificate = completedQuiz.find((quiz: CompletedQuiz) => quiz.certificateId === certificateId) as CompletedQuiz;

const {
  quizName,
  certificateId:certificateNumber,
  date,
  score,
  quizTaker,
} = certificate;

const quizRef = ref<HTMLDivElement | null>(null);

const onPrint = () => window.print();

const downloadPDF = (quizName: string, date: Date) => {
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

const i18n = useI18n();
</script>

<template>
  <header class="header">
    <v-icon
      color="lightTextColor"
      :title="$t('certificate.back')"
      @click="$router.back()"
    >
      mdi-arrow-left
    </v-icon>
    <span>
      {{ $t('certificate.isReady') }}
    </span>
    <v-icon
      color="lightTextColor"
      :title="$t('certificate.print')"
      @click="onPrint"
    >
      mdi-printer
    </v-icon>
    <v-icon
      color="lightTextColor"
      :title="$t('certificate.download')"
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
        {{ $t('certificate.title') }}
      </div>
      <div class="certificate__body">
        <p class="certificate__intro">
          {{ $t('certificate.subtitle') }}
        </p>
        <p class="certificate__recipientName">
          {{ quizTaker }}
        </p>
        <p class="certificate__achievingText">
          {{ $t('certificate.inRecognition') }}
        </p>
        <p class="certificate__score">
          {{ decryptScore(score) }}%
        </p>
        <div class="certificate__info">
          <span>Quiz: {{ quizName }}</span>
          <span>Date: {{ i18n.d(date, "short") }}</span>
        </div>
        <p class="certificate__congratulations">
          {{ $t('certificate.congratulations') }}
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