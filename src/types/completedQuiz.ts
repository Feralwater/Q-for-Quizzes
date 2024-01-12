export interface CompletedQuiz {
  quizName: string;
  score: number | string;
  quizTaker: string;
  certificateId: number;
  date: Date;
}