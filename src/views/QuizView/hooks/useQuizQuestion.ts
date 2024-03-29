import { computed, onMounted, ref } from 'vue';
import { useQuizScore } from '@/stores/score';
import { useVisibilityChange } from '@/hooks/useVisibilityChange';
import { useRoute } from 'vue-router';
import router from '@/router';
import type { QuizKeys } from '@/types/quizKeys';
import { decryptAnswer, encryptScore } from '@/utils/crypt';
import { quizzes } from '@/assets/questions/quizzes';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { storeToRefs } from 'pinia';
import type { CompletedQuiz } from '@/types/completedQuiz';
import type { User } from '@/types/user';
import { loadQuestions } from '@/views/QuizView/helpers/loadQuestions';
import { useI18n } from 'vue-i18n';
import { Routers } from '@/router/Routers';
import type { QuizQuestion } from '@/types/QuizQuestion';

const TIME_UP_VALUE = 0;

export const useQuizQuestion = () => {
  const route = useRoute();
  const currentQuizId = route.params.quizId as QuizKeys;
  const currentQuestions = ref<QuizQuestion[]>([]);

  const fetchQuestions = async () => {
     currentQuestions.value = await loadQuestions(currentQuizId);
    totalQuestions.value = currentQuestions.value.length;
  };

  onMounted(fetchQuestions);

  const currentQuestionIndex = ref(0);
  const currentQuestion = computed(() => currentQuestions.value[currentQuestionIndex.value]);
  const calculateProgress = (current: number, total: number) => (current / total) * 100;
  const progress = computed(() => calculateProgress(currentQuestionIndex.value, currentQuestions.value.length));
  const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);
  const { incrementScore, setQuizCompleted } = useQuizScore();
  const scoreStore = storeToRefs(useQuizScore());
  const { score, totalQuestions } = scoreStore;

  const shouldShowNextButton = computed(() => currentQuestions.value.length - 1 !== currentQuestionIndex.value);
  const answerSelected = ref<number | null>(null);
  const answersSelected = ref<number[]>([]);
  const { getLocalStorage: getUser } = useLocalStorage<User>('user', { firstName: '', secondName: '' });
  const user = getUser();
  const i18n = useI18n();

  const completedQuiz: CompletedQuiz = {
    quizName: i18n.t(`quizzes.${currentQuizId}.title`),
    score: score.value,
    certificateId: new Date().getTime(),
    quizTaker: `${user.firstName} ${user.secondName}`,
    date: new Date(),
  };

  const { setLocalStorage, getLocalStorage } = useLocalStorage<CompletedQuiz[]>('completedQuiz', []);

  const onNextQuestion = () => {
    calculateScore();

    if (shouldShowNextButton.value) {
      answerSelected.value = null;
      answersSelected.value = [];
      currentQuestionIndex.value++;
      return;
    }

    setQuizCompleted();
    completedQuiz.score = encryptScore(score.value);
    const completedQuizList = getLocalStorage();
    setLocalStorage([...completedQuizList, completedQuiz]);
    router.push(Routers.Result);
  };

  const handleCountdownFinished = (time: number) => {
    if (time === TIME_UP_VALUE) {
      onNextQuestion();
    }
  };

  useVisibilityChange(onNextQuestion);

  const calculateScore = () => {
    const isMultiselect = currentQuestion.value.answer.length > 1;
    const decryptedAnswer = decryptAnswer(currentQuestion.value.answer);

    const isCorrect = isMultiselect
      ? decryptedAnswer.every(answer => answersSelected.value.includes(answer))
      : decryptedAnswer[0] === answerSelected.value;

    if (isCorrect) {
      incrementScore(currentQuestion.value.points);
    }
  };

  const updateSelectedAnswer = (option: number | null) => {
    answerSelected.value = option;
  };

  const updateSelectedAnswers = (option: number | null) => {

    if (option === null) {
      answersSelected.value = [];
      return;
    }

    if (answersSelected.value.includes(option)) {
      answersSelected.value = answersSelected.value.filter((answer) => answer !== option);
      return;
    }
    answersSelected.value = [...answersSelected.value, option];
  };

  const selectedQuiz = computed(() => quizzes.find((quiz) => quiz.id === currentQuizId));

  return {
    onNextQuestion,
    currentQuestionIndex,
    currentQuestion,
    currentQuestionNumber,
    shouldShowNextButton,
    answerSelected,
    answersSelected,
    updateSelectedAnswer,
    updateSelectedAnswers,
    progress,
    handleCountdownFinished,
    questionsAmount: computed(() => currentQuestions.value.length),
    selectedQuiz: selectedQuiz.value,
  };
};