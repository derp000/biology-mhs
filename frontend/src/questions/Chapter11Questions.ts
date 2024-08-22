import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 11;

const questions: QuizQuestionList = [
  {
    question: "Which of the following is FALSE regarding sister chromatids?",
    options: [
      "Both of the sister chromatids end up in the same daughter cell after cytokinesis has occurred.",
      "Sister chromatids are attached to one another at the centromere.",
      "Sister chromatids are created when DNA is replicated.",
      "Sister chromatids form in the S-phase stage of the cell cycle.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The complex of DNA and protein that makes up a eukaryotic chromosome is properly called __________.",
    options: ["chromatin", "a centromere", "a chromatid", "a chromoplast"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The region of a chromosome in which the two double strands of replicated DNA are held together is called __________.",
    options: ["a centromere", "an aster", "a centriole", "chromatin"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "How many maternal chromosomes are present in a somatic human cell not engaged in cell division?",
    options: ["46", "92", "128", "23"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A biochemist measured the amount of DNA in cells growing in the laboratory and found that the quantity of DNA in the cells doubled __________.",
    options: [
      "during the M phase of the cell cycle",
      "between the G2 phase and prophase",
      "between prophase and anaphase",
      "between the G1 and G2 phases",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Down syndrome is characterized by cells having three copies of chromosome 21. As a cell in an individual with Down syndrome prepares to enter mitosis, how many chromatids would be present?",
    options: ["23", "46", "92", "94"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Following cytokinesis in an animal cell, how many centrioles does each new daughter cell possess?",
    options: ["one", "two", "three", "four"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "In animal cell mitosis, the cleavage furrow forms during which stage of the cell cycle?",
    options: ["prophase", "cytokinesis", "anaphase", "metaphase"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "During binary fission in a bacterium, __________.",
    options: [
      "the two DNA molecules divide in half, forming four DNA fragments",
      "the two DNA molecules float free in the cell and are guided to daughter cells by a spindle-like apparatus",
      "the origins of replication move apart",
      "the two DNA molecules attach to the centrioles",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "When a cell in S phase is fused with a cell in G1, __________.",
    options: [
      "the two nuclei fuse and additional division is arrested",
      "the original G1 cell will divide immediately",
      "DNA synthesis begins immediately in the original G1 nucleus",
      "the replication of DNA occurring in the original S nucleus is terminated",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
];

export default questions;
