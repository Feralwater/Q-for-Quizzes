export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number[];
  points: number;
  timeToAnswer: number;
}