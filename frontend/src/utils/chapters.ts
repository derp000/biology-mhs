interface ResourceProps {
  name: string;
  to: string;
  external: boolean;
}

export interface ChapterProps {
  title: string;
  resources: ResourceProps[];
}

// chapter summary is handled in ChapterHome
export const chapters: ChapterProps[] = [
  {
    title: "Characteristics of Life",
    resources: [
      {
        name: "Scientific Method slides",
        to: "",
        external: true,
      },
      {
        name: "Characteristics of Life slides",
        to: "",
        external: true,
      },
    ],
  },
  {
    title: "Chemistry of Life",
    resources: [],
  },
  {
    title: "The Biosphere",
    resources: [],
  },
  {
    title: "Ecosystems",
    resources: [],
  },
  {
    title: "Population Ecology",
    resources: [],
  },
  {
    title: "Community Ecology",
    resources: [],
  },
  {
    title: "Human Impact",
    resources: [],
  },
  {
    title: "Cell Structure and Function",
    resources: [],
  },
  {
    title: "Metabolism and Photosynthesis",
    resources: [],
  },
  {
    title: "Cellular Respiration",
    resources: [],
  },
  {
    title: "Cell Cycle",
    resources: [],
  },
  {
    title: "Meiosis and Inheritance",
    resources: [],
  },
  {
    title: "DNA Structure and Function",
    resources: [],
  },
  {
    title: "Gene Expression and Regulation",
    resources: [],
  },
  {
    title: "The Human Genome",
    resources: [],
  },
  {
    title: "Biotechnology",
    resources: [],
  },
  {
    title: "Darwin's Theory of Evolution",
    resources: [],
  },
  {
    title: "Evolution of Populations",
    resources: [],
  },
  {
    title: "Classification",
    resources: [],
  },
  {
    title: "History of Life",
    resources: [],
  },
];
