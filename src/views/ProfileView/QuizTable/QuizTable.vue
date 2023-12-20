<script setup lang="ts">
import { useLocalStorage } from '@/views/QuizView/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';

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
        @click="()=>{console.log('hello')}"
      >
        mdi-printer
      </v-icon>
      <v-icon
        color="primary"
        @click="()=>{console.log('hello')}"
      >
        mdi-download
      </v-icon>
    </template>
  </v-data-table>
</template>

<style scoped>
@import "QuizTable.scss";
</style>