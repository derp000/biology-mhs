export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  chapter: number;
};

export type QuizQuestionList = QuizQuestion[];
