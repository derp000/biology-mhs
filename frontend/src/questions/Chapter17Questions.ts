import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 17;

const questions: QuizQuestionList = [
  {
    question: "Darwin originally defined evolution as __________.",
    options: [
      "descent with modification",
      "an individual's ability to adapt to its environment",
      "a way to classify organisms based on morphological similarities",
      "the passing of acquired characteristics to offspring",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following is a key observation that must be explained in a unifying theory about life?",
    options: [
      "Many basic characteristics are shared by all living things.",
      "All living things require oxygen to survive.",
      "Organisms are rarely well-suited to their environments.",
      "Evolution is based on descent with modification.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "The smallest unit that can evolve is a(n) __________.",
    options: ["population", "morph", "genotype", "species"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "A population of zooplankton is exposed to a small number of predatory fish that feed on the larger-sized (adult) zooplankton. Which of the following predictions would most likely occur based on the principles of natural selection?",
    options: [
      "The predatory fish will evolve poor eyesight so as to preserve their food supply.",
      "The population will come to contain adult zooplankton that reach sexual maturity when they are still relatively small.",
      "The zooplankton will become sexually mature at larger sizes.",
      "The predatory fish will evolve smaller mouths so that they do not drive their prey to extinction.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "Animals that possess homologous structures probably __________.",
    options: [
      "have increased genetic diversity",
      "evolved from the same ancestor",
      "by chance had similar mutations independently in the past",
      "are not related",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "On an evolutionary tree __________.",
    options: [
      "organisms that are positioned close to each other are closely related",
      "homologous characteristics form a nested pattern",
      "the concept of descent with modification is not well-represented",
      "scientists are sure of the correct placement and relationships of all organisms",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "Which of the following is an example of convergent evolution?",
    options: [
      "Cats and bats have similar skeletal configurations in their forelimbs.",
      "Blind cave fish possess remnants of eye structures under their scales.",
      "Dolphins and sharks have a similar streamlined body shape.",
      "Human embryos and fish embryos both have pharyngeal pouches.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "Vestigial organs are __________.",
    options: [
      "one piece of evidence that does not support the theory of evolution",
      "examples of anatomical imperfections such as the human knee",
      "remnants of structures that were useful to an organism's ancestors, but which are now non-functional or show reduced function",
      "homologies that can only be observed in embryos",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "All known organisms translate genetic information to produce protein molecules via the same genetic code. This finding strongly supports the hypothesis that __________.",
    options: [
      "there's only one possible way to encode information in a macromolecule",
      "the genetic code will never be broken",
      "the earliest macromolecules probably arose when lightning struck an oxygen-free atmosphere",
      "all organisms are descended from a single common ancestor",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Evidence from molecular biology supports the theory of evolution by demonstrating that __________.",
    options: [
      "homologous proteins have arisen independently in many different animal groups",
      "closely related organisms have similar stages of development",
      "closely related animal species have similar geographic distributions",
      "closely related organisms have more similar DNA and proteins than more distantly related organisms",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
];

export default questions;
