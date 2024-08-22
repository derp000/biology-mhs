import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 12;

const questions: QuizQuestionList = [
  {
    question: "What is a locus?",
    options: [
      "the precise location of a gene on a chromosome",
      "a type of spore made only by fungi",
      "a cell with two chromosome sets",
      "a structure that appears during prophase I and consists of two paired genes",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "A karyotype is __________.",
    options: [
      "a photograph of all the chromosomes in a single cell from an individual",
      "a list of all the genes a person carries",
      "a method of identifying crossover events",
      "the physical traits a person has",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following statements reflects an advantage that sexual reproduction likely provides over asexual reproduction?",
    options: [
      "Although energetically more costly than asexual reproduction, sexual reproduction leads to different combinations of alleles that could provide adaptability in a changing environment.",
      "Although sexual and asexual reproduction both offer opportunities for increasing genetic variation, sexual reproduction is comparatively lower in its energetic costs to the organism.",
      "Although both reproductive strategies perpetuate the same combination of alleles within individuals in a population, sexual reproduction is energetically less costly than asexual reproduction.",
      "Sexual reproduction maintains the same combination of alleles and does not run the risk of losing successful combinations of alleles as is observed to occur in asexually reproducing organisms.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following answers is NEITHER involved with crossing over NOR an outcome of crossing over?",
    options: [
      "The DNA in two nonsister chromatids is broken by specific proteins at exact points.",
      "formation of chromosomes containing paternal and maternal alleles",
      "Chiasmata indicate where crossing over is occurring between homologs.",
      "the random alignment of homologous pairs of chromosomes at metaphase I",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Pea flowers may be purple (P) or white (p). Pea seeds may be round (R) or wrinkled (r). What proportion of the offspring from the cross PpRr x PpRr will have white flowers and wrinkled seeds?",
    options: ["3/4", "1/2", "1/4", "1/16"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A man has a pointed frontal hairline known as a widow's peak. This trait is thought to be controlled by a dominant allele. His wife lacks a widow's peak, and their son has a widow's peak. (W: widow's peak; w: no widow's peak). The son is curious about whether his father is homozygous or heterozygous for the widow's peak trait. Which of the following facts would allow him to know?",
    options: [
      "Both his paternal grandfather and his paternal grandmother have widow's peaks.",
      "The son's sister has a widow's peak.",
      "The son submits his own blood sample to a local genotyping lab, and it establishes that he is heterozygous for the trait.",
      "His father's mother lacks a widow's peak.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "In people with sickle-cell disease, red blood cells break down, clump, and clog the blood vessels. The blood vessels and the broken cells accumulate in the spleen. These events lead to physical weakness, heart failure, joint pain, and brain damage. Such a suite of symptoms can be explained by __________.",
    options: [
      "a bacterial infection interacting with the sickle-cell allele",
      "the pleiotropic effects of the sickle-cell allele",
      "the polygenic nature of sickle-cell disease",
      "an epistatic interaction between the sickle-cell allele and a proteolytic enzyme gene",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "How does codominance at the molecular level help to explain why evolutionary processes haven't resulted in the elimination of the sickle-cell allele among people of African descent?",
    options: [
      "Individuals with two sickle-cell alleles are immune to infection by the malaria parasite.",
      "Individuals with normal and sickle-cell hemoglobin in their red blood cells are usually healthy and, when infected by the malaria parasite, have lower parasite densities and, thus, reduced malaria symptoms.",
      "The presence of both normal and sickle-shaped hemoglobin in the red blood cells of heterozygous individuals provides immunity to infection by the malaria parasite.",
      "Individuals need only one normal allele to have completely normal hemoglobin and reduced densities of malaria parasites in their red blood cells.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "For an X-linked trait, it is the contribution of __________ that determines whether a son will display the trait.",
    options: [
      "the paternal grandfather",
      "the paternal grandmother",
      "the mother",
      "the father",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "In a particular species of mammal, black hair (B) is dominant to green hair (b), and red eyes (R) are dominant to white eyes (r). When a BbRr individual was mated with a bbrr individual, the observed distribution of offspring was as follows: black-red 1,070; black-white 177; green-red 180; green-white 1,072. Based on these data, what is the recombination frequency?",
    options: ["7%", "86%", "approximately 14%", "approximately 17%"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
];

export default questions;
