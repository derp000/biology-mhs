import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 20;

const questions: QuizQuestionList = [
  {
    question:
      "The early atmosphere on Earth is thought to have lacked which of the following gases?",
    options: ["oxygen", "methane", "nitrogen", "carbon dioxide"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The Miller and Urey abiotic synthesis experiment (and subsequent, similar experiments) showed that __________.",
    options: [
      "simple organic molecules can form spontaneously under conditions like those thought to prevail early in Earth's history",
      "the earliest life-forms introduced large amounts of oxygen into the atmosphere",
      "long chains of DNA can form under abiotic conditions",
      "the low concentration of organic compounds prevented them from polymerizing",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The early atmosphere may not have been as reducing as originally postulated by Haldane, Oparin, Miller, and Urey. In light of current thinking about the composition of the early atmosphere, what is regarded as a likely place for the abiotic synthesis of organic molecules to have occurred?",
    options: [
      "near volcanoes",
      "the surface of ancient oceans",
      "banded iron formations",
      "dust particles in the atmosphere",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Abiotically produced vesicles display which of the following rudimentary qualities necessary for life?",
    options: [
      "the ability to perform simple reproduction and metabolism",
      "the ability to synthesize organic molecules from inorganic molecules",
      "the ability to maintain an internal chemical environment different from their surroundings and to reproduce sexually",
      "the ability to accurately replicate and build macromolecules",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Many researchers now believe that the first self-replicating molecules were __________.",
    options: ["DNA", "viruses", "RNA", "phospholipids"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Ancient cyanobacteria were very important in the history of life because they __________.",
    options: [
      "were the first truly multicellular organisms",
      "were probably the first organisms to live on Earth",
      "produced atmospheric oxygen",
      "are the oldest known prokaryotes",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "What prokaryotic adaptation occurred during the oxygen revolution and opened up the possibility for energy-demanding multicellular life-forms?",
    options: [
      "emergence of obligate anaerobes",
      "cellular respiration",
      "photosynthesis",
      "anaerobic fermentation",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      'What were the two major "problems" that had to be solved before plants, animals, and fungi could fully move into terrestrial habitats?',
    options: [
      "reproduction and locomotion",
      "reproduction and prevention of dehydration",
      "cell division and absorption of nutrients",
      "prevention of dehydration and locomotion",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "The products of Hox genes __________.",
    options: [
      "result in heterochrony",
      "provide positional information in animal embryos",
      "can cause paedomorphosis",
      "control the rate of timing and developmental events",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Lake Malawi, in the African Rift Valley, is home to more than a hundred species of cichlid fishes, each with slightly different diets and habits. All these species probably evolved from a common ancestor, making them an example of __________.",
    options: [
      "sympatric speciation",
      "convergence",
      "adaptive radiation",
      "hybrid breakdown",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
];

export default questions;
