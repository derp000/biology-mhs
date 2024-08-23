import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 19;

const questions: QuizQuestionList = [
  {
    question:
      "The binomial system assigns to each organism a unique name that describes its __________.",
    options: [
      "genus and species",
      "family and species",
      "body plan and habitat",
      "order and family",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Species A and species B are in the same phylum. Species A and species C, but not species B, are in the same order. From this information you can conclude that __________.",
    options: [
      "species C could be in the same class as species A and B",
      "species A and species B are in the same family",
      "all three species are members of the same genus",
      "species B and species C share a less recent ancestor than do species A and B",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "A taxon __________.",
    options: [
      "is a formal grouping at any given level",
      "is a clade",
      "is a formal grouping in any level from phylum to species",
      "of one type of organism at one level is comparable to another type of organism at the same level",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "What does a branch point in a phylogenetic tree represent?",
    options: [
      "A branch point represents a point at which two evolutionary lineages split from a common ancestor.",
      "A branch point represents a gene duplication event.",
      "A branch point represents the absolute time at which two evolutionary lineages split from a common ancestor.",
      "A branch point represents a place where one species branches off from another.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "A phylogenetic tree of bird families constructed by cladistic analysis would be a hypothesis about which of the following?",
    options: [
      "families that look most alike",
      "analogous structures shared by various species",
      "relative ages of living species of birds",
      "evolutionary relationships among bird families",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Many researchers who study the kingdom Protista argue that all of these organisms should NOT be placed in the same kingdom, because these organisms could not have evolved from a common ancestor. In other words, they argue that the kingdom Protista is __________.",
    options: ["paraphyletic", "monophyletic", "heterophyletic", "polyphyletic"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Using cladistic analysis, a taxonomist wishes to construct a phylogenetic tree showing the relationships among various species of mammals. Which of the following would be the LEAST useful for this purpose?",
    options: [
      "the fact that teeth vary among types of mammals",
      "DNA base sequences",
      "descriptions of various types of limbs (wings, legs, flippers, etc.)",
      "the fact that all mammals have hair",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "Which statement below is true about an outgroup?",
    options: [
      "The outgroup would be found at one of the highest branches of a phylogenetic tree.",
      "The outgroup and ingroup display a mixture of shared and derived characters.",
      "The outgroup should be from a lineage known to have diverged before the lineage that includes the ingroup.",
      "Outgroup comparison is based on the assumption that homologies present in both the outgroup and ingroup must be derived characters.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Unlike a regular phylogenetic tree, phylogenetic trees with branch lengths proportional to time can be used to __________.",
    options: [
      "reflect the number of evolutionary changes that have taken place in a lineage",
      "tie polyphyletic clades to a common ancestor",
      "represent the chronological time that has passed since two groups diverged from a common ancestor",
      "hypothesize the relative relatedness between different taxa ",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Universal phylogenetic trees built from different genes sometimes give inconsistent results. What basic assumption on which phylogenetic trees are based has probably been violated during the history of life?",
    options: [
      "Genes are often passed from one organism to another without the occurrence of reproduction.",
      "Genes are passed vertically from one generation to the next.",
      "Homologous traits come about because of common ancestry.",
      "The greater the difference in gene sequences, the longer two species have diverged.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "Paralogous genes __________.",
    options: [
      "cannot diverge in the same gene pool",
      "result from gene duplication",
      "are responsible for the differences in beta hemoglobin in humans and mice",
      "can only diverge after speciation has taken place",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
