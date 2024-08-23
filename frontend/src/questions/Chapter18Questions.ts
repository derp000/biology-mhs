import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 18;

const questions: QuizQuestionList = [
  {
    question: "In the context of populations, how do we define evolution?",
    options: [
      "Evolution is the tendency for some individuals in a population to leave more offspring than others.",
      "Evolution is always caused by natural selection.",
      "Evolution is the way in which sexual reproduction can rapidly spread advantageous traits throughout a population.",
      "Evolution is a change in a population's allele frequencies over generations.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "Allele frequencies can be altered by __________.",
    options: [
      "natural selection",
      "gene flow",
      "genetic drift",
      "all of the above",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Which type of mutation plays the most important role in increasing the number of genes in the gene pool?",
    options: [
      "Mutations are so rare that there are no mutations that can have such an important effect.",
      "duplication",
      "changes in nucleotide sequence",
      "rearrangement of gene loci",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following would seem to be an example of neutral variation?",
    options: [
      "homozygosity in some prairie chicken populations",
      "human fingerprints",
      "founder effect",
      "polymorphism of the Galápagos finches",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question: "What is the importance of neutral variation in evolution?",
    options: [
      "Many mutations are silent and do not affect the amino acid that is coded for.",
      "Relative frequencies of neutral variations are controlled by natural selection.",
      "Neutral variation increases genetic variation, allowing a population to carry more alleles that may help it respond to environmental change.",
      "Neutral variation is usually removed from the population by natural selection because it does not confer an advantage in the current environment.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "An earthquake hits a small island. All but a small group of closely related lizards are eliminated, and the survivors spread out over the island. This is an instance of __________.",
    options: [
      "natural selection",
      "founder effect",
      "bottleneck effect",
      "gene flow",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following most accurately measures an organism's fitness?",
    options: [
      "its mutation rate",
      "how much food it is able to make or obtain",
      "how many fertile offspring it produces",
      "how strong the organism is when pitted against others of its species",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "A population of squirrels is preyed on by small hawks. The smaller squirrels can escape into burrows. The larger squirrels can fight off the hawks. After several generations, the squirrels in the area tend to be very small or very large. What process is responsible for this outcome?",
    options: [
      "balancing selection",
      "stabilizing selection",
      "disruptive selection",
      "directional selection",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "Stabilizing selection __________.",
    options: [
      "occurs when some individuals migrate to an area with different environmental conditions",
      "prevents mutations from occurring",
      "favors intermediate variants in a population",
      "usually results in two distinct phenotypes",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Birds with average-size wings survived a severe storm more successfully than other birds in the same population with longer or shorter wings. If severe storms occur regularly, then over time, one should expect these storms to bring about __________.",
    options: [
      "directional selection",
      "stabilizing selection",
      "disruptive selection",
      "the bottleneck effect",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Which type of selection maintains stable frequencies of two or more phenotypic forms in a population?",
    options: [
      "balancing selection",
      "neutral variation",
      "stabilizing selection",
      "heterozygote advantage",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "A number of mosquito populations today are resistant to insecticides that were once quite effective. Biologists think that insecticide resistance evolved in mosquitoes because __________.",
    options: [
      "a few mosquitoes were probably resistant to the insecticide before it was ever used, and these individuals were more likely to survive and reproduce in the presence of insecticide",
      "mosquitoes attempted to adapt to their environment",
      "mosquitoes needed to develop insecticide resistance to survive after the insecticide was used",
      "a new allele developed in response to the insecticide that provided future generations the benefit of resistance",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
];

export default questions;
