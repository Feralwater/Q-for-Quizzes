<script setup lang="ts">
import { useLocalStorage } from '@/views/QuizView/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';
import QuizCertificate from '@/components/QuizCertificate/QuizCertificate.vue';
import { ref } from 'vue';

const headers = [
  {
    title: 'Quiz Name',
    key: 'quizName',
  },
  {
    title: 'Score',
    key: 'score',
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Quiz Taker',
  },
  {
    title: 'Certificate Number',
    key: 'certificateId',
  },
  {
    title: 'Actions',
    key: 'actions',
  },
];

const { getLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

const completedQuiz = getLocalStorage();
const quizCertificateRef = ref();
const onPrint = () => {
  const printContent = quizCertificateRef.value.$el.innerHTML;
  const windowPrint = window.open('', '_blank');
  
  const styles = [...document.styleSheets]
    .map(styleSheet => {
        return [...styleSheet.cssRules]
          .map(rule => rule.cssText)
          .join('');
    })
    .join('\n');

  windowPrint?.document.write(`
    <html>
      <head>
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
              class="mr-2 table__title"
              @click="() => toggleSort(column)"
            >{{ column.title }}</span>
            <template v-if="isSorted(column)">
              <v-icon :icon="getSortIcon(column)" />
            </template>
          </td>
        </template>
      </tr>
    </template>
    <template #item.actions>
      <v-icon
        class="mr-6"
        color="primary"
        @click="onPrint"
      >
        mdi-printer
      </v-icon>
      <v-icon
        class="mr-6"
        color="primary"
        @click="()=>{console.log('hello')}"
      >
        mdi-download
      </v-icon>
      <v-icon
        color="danger"
        @click="()=>{console.log('hello')}"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <div class="d-none">
    <quiz-certificate ref="quizCertificateRef" />
  </div>
</template>

<style scoped>
@import "QuizTable.scss";
</style>