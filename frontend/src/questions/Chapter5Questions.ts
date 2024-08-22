import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 5;

const questions: QuizQuestionList = [
  {
    question: "Which choice below is an expression of a population density?",
    options: [
      "the total dry mass of trout in a lake",
      "the total number of sturgeon per cubic meter in San Francisco Bay and in Tomales Bay",
      "255 dogfish sharks",
      "the number of Paramecium caudatum in a 250-mL solution in a glass flask",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "When needed resources are unevenly distributed, organisms often show a(n) __________ dispersion pattern.",
    options: [
      "density-dependent",
      "exponential",
      "random",
      "uniform",
      "clumped",
    ],
    correctIndex: 4,
    chapter: CH_NUM,
  },
  {
    question:
      "Organisms that live in a homogenous abiotic environment and cooperate to avoid being eaten would likely show a(n) __________ pattern of dispersion.",
    options: [
      "density-dependent",
      "exponential",
      "random",
      "uniform",
      "clumped",
    ],
    correctIndex: 4,
    chapter: CH_NUM,
  },
  {
    question:
      "Herring gulls fiercely defend the areas around their nests in cliff-top breeding colonies. Within the colony they would show a __________ dispersion pattern. (Hint: territorial behavior)",
    options: [
      "density-dependent",
      "exponential",
      "random",
      "uniform",
      "clumped",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Pine trees in a forest tend to shade and kill pine seedlings that sprout nearby. This causes the pine trees to grow in a __________ pattern.",
    options: [
      "density-dependent",
      "exponential",
      "random",
      "uniform",
      "clumped",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "An oak tree produces thousands of acorns, but very few grow into mature oak trees. The oak tree exhibits a __________ survivorship curve.",
    options: ["Type I", "Type II", "Type III", "Type IV"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Chimpanzees have a relatively low birth rate. They care for their young, and most chimps live a long life. The chimp survivorship curve would look like __________.",
    options: [
      "a relatively flat line that drops steeply at the end",
      "a horizontal line",
      "a line that slopes gradually downward",
      "a line that drops steeply at first, then flattens out",
      "a line that slopes gradually upward",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following describes the distribution of survivorship or mortality for a population that has a Type II survivorship curve?",
    options: [
      "Little death occurs until late in life.",
      "The chance of death is roughly constant over all ages.",
      "Survivorship is greatest in younger individuals.",
      "Survivorship is greatest in individuals that are intermediate in age.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Kingfish, Louisiana, had a population of 1,100 individuals. They had a birth rate of 12/100, a death rate of 8/100, and an emigration (individuals leaving the population) rate of 2/100. How many people were added to Kingfish's population in one year?",
    options: ["1", "2", "1122", "22", "20"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A population will always grow exponentially under what circumstances?",
    options: [
      "if it is limited only by density-dependent factors",
      "until it reaches carrying capacity",
      "if there are no limiting factors",
      "if it is a population with a Type I survivorship curve",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following populations probably exhibits exponential growth?",
    options: [
      "a fruit fly population that recently arrived on a lush mid-oceanic island previously inhabited only by plants",
      "a population of deer in an area with many hungry wolves",
      "a redwood tree population in a forest",
      "a protozoan population grown in a sealed glass culture flask",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "No population can grow indefinitely. The ultimate size of any population is limited by __________. ",
    options: [
      "its r",
      "its death rate",
      "its birth rate",
      "the carrying capacity of its environment",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A newly mated queen ant founds a nest in an unoccupied patch of suitable habitat. Assuming that no disasters strike the nest, which of the following types of equation is likely to best describe the population growth of the new colony?",
    options: ["logistic", "exponential", "linear", "circular"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "In an equilibrium population (at its carrying capacity), thousands of eggs and hundreds of tadpoles are produced by a single pair of frogs. On average, about how many offspring per pair will live to reproduce?",
    options: ["2", "20", "100", "1000"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "No population can grow indefinitely. The ultimate size of any population is limited by __________. ",
    options: [
      "its r",
      "its death rate",
      "its birth rate",
      "the carrying capacity of its environment",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A wildlife biologist is trying to predict what will happen to a bear population if bear hunting is banned. He had the equations all worked out but then realized that he had grossly underestimated the amount of food available to the bears. To make his prediction more accurate he should __________ the value of __________ in his equation. (Consider food to be a factor that limits the size of the bear population.)",
    options: [
      "decrease ... N",
      "increase ... K",
      "decrease ... r",
      "increase ... N",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "A population that is growing logistically __________.",
    options: [
      "grows fastest at an intermediate population density",
      "grows fastest as it approaches carrying capacity",
      "grows fastest when density is lowest",
      "is always slowed by density-independent factors",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following would most likely be an example of a density-independent factor limiting population growth?",
    options: [
      "accumulation of toxic wastes",
      "daily temperature extremes",
      "food availability",
      "diseases",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
