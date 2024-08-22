import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 3;

const questions: QuizQuestionList = [
  {
    question: "Why do bodies of water tend to moderate climate?",
    options: [
      "Water has a high heat of vaporization.",
      "The hydrogen bonding in water gives it a high specific heat.",
      "The hydrogen bonding in water causes it to be cohesive.",
      "Water is always cooler than the nearby landmasses.",
      "All of the listed responses are correct.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Why are many of the world's deserts located at latitudes between 30°N and 30°S?",
    options: [
      "The greatest amount of solar energy per unit area is absorbed by Earth between 30°N latitude and 30°S latitude.",
      "Earth is a rotating sphere.",
      "Warm air rises between 30°N latitude and 30°S latitude and spreads toward the poles and the equator.",
      "Dry air, originating at the equator, descends toward Earth's surface between 30°N latitude and 30°S latitude.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "The warming of the Earth is a(n) __________ effect. People are worried that it will have a(n) __________ effect, perhaps causing the extinction of a number of species.",
    options: [
      "ecological ... evolutionary",
      "ecological ... dispersal",
      "abiotic ... dispersal",
      "biotic ... abiotic",
      "evolutionary ... biotic",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Which of the following statements about biomes is correct?",
    options: [
      "Each biome type occurs on every continent.",
      "Most biomes are characterized by unique groups of particular species of plants and animals.",
      "Each continent is home to a biome not found elsewhere on Earth.",
      "The major factors affecting the distribution of biomes are temperature and precipitation.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "A climograph shows the mean temperature and precipitation values that support different biomes. What information is missing that would help predict what biome should be found in a particular range?",
    options: [
      "latitude and longitude",
      "day length",
      "microclimate",
      "the pattern of climatic variation including seasonal differences",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question: "Nutrient-poor and low producing lakes are called _____ lakes.",
    options: ["oligotrophic", "eutrophic"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Of these biomes, vertical stratification (layers of plants) is most pronounced in the __________. ",
    options: ["tropical rainforest", "grassland", "desert", "tundra"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "What could a climograph be used for?",
    options: [
      "to compare the latitude and precipitation of different biomes",
      "to compare geographic range and diversity of organisms in different biomes",
      "to compare the temperature and precipitation of different biomes",
      "to compare the temperature and altitude of different biomes",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following pairs of biomes is characterized by relatively simple food webs (low biological diversity)?",
    options: [
      "taiga and savanna",
      "desert and grassland",
      "tundra and grassland",
      "tundra and desert",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "In which of the following biomes would you expect decomposers to work most rapidly and efficiently?",
    options: ["tropical rain forest", "desert", "savanna", "tundra"],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Communities that exist in the aphotic zone ultimately depend on food manufactured by chemoautotrophic bacteria or __________.",
    options: [
      "minerals found on the ocean bottom",
      "algae and cyanobacteria that live in the photic zone",
      "algae and cyanobacteria that also live in the aphotic zone",
      "decomposers",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "After nutrient enrichment from sewage contamination, a lake often becomes inhospitable to fish. Why?",
    options: [
      "Nutrient input to a lake poisons the fish.",
      "Nutrient input to a lake poisons the organisms that fish eat.",
      "Nutrient input causes the death of algae and cyanobacteria and, thus, the ultimate sources of organic compounds in a lake ecosystem. Eventually, this reduces the availability of food for fish within the lake, leading to their death.",
      "Nutrient input to a lake causes the explosive growth of algal and cyanobacterial populations. This reduces the penetration of light into the lake, the water temperature falls, and eventually the fish population dies.",
      "Nutrient input to a lake causes the explosive growth of algal and cyanobacterial populations. Decomposition of dead algae and cyanobacteria by bacteria results in the depletion of oxygen in the water, which leads to the death of fish.",
    ],
    correctIndex: 4,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following statements about lake stratification is true?",
    options: [
      "Surface waters receive nutrients from deep waters during spring and fall overturn.",
      "Deep lakes are stratified all year round in the temperate zone.",
      "The surface layer is called the hypolimnion.",
      "Ice formation begins at the bottom.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The tilt of the earth on its axis as it rotates around the sun accounts for _____.",
    options: [
      "The seasons of the Northern and Southern Hemispheres.",
      "The absence of seasons at the equator.",
      "Both.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question: "The trade winds are a result of _____.",
    options: [
      "The spinning of the earth on its axis.",
      "Variations in solar reception.",
      "The tilt of the earth's axis as it rotates around the sun.",
      "None.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "The distribution of biomes in the biosphere is dependent upon _____.",
    options: [
      "The distribution of land masses and oceans.",
      "Variations in solar radiation reception due to a spherical earth.",
      "Topography features.",
      "All of the above.",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
];

export default questions;
