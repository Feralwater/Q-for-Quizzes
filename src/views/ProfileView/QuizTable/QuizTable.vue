<script setup lang="ts">
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';
import QuizCertificate from '@/components/QuizCertificate/QuizCertificate.vue';
import { ref } from 'vue';
import html2pdf from "html2pdf.js";
import { useDisplay } from 'vuetify';

const headers = [
  {
    title: 'Quiz Name',
    key: 'quizName',
    sortable: true,
  },
  {
    title: 'Score',
    key: 'score',
    sortable: true,
  },
  {
    title: 'Date',
    key: 'date',
    sortable: true,
  },
  {
    title: 'Quiz Taker',
    key: 'quizTaker',
    sortable: false,
  },
  {
    title: 'Certificate Number',
    key: 'certificateId',
    sortable: true,
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
];

const { getLocalStorage:getCompletedQuiz, setLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

const completedQuiz = ref(getCompletedQuiz());
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

const selectedQuiz = ref<CompletedQuiz>();

const downloadPDF = (quizName: string, date: string, id: number) => {
  selectedQuiz.value = completedQuiz.value.find(quiz => quiz.certificateId === id);
  const element = quizCertificateRef.value.$el;

  const options = {
    margin: 10,
    filename: `${quizName} - ${date}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  };

  html2pdf(element, options);
};

const onDelete = (id: number) => {
  const newCompletedQuiz = completedQuiz.value.filter(quiz => quiz.certificateId !== id);
  setLocalStorage(newCompletedQuiz);
  completedQuiz.value = newCompletedQuiz;
};

const { mdAndDown } = useDisplay();
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="completedQuiz"
    :sort-by="[{key: 'date', order: 'asc'}]"
  >
    <template #headers="{ columns, isSorted, getSortIcon, toggleSort }">
      <tr class="table__header">
        <template
          v-for="column in columns"
          :key="column.key"
        >
          <td>
            <span
              :class="{
                'mr-2': true,
                table__pointer: column.sortable,
                table__mobile: mdAndDown,
              }"
              @click="column.sortable ? toggleSort(column) : null"
            >
              {{ column.title }}
            </span>
            <template v-if="isSorted(column)">
              <v-icon :icon="getSortIcon(column)" />
            </template>
          </td>
        </template>
      </tr>
    </template>
    <template #item.actions="{ item }">
      <v-icon
        :class="{
          'mr-6': true,
          'mb-2 mt-2': mdAndDown,
        }"
        color="primary"
        @click="onPrint"
      >
        mdi-printer
      </v-icon>
      <v-icon
        :class="{
          'mr-6': true,
          'mb-2': mdAndDown,
        }"
        color="primary"
        @click="downloadPDF(item.quizName, item.date, item.certificateId)"
      >
        mdi-download
      </v-icon>
      <v-icon
        :class="{
          'mb-2': mdAndDown,
        }"
        color="danger"
        @click="onDelete(item.certificateId)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <div class="d-none">
    <quiz-certificate
      ref="quizCertificateRef"
      :certificate-number="selectedQuiz?.certificateId"
      :quiz-taker="selectedQuiz?.quizTaker"
      :score="selectedQuiz?.score"
      :quiz-name="selectedQuiz?.quizName"
      :date="selectedQuiz?.date"
    />
  </div>
</template>

<style scoped>
@import "QuizTable.scss";
</style>