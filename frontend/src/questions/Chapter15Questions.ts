import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 15;

const questions: QuizQuestionList = [
  {
    question:
      "What factor accounts most for the difference in genome size between vertebrates and prokaryotes?",
    options: [
      "Vertebrates have more noncoding DNA sequences.",
      "Vertebrates have more protein-coding genes.",
      "Vertebrates have more genes for functional RNA molecules.",
      "Vertebrates have longer and more complex upstream regulatory sequences",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The highly conserved sequence element present within homeotic genes is called the __________.",
    options: ["ced-3", "homeobox", "bicoid", "TATA box"],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "What is a valid rationale for sequencing the chimpanzee genome?",
    options: [
      "to determine whether another human pathogen such as HIV could originate from viruses that infect chimpanzees",
      "to be able to study human diseases in chimpanzees",
      "to determine what genetic changes determine uniquely human features such as large brains and language ability",
      "to determine whether any chimpanzee genes could be used to genetically engineer superior humans, or vice versa",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Why might the number of genes in eukaryotic genomes underestimate the number of different proteins that an organism makes?",
    options: [
      "The genome rearranges its DNA so that different cells can make different proteins.",
      "Organisms take up foreign DNA and make proteins encoded by these foreign DNA molecules.",
      "Many genes undergo alternative splicing, so that different proteins with different exon combinations are produced from the same gene.",
      "All of the above.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "The number of genes in an organism's genome is not a perfect indication of the organism's complexity because __________.",
    options: [
      "alternative splicing can increase the number of polypeptides made from a single pre-mRNA",
      "individual polypeptides can interact to form multiple types of protein complexes",
      "post-translational modifications can increase the types of proteins produced by a single gene",
      "individual genes can be expressed in more or less complex ways in different organisms",
      "all of the above"
    ],
  correctIndex: 4,
    chapter: CH_NUM,
  },
];

export default questions;
