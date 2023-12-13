import { basicQuestions } from '@/assets/data/basicQuestions';
import { computed, onMounted, ref } from 'vue';
import { useQuizScore } from '@/stores/score';
import router from '@/router';
import { Routers } from '@/router/Routers';
import { useVisibilityChange } from '@/views/QuizView/hooks/useVisibilityChange';

export const useQuizQuestion = () => {
  const TIME_UP_VALUE = -1;

  const currentQuestionIndex = ref(0);
  const currentQuestion = computed(() => basicQuestions[currentQuestionIndex.value]);
  const calculateProgress = (current: number, total: number) => (current / total) * 100;
  const progress = computed(() => calculateProgress(currentQuestionIndex.value, basicQuestions.length));
  const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);
  const { incrementScore, setQuizCompleted, setQuestionsAmount } = useQuizScore();
  const shouldShowNextButton = computed(() => basicQuestions.length - 1 !== currentQuestionIndex.value);
  const answerSelected = ref('');
  const answersSelected = ref<string[]>([]);

  const onNextQuestion = () => {
    calculateScore();

    if (shouldShowNextButton.value) {
      answerSelected.value = '';
      answersSelected.value = [];
      currentQuestionIndex.value++;
      return;
    }

    setQuizCompleted();
    router.push(Routers.Result);
  };

  const handleCountdownFinished = (time: number) => {
    if (time === TIME_UP_VALUE) {
      onNextQuestion();
    }
  };

  useVisibilityChange(onNextQuestion);
  
  const calculateScore = () => {
    const answerIsMultiselect = currentQuestion.value.answer.length > 1;
    const allAnswersSelected = currentQuestion.value.answer.every(answer => answersSelected.value.includes(answer));
    const answerIsCorrect = currentQuestion.value.answer[0] === answerSelected.value;

    if (answerIsMultiselect && allAnswersSelected || !answerIsMultiselect && answerIsCorrect) {
      incrementScore(currentQuestion.value.points);
    }
  };

  const updateSelectedAnswer = (option: string) => {
    answerSelected.value = option;
  };

  const updateSelectedAnswers = (option: string) => {
    if (answersSelected.value.includes(option)) {
      answersSelected.value = answersSelected.value.filter((answer) => answer !== option);
      return;
    }
    answersSelected.value = [...answersSelected.value, option];
  };
  
  onMounted(() => {
    setQuestionsAmount(basicQuestions.length);
  });

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
  };
};