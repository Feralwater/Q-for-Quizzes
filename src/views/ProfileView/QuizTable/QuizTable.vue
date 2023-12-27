<script setup lang="ts">
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import router from '@/router';
import { Routers } from '@/router/Routers';
import { headers } from '@/views/ProfileView/QuizTable/headers';
import ConformationDialog from '@/components/ConformationDialog/ConformationDialog.vue';

const { getLocalStorage:getCompletedQuiz, setLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

const completedQuiz = ref(getCompletedQuiz());

const onDelete = (id: number) => {
  const newCompletedQuiz = completedQuiz.value.filter(quiz => quiz.certificateId !== id);
  setLocalStorage(newCompletedQuiz);
  completedQuiz.value = newCompletedQuiz;
};

const { mdAndDown } = useDisplay();

const navigateToCertificate = (id: number) => {
  router.push(Routers.CertificateId(String(id)));
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
        class="mr-3"
        color="primary"
        @click="navigateToCertificate(item.certificateId)"
      >
        mdi-eye
      </v-icon>
      <v-icon
        color="danger"
        @click="onDelete(item.certificateId)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <conformation-dialog />
</template>

<style scoped>
@import "QuizTable.scss";
</style>