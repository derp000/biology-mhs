import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 9;

const questions: QuizQuestionList = [
  {
    question:
      "Which of the following correctly states the relationship between anabolic and catabolic pathways?",
    options: [
      "Degradation of organic molecules by anabolic pathways provides the energy to drive catabolic pathways.",
      "The flow of energy between catabolic and anabolic pathways is reversible.",
      "Anabolic pathways synthesize more complex organic molecules using the energy derived from catabolic pathways.",
      "Energy derived from catabolic pathways is used to drive the breakdown of organic molecules in anabolic pathways.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Organisms are described as thermodynamically open systems. Which of the following statements is consistent with this description?",
    options: [
      "Organisms acquire energy from, and lose energy to, their surroundings.",
      "Heat produced by the organism is conserved in the organism and not lost to the environment.",
      "Because energy must be conserved, organisms constantly recycle energy and thus need no input of energy.",
      "The metabolism of an organism is isolated from its surroundings.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Which of the following reactions would be endergonic?",
    options: [
      "glucose + fructose → sucrose",
      "HCl → H(+) + Cl(-)",
      "ATP → ADP + P (inorganic)",
      "glucose + 6 oxygen → 6 carbon dioxide + 6 water",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "In general, the hydrolysis of ATP drives cellular work by __________.",
    options: [
      "changing to ADP and phosphate",
      "lowering the activation energy of the reaction",
      "acting as a catalyst",
      "releasing free energy that can be coupled to other reactions",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A plot of reaction rate (velocity) against temperature for an enzyme indicates little activity at 10°C and 45°C, with peak activity at 35°C. The most reasonable explanation for the low velocity at 10°C is that __________.",
    options: [
      "the enzyme was denatured",
      "there is too little activation energy available",
      "the hydrogen bonds that define the structure of the enzyme's active site are unstable",
      "the cofactors required by the enzyme system lack the thermal energy required to activate the enzyme",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "Which of the following statements about enzymes is INCORRECT?",
    options: [
      "An enzyme lowers the activation energy of a chemical reaction.",
      "An enzyme is consumed during the reaction it catalyzes.",
      "Most enzymes are proteins.",
      "An enzyme is very specific in terms of the substrate to which it binds.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "Enzyme activity is affected by pH because __________.",
    options: [
      "high or low pH may disrupt hydrogen bonding or ionic interactions and thus change the shape of the active site",
      "most substrates do not function well at high or low pH",
      "changes in pH can cause loss of cofactors from the enzyme",
      "the binding of hydrogen ions to the enzyme absorbs energy and thus there may not be enough energy to overcome the activation energy barrier",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "In a rosebush, chlorophyll is located in __________.",
    options: [
      "thylakoids, which are in chloroplasts in the mesophyll cells of a leaf",
      "thylakoids, which are in mesophyll cells in the chloroplasts of a leaf",
      "chloroplasts, which are in mesophyll cells in the thylakoids of a leaf",
      "chloroplasts, which are in thylakoids in the mesophyll cells of a leaf",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "What is the range of wavelengths of light that are absorbed by the pigments in the thylakoid membranes?",
    options: [
      "infrared",
      "the entire spectrum of white light",
      "green",
      "blue-violet and red-orange",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "During photosynthesis in chloroplasts, O2 is produced from __________ via a series of reactions associated with __________.",
    options: [
      "CO2 ... photosystem II",
      "CO2 ... the Calvin cycle",
      "H2O ... photosystem II",
      "CO2 ... both photosystem I and the Calvin cycle",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "During photosynthesis in a eukaryotic cell, an electrochemical gradient is formed across the __________.",
    options: [
      "chloroplast inner membrane",
      "chloroplast outer membrane",
      "thylakoid membrane",
      "cristae",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "What is the role of NADP+ in photosynthesis?",
    options: [
      "It assists chlorophyll in capturing light.",
      "As part of the electron transport chain, it manufactures ATP.",
      "As a component of photosystem II, it catalyzes the hydrolysis of water.",
      "It is reduced and then carries electrons to the Calvin cycle.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "Rubisco is __________.",
    options: [
      "the enzyme responsible for splitting H2O to produce O2 in photosynthesis",
      "the first stable intermediate in C4 photosynthesis",
      "the enzyme in plants that captures CO2 to begin the Calvin cycle",
      "the five-carbon sugar molecule that reacts with CO2 to begin the Calvin cycle",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "Why are C4 plants more suited to hot climates than C3 plants?",
    options: [
      "Unlike C3 plants, they keep fixing carbon dioxide even when the concentration of carbon dioxide in the leaf is low.",
      "The same cells that bind carbon dioxide perform the Calvin cycle.",
      "They evolved in cold weather but migrated to the tropics, where they were more suitable.",
      "They suspend photosynthesis in the heat.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
];

export default questions;
