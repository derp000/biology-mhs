import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 16;

const questions: QuizQuestionList = [
  {
    question:
      "Which of the following enzymes is key to the automation of PCR (polymerase chain reactions)?",
    options: [
      "Taq polymerase",
      "restriction enzyme",
      "reverse transcriptase",
      "human DNA polymerase",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Bacteria use restriction enzymes to __________.",
    options: [
      "destroy foreign DNA",
      "synthesize DNA",
      "synthesize protein",
      "destroy foreign protein",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "An enzyme that cuts DNA at a symmetrical sequence of bases is called __________.",
    options: [
      "a restriction enzyme",
      "palindrome",
      "cDNA",
      "reverse transcriptase",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "When a typical restriction enzyme cuts a DNA molecule, the cuts are staggered so that the DNA fragments have single-stranded ends. This is important in recombinant DNA work because __________.",
    options: [
      "the fragments will bond to other fragments with complementary single-stranded ends",
      "only single-stranded DNA segments can code for proteins",
      "it allows a cell to recognize fragments produced by the enzyme",
      "the single-stranded ends serve as starting points for DNA replication",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "What two enzymes are needed to produce recombinant DNA?",
    options: [
      "a restriction enzyme and a topoisomerase",
      "a polymerase and a ligase",
      "a restriction enzyme and a polymerase",
      "a restriction enzyme and a ligase",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "What is the source of the reverse transcriptase used in recombinant DNA technology?",
    options: [
      "cultured phage-infected mammalian cells",
      "plant cells",
      "either retroviruses or cultured phage-infected mammalian cells",
      "retroviruses",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "DNA synthesized using an RNA template is called __________.",
    options: ["rDNA", "a plasmid", "cDNA", "a restriction enzyme"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "Single nucleotide polymorphisms (SNPs) __________.",
    options: [
      "are small nucleotide differences among individuals located in coding and non-coding sequences in the genome",
      "are single base-pair variations in the genomes of the human population",
      "are genetic markers used to study the genetic basis for disease",
      "can be the molecular basis for different alleles",
      "all of the above",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "__________ can give rise to any type of cell whereas __________ can give rise to a subset of cell types.",
    options: [
      "Heterozygous cells ... homozygous cells",
      "Totipotent cells ... nerve cells",
      "Embryonic stem cells ... adult stem cells",
      "Adult stem cells ... embryonic stem cells",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "All of the following are true regarding induced pluripotent stem (iPS) cells EXCEPT __________.",
    options: [
      "the reprogramming of diseased cells in humans to form iPS cells could provide model systems for studying the origins of the disease",
      "iPS cells have been demonstrated to function identically to embryonic stems cells",
      "iPS cell technology may provide a more morally acceptable approach to therapeutic cloning",
      "iPS cell technology could offer the potential to regenerate nonfunctional or diseased tissues and avoid the risk of transplant rejection in the diseased patient",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "A genetic marker is __________.",
    options: [
      "a chart that traces the family history of a genetic trait",
      "a particular nucleotide sequence at a particular locus whose inheritance can be followed",
      "a place where a restriction enzyme cuts DNA",
      "a radioactive probe used to find a gene",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
