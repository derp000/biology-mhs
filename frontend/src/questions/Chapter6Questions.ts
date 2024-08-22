import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 6;

const questions: QuizQuestionList = [
  {
    question:
      "Under which of the following circumstances would interspecific competition be most obvious?",
    options: [
      "when a non-native organism is introduced to a community",
      "when organisms have quite different ecological niches",
      "when resources are most abundant",
      "in the presence of a keystone species",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "The niche of an animal is __________.",
    options: [
      "the way the animal fits into its environment",
      "its position in the food chain",
      "the number of individuals of the species the environment will support",
      "the same as its habitat",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "When goats were introduced to an island off the California coast, the goats inhabited the same areas and ate the same plants as the native deer. The deer population dwindled and finally disappeared. This is an example of __________.",
    options: [
      "a food chain",
      "commensalism",
      "coevolution",
      "competitive exclusion",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Certain species of acacia trees in Central and South America have hollow thorns that house stinging ants, which attack anything that touches the tree. The ants feed on nutrients produced by the acacias. This is an example of __________.",
    options: ["facilitation", "parasitism", "mutualism", "commensalism"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "A field contains 950 kg of plant material. How many kilograms of tertiary consumers could be supported?",
    options: ["0.95, 9.5, 95, 950"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "What is the key difference between a dominant species and a keystone species?",
    options: [
      "Dominant species alter the structure or dynamics of the environment; keystone species are the most abundant.",
      "Dominant species are the most abundant; keystone species exert control through important roles or niches.",
      "Keystone species are more successful at evading their predators and the impacts of disease.",
      "The removal of a dominant species from a community has more impact than removing a keystone species.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "A species of malaria-carrying mosquito lives in a forest in which two species of monkeys, A and B, coexist. Species A is immune to malaria, but species B is not. The malaria-carrying mosquito is the chief food for a particular kind of bird in the forest. If all these birds were suddenly eliminated by hunters, which of the following would be an immediately observable consequence?",
    options: [
      "increased mortality in the malaria-carrying mosquitoes",
      "emergence of malaria-sensitive strains in monkey species A",
      "increased mortality in monkey species B",
      "increased mortality (death rate) in monkey species A",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "A lake community with four trophic levels suddenly suffers from algal blooms. Using the strategy of biomanipulation, an ecologist may propose __________.",
    options: [
      "removing fish that eat zooplankton",
      "adding mineral nutrients to the water",
      "removing the fourth trophic level in the lake",
      "adding fish that eat zooplankton",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Why does succession of communities occur?",
    options: [
      "Most populations have a limited life span and die, making room for others.",
      "Climatic changes lead to reduced water availability.",
      "Resources in an area are limited.",
      "Each existing community changes the environment.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "When equilibrium is reached on an island, __________.",
    options: [
      "the rate of species immigration will equal the rate of species extinction",
      "the number of organisms does not change",
      "extinction will cease",
      "the food web will be highly stable",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "What happens to the number of species in a community as the area of that community increases?",
    options: [
      "The number of species drops.",
      "The number of species increases.",
      "The number of species does not change.",
      "The area of the community is not involved in determining the number of species present.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
