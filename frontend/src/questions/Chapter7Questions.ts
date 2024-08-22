import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 7;

/**
 * See {@link https://highered.mheducation.com/sites/0072919345/student_view0/chapter48/multiple_choice_quiz.html}
 */
const questions: QuizQuestionList = [
  {
    question:
      "Exposure to increasing amounts of UV radiation which might ultimately lead to an increase in the incidence of skin cancer is a concern associated with",
    options: [
      "ozone depletion",
      "acid rain",
      "the greenhouse effect",
      "global warming",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The toxic levels of chemicals like DDT in the tuna, that ate some small fish, that ate some zooplankton, that ate some phytoplankton is due to",
    options: [
      "biotic potential",
      "biological magnification",
      "carrying capacity",
      "environmental resistance",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Biological magnification occurs more readily in aquatic food chains because there are more links than terrestrial food chains.",
    options: ["True", "False"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Eutrophication _____.",
    options: [
      "none of the below",
      "causes algal blooms",
      "results in massive fish kills",
      "is caused by runoff of nitrogen and phosphorous",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Use of agricultural fertilizers adds excess _____ to ecosystems.",
    options: ["phosphorous", "nitrogen", "both"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Phosphorous is often a limiting nutrient in most ecosystems because available phosphorous is generally taken up very quickly.",
    options: ["True", "False"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The conversion of nitrate to nitrous oxide and nitrogen gas is called _____.",
    options: ["nitrification", "denitrification", "nitrogen fixation"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "Which of the following statements about ozone is true?",
    options: [
      "all of the below",
      "its presence in the upper atmosphere protects the earth from UV radiation",
      "it causes leaf mottling and reduced growth in plants",
      "it is a component of photochemical smog",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following nutrients can be a limiting nutrient because of plants' inability to use its gaseous form?",
    options: ["carbon", "hydrogen", "nitrogen", "phosphorous"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "How are CO2 and other greenhouse gases believed to be causing the temperature of the earth to increase?",
    options: [
      "they prevent heat energy from leaving the earth",
      "by reducing photosynthetic rates",
      "by absorbing sunlight",
      "they allow more solar radiation to pass through to the earth's surface",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following gases is contributing to a significant increase in atmospheric temperature?",
    options: ["Helium", "Methane", "Oxygen", "all of the above"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following is contributing to an overload of the carbon cycle?",
    options: [
      "all of the below",
      "cellular respiration",
      "photosynthesis",
      "deforestation",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
];

export default questions;
