import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 1;

// TODO: refactor into generic type

const questions: QuizQuestionList = [
  {
    question: "Living things _____.",
    options: [
      "respond to stimuli",
      "reproduce",
      "have adaptations",
      "all of the above",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "The smallest unit of matter that can enter into chemical combination is a _____.",
    options: ["cell", "atom", "molecule", "neutron"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
