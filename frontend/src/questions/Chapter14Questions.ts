import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 14;

/**
 * See both {@link https://media.pearsoncmg.com/bc/bc_campbell_biology_11/msa/content/practice-test/app/page.php?chapnum=17}
 * and {@link https://media.pearsoncmg.com/bc/bc_campbell_biology_11/msa/content/practice-test/app/page.php?chapnum=18}
 */
const questions: QuizQuestionList = [
  {
    question:
      "One strand of a DNA molecule has the following sequence: 3'-AGTACAAACTATCCACCGTC-5'. In order for that strand to be transcribed, there would have to be a specific recognition sequence, called a(n) __________, to the left of the DNA sequence indicated.",
    options: ["promoter", "start codon (AUG)", "centromere", "intron"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which type of mutation is least likely to affect protein function?",
    options: [
      "base-pair substitution",
      "insertion of three bases",
      "addition of single bases",
      "deletion of single bases",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "A point mutation in which a single base pair is inserted or deleted from DNA is called a(n) __________.",
    options: [
      "frame-shift mutation",
      "nonsense mutation",
      "silent mutation",
      "inversion mutation",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "In prokaryotic genomes, groups of functionally related genes along with their promoters and operators are found together in __________.",
    options: [
      "an enhancer",
      "a regulatory gene",
      "a transcription factor",
      "an operon",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A bacterium can make the amino acid glycine or absorb it from its surroundings. A biochemist finds that glycine binds to a repressor protein and causes the repressor to bind to the bacterial chromosome, turning off an operon. If it is like other similar operons, the presence of glycine will result in the __________.",
    options: [
      "inhibition of bacterial cell division",
      "production of the repressor protein",
      "breakdown of glycine",
      "cessation of the synthesis of glycine",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "In an inducible operon, the inducer is often the __________ in the pathway being regulated; the inducer binds to the __________, which then becomes __________.",
    options: [
      "end product ... repressor ... inactive",
      "substrate ... repressor ... active",
      "substrate ... repressor ... inactive",
      "substrate ... corepressor ... inactive",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "You have inserted the gene for human growth factor into the E. coli lactose operon, replacing the structural genes with the gene for human growth factor. What substance must you add to your culture of bacteria to cause them to produce human growth factor for you?",
    options: [
      "operator protein",
      "human growth factor",
      "allolactose",
      "transcription factors",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "In eukaryotes, DNA packing seems to affect gene expression primarily by __________.",
    options: [
      "protecting DNA from mutations",
      "positioning related genes near each other",
      "controlling access to DNA",
      "allowing unpacked genes to be eliminated from the genome",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "What determines how long a particular mRNA molecule will persist in a eukaryotic cell?",
    options: [
      "the length of the 5' cap",
      "nucleotide sequences in the 3' untranslated region of the mRNA",
      "the presence of proteasomes in the cytoplasm",
      "the number of introns removed during processing",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Instead of developing a head and a tail, an abnormal Drosophila embryo develops two tails. This is most likely due to __________.",
    options: [
      "destruction of the RNA polymerase molecules responsible for the transcription of genes that encode head-related proteins",
      "a mutation in a maternal effect gene",
      "a failure involving post-transcriptional modification of mRNA",
      "a mutation in an operon",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "In the human genome, oncogenes __________.",
    options: [
      "slow cell division",
      "stimulate cell division",
      "enhance DNA repair",
      "suppress tumors",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
