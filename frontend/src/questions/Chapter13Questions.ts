import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 13;

/**
 * See {@link https://media.pearsoncmg.com/bc/bc_campbell_biology_11/msa/content/practice-test/app/page.php?chapnum=16}
 */
const questions: QuizQuestionList = [
  {
    question:
      "During Griffith's experiments with Streptococcus pneumoniae in mice, material from __________ bacteria transformed __________ bacteria.",
    options: [
      "heat-killed pathogenic ... living nonpathogenic",
      "living nonpathogenic ... living pathogenic",
      "heat-killed nonpathogenic ... living pathogenic",
      "living pathogenic ... heat-killed nonpathogenic",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "In an important experiment, a radioactively labeled bacteriophage was allowed to infect bacteria. In a first trial, the phage contained radioactive DNA, and radioactivity was detected inside the bacteria. Next, phage-containing radioactive protein was used, and the radioactivity was not detected inside the bacteria. These experiments led to the conclusion that __________.",
    options: [
      "the genetic material of the phage is DNA",
      "genes are on chromosomes",
      "DNA is made of nucleotides",
      "the genetic material of the phage is protein",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Chargaff found that for DNA __________.",
    options: [
      "the ratio of A to G is close to 1:1 and the ratio of T to C is close to 1:1",
      "the ratio of A to C is close to 1:1 and the ratio of G to T is close to 1:1",
      "A + T = G + C",
      "the ratio of A to T is close to 1:1 and the ratio of G to C is close to 1:1",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "In DNA, the two purines are __________, and the two pyrimidines are __________.",
    options: [
      "adenine and thymine ... cytosine and guanine",
      "adenine and cytosine ... guanine and thymine",
      "cytosine and thymine ... adenine and guanine",
      "adenine and guanine ... cytosine and thymine",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "Which one of the following statements is correct?",
    options: [
      "Adenine forms three hydrogen bonds with thymine; guanine forms two hydrogen bonds with cytosine.",
      "Adenine forms two hydrogen bonds with guanine; thymine forms three hydrogen bonds with cytosine.",
      "Adenine forms two covalent bonds with thymine; guanine forms three covalent bonds with cytosine.",
      "Adenine forms two hydrogen bonds with thymine; guanine forms three hydrogen bonds with cytosine.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following attributes of DNA is most crucial to its accurate duplication?",
    options: [
      "its phosphodiester linkages and complementary strands",
      "its helical nature and hydrogen bonding",
      "its specific sequence of bases",
      "its specific base pairing through hydrogen bonds",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "At each end of a DNA replication bubble is __________.",
    options: [
      "an origin of replication",
      "a telomere",
      "a replication fork",
      "a ribosome",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "After the formation of a replication bubble, which of the following is the correct sequence of enzymes used for the synthesis of the lagging DNA strand?",
    options: [
      "helicase, primase, ligase, DNA polymerase",
      "helicase, DNA polymerase, primase, ligase",
      "helicase, primase, DNA polymerase, ligase",
      "ligase, primase, DNA polymerase, helicase",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Unlike prokaryotic DNA replication, replication of eukaryotic chromosomes __________.",
    options: [
      "involves two leading strands and no lagging strands",
      "cannot be completed by DNA polymerase",
      "has a single origin",
      "is semiconservative",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "In a comparison between asexually reproducing bacteria and sexually reproducing multicellular eukaryotes, uncorrected errors in replication are more likely to be transmitted to subsequent generations in bacteria than in multicellular eukaryotes. Which of the following provides the best evidence-based explanation for this difference?",
    options: [
      "Unlike multicellular eukaryotes, bacteria lack DNA repair enzymes, so there are just more uncorrected errors at play.",
      "Because they are asexual and single-celled, all uncorrected errors of replication in bacteria are transmitted to subsequent generations. Multicellular eukaryotes typically reproduce sexually, so uncorrected errors are transmitted only if they occur in germ cells that meiotically divide to produce gametes.",
      "Although the genome for each is represented as pairs of homologous chromosomes, errors in bacteria affect both homologs, but only one is affected in eukaryotes.",
      "Only errors that lead to faster growing strains are left uncorrected in bacteria, whereas all errors are detected and repaired in multicellular eukaryotes.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "What is the major difference between bacterial chromosomes and eukaryotic chromosomes?",
    options: [
      "There is no difference between bacterial and eukaryotic chromosomes.",
      "Bacteria usually have a single circular chromosome whereas eukaryotes have several linear chromosomes.",
      "The DNA molecules of bacterial chromosomes have a slightly different structure than those of eukaryotic chromosomes.",
      "Bacterial chromosomes have much more protein associated with the DNA than eukaryotes.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
