<script setup lang="ts">
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CompletedQuiz } from '@/types/completedQuiz';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import router from '@/router';
import { Routers } from '@/router/Routers';
import { headers } from '@/views/ProfileView/components/QuizTable/headers';
import ConformationDialog from '@/components/ConformationDialog/ConformationDialog.vue';
import SnackBar from '@/components/SnackBar/SnackBar.vue';
import { decryptScore } from '@/utils/crypt';
import { useI18n } from 'vue-i18n';

const { getLocalStorage:getCompletedQuiz, setLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

const encryptedCompletedQuiz = getCompletedQuiz().map(quiz => ({
  ...quiz,
score: decryptScore(quiz.score),
}));
const completedQuiz = ref(encryptedCompletedQuiz);
const dialog = ref(false);
const selectedQuizId = ref<number | null>(null);
const deletedItem = ref('');
const snackbar = ref(false);
const snackbarText = ref('');

const onDelete = (id: number) => {
  dialog.value = true;
  selectedQuizId.value = id;
  deletedItem.value = `your certificate number ${id}`;
};

const onConfirm = () => {
  const newCompletedQuiz = completedQuiz.value.filter(quiz => quiz.certificateId !== selectedQuizId.value);
  setLocalStorage(newCompletedQuiz);
  completedQuiz.value = newCompletedQuiz;
  dialog.value = false;
  snackbar.value = true;
  snackbarText.value = `Certificate number ${selectedQuizId.value} has been deleted`;
};

const { mdAndDown } = useDisplay();

const navigateToCertificate = (id: number) => {
  router.push(Routers.CertificateId(String(id)));
};
const i18n = useI18n();

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat(i18n.locale.value).format(date);
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
              {{ i18n.t(`profileQuizzes.${column.key}`) }}
            </span>
            <template v-if="isSorted(column)">
              <v-icon :icon="getSortIcon(column)" />
            </template>
          </td>
        </template>
      </tr>
    </template>
    <template #item.date="{ item }">
      {{ formatDate(new Date(item.date)) }}
    </template>
    <template #item.actions="{ item }">
      <v-icon
        class="mr-3"
        color="primary"
        :title="i18n.t('profileQuizzes.viewCertificate')"
        @click="navigateToCertificate(item.certificateId)"
      >
        mdi-eye
      </v-icon>
      <v-icon
        color="danger"
        :title="i18n.t('profileQuizzes.deleteQuiz')"
        @click="onDelete(item.certificateId)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <conformation-dialog
    v-model:dialog="dialog"
    :on-confirm="onConfirm"
    :deleted-item="deletedItem"
    title="Delete Certificate"
    @update:dialog="dialog = $event"
  />
  <snack-bar
    v-model:snackbar="snackbar"
    :snackbar-text="snackbarText"
    color="success"
    @update:snackbar="snackbar = $event"
  />
</template>

<style scoped>
@import "QuizTable.scss";
</style>