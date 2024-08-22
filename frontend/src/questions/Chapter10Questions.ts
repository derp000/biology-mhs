import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 10;

const questions: QuizQuestionList = [
  {
    question:
      "In the overall process of glycolysis and cellular respiration, __________ is oxidized and __________ is reduced.",
    options: [
      "glucose ... oxygen",
      "ATP ... oxygen",
      "carbon dioxide ... water",
      "glucose ... ATP",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Oxygen gas (O2) is one of the strongest oxidizing agents known. The explanation for this is that __________.",
    options: [
      "the oxygen atom is very electronegative",
      "oxygen gas contains a double bond",
      "oxygen gas is composed of two atoms of oxygen",
      "oxygen acts as the final electron acceptor in cellular respiration",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following statements is the best explanation of what happens to the temperature and carbon dioxide concentration during a 1-hour class period in a classroom of 300 students if the heating and air conditioning is turned off and all doors are kept closed?",
    options: [
      "Temperature and the level of carbon dioxide rise as heat and carbon dioxide are by-products of cellular respiration.",
      "Temperature goes up and the level of carbon dioxide goes down. This is because cellular respiration is an exergonic process that is only about 38% efficient; the remaining energy is lost to the environment as heat. Also, carbon dioxide is being converted to organic molecules such as fats and sugars during cellular respiration.",
      "Neither temperature nor carbon dioxide levels change because cellular respiration is 100% efficient and because carbon dioxide produced by cellular respiration is just as rapidly consumed by cellular respiration.",
      "Temperature goes up but carbon dioxide levels remain constant because heat is a by-product of cellular respiration but carbon dioxide is converted to sugar during cellular respiration.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "A small amount of ATP is made in glycolysis by which of the following processes?",
    options: [
      "harnessing energy from the sun",
      "transport of electrons through a series of carriers",
      "transfer of electrons and hydrogen atoms to NAD+",
      "transfer of a phosphate group from a fragment of glucose to ADP by substrate-level phosphorylation",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "There is no production of carbon dioxide in glycolysis. Which of the following is the best explanation for this fact?",
    options: [
      "There is very little ATP produced in glycolysis.",
      "The initial steps of glycolysis require an input of energy in the form of ATP (two per glucose).",
      "Glucose contains more carbons than the number of carbons found in the pyruvate products that are produced by glycolysis.",
      "The products of glycolysis contain the same total number of carbon atoms as in the starting material.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "In an experiment, mice were fed glucose containing a small amount of radioactive oxygen. The mice were closely monitored, and after a few minutes radioactive oxygen atoms showed up in __________.",
    options: ["oxygen gas", "ATP", "water", "carbon dioxide"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Where do the reactions of the citric acid cycle occur in eukaryotic cells?",
    options: [
      "across the inner membrane of the mitochondrion",
      "the matrix of the mitochondrion",
      "the cristae of the mitochondrion",
      "the intermembrane space of the mitochondrion",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "After completion of the citric acid cycle, most of the usable energy from the original glucose molecule is in the form of __________.",
    options: ["acetyl CoA", "NADH", "FADH2", "ATP"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "When a poison such as cyanide blocks the electron transport chain, glycolysis and the citric acid cycle also eventually stop working. Which of the following is the best explanation for this?",
    options: [
      "The uptake of oxygen stops because electron transport was inhibited.",
      "NAD+ and FAD are not available for glycolysis and the citric acid cycle to continue.",
      "Electrons are no longer available from the electron transport chain to power glycolysis and the citric acid cycle.",
      "They run out of ADP.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Muscle tissues make lactate from pyruvate to do which of the following?",
    options: [
      "get rid of pyruvate produced by glycolysis",
      "utilize the energy in pyruvate",
      "regenerate NAD+",
      "speed up the rate of glycolysis",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "A gram of fat oxidized by respiration produces approximately twice as much ATP as a gram of carbohydrate. Which of the following best explains this observation?",
    options: [
      "Fats are less soluble in water than sugars.",
      "Fats are closely related to lipid molecules, which are the basic building blocks of cellular membranes.",
      "Fats are better electron donors to oxygen than are sugars.",
      "Fats do not form true macromolecules as sugars do.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
];

export default questions;
