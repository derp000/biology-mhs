import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 4;

const questions: QuizQuestionList = [
  {
    question: "Which of the following is an ecosystem?",
    options: [
      "all of the organisms living in your aquarium",
      "the water, temperature, rocks, and other abiotic components of the aquarium",
      "all of the organisms living in your aquarium and the abiotic factors with which they interact",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "The biggest difference between the flow of energy and the flow of chemical nutrients in an ecosystem is that __________.",
    options: [
      "organisms always need nutrients, but they don't always need energy",
      "energy is recycled, but nutrients are not",
      "nutrients are recycled, but energy is not",
      "the amount of energy is much greater than the amount of nutrients",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "In an ecosystem, what will eventually happen to all incoming energy?",
    options: [
      "It will be transferred to the decomposers.",
      "It will be dissipated into space as heat.",
      "It will be transferred from one trophic level to the next.",
      "It will be used in photosynthesis.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Based on the law of conservation of energy, ecosystem ecologists can make which of the following assertions?",
    options: [
      "Photosynthetic organisms can convert approximately 1% of the solar energy they receive into organic molecules.",
      "Approximately 10% of energy is transferred from one trophic level to the next.",
      "The total amount of energy stored in organic molecules plus the amounts reflected and dissipated as heat must equal the total solar energy intercepted by the Earth.",
      "All of the above.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "Photosynthetic organisms are called __________.",
    options: ["herbivores", "heterotrophs", "consumers", "autotrophs"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "When you eat an apple, you are a __________.",
    options: [
      "primary consumer",
      "secondary consumer",
      "carnivore",
      "detritivore",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "The main decomposers in an ecosystem are __________.",
    options: [
      "plants and fungi",
      "fungi and prokaryotes",
      "plants and prokaryotes",
      "fungi and animals",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "In the upper atmosphere _____ becomes ozone, a substance that protects the earth from UV radiation and makes life on land possible.",
    options: ["oxygen", "nitrogen", "carbon dioxide"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Most of the sunlight that reaches Earth __________.",
    options: [
      "is trapped by greenhouse gases",
      "is used by plants for photosynthesis",
      "is continually recycled by ecosystems",
      "is not captured for use by living things",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A study of metabolic rates in a terrestrial community showed that the energy released by respiration exceeded the energy captured in photosynthesis. Which of the following situations is most likely?",
    options: [
      "Community biomass is increasing.",
      "Community biomass is decreasing.",
      "The first law of thermodynamics (energy is conserved) in not in effect.",
      "The second law of thermodynamics (in a closed system, there is a general tendency toward disorder) is not in effect.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "What are the major factors that control primary production in terrestrial ecosystems?",
    options: [
      "temperature and moisture",
      "temperature and light",
      "temperature and nutrients",
      "light and nutrients",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "What frequently causes eutrophication in lakes?",
    options: [
      "nutrient enrichment such as nitrate and phosphate runoffs from land",
      "industrial poisons",
      "a diminished supply of nitrates and phosphates",
      "an increase in primary consumers",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following best describes the base of a pyramid of net production?",
    options: [
      "It contains the energy left after the producers have died.",
      "It represents the energy available to secondary consumers.",
      "It contains the energy captured by photosynthesis.",
      "It receives energy from the primary, secondary, and tertiary consumers.",
      "Its size depends on the energy available from detritivores.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "In general, the biomass in an ecosystem will be greatest at the trophic level comprising...",
    options: [
      "secondary consumers",
      "producers",
      "carnivores",
      "herbivores",
      "primary consumers",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
