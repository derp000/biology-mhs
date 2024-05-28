// https://www.reddit.com/r/Firebase/comments/12cyfby/is_it_possible_get_public_urls_for_files_in_my/

interface ResourceProps {
  name: string;
  to: string;
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
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch1%2FScientific%20Method%20biology%202020_21%20student%20slides.pdf?alt=media&token=6168b941-5287-426c-ba93-99784409682c",
      },
      {
        name: "Characteristics of Life slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch1%2FCharacteristics%20of%20Life%20student%20slides.pdf?alt=media&token=cd6c234c-ea78-4735-939a-47c1ab8df156",
      },
    ],
  },
  {
    title: "Chemistry of Life",
    resources: [
      {
        name: "Chemistry of Life slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch2%2FChemistry%20of%20Life%20chp%202%20student%20slides.pdf?alt=media&token=430bd4e2-c365-4484-946e-4b307d0c419b",
      },
      {
        name: "Properties of Chemical Bonds and Water slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch2%2Fchem%20bonds%20and%20water%20student%20slides.pdf?alt=media&token=515e1f48-d83b-4eea-8afc-e575ae04a79a",
      },
      {
        name: "Macromolecules slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch2%2Fcarbon%20chemistry%20chp%202.pdf?alt=media&token=dbeb294e-88c0-4092-b2df-519379ba4cfb",
      },
      {
        name: "Protein Structure graphic",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch2%2Fwhat-is-a-protein.pdf?alt=media&token=cd4e37c0-809c-4ca0-8a6a-d5c1c3ecc6b3",
      },
    ],
  },
  {
    title: "The Biosphere",
    resources: [
      {
        name: "Biosphere slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch3%2FIntroduction%20to%20Global%20Systems%20Miller%20Levin%20Chp%203%20slides.pdf?alt=media&token=21d130a8-70e4-4953-bcee-51d4f508667b",
      },
      {
        name: "Miller Urey video",
        to: "https://ny.pbslearningmedia.org/resource/buac16-912-sci-ess-nvlrsmillerurey/the-miller-urey-experiment-lifes-rocky-start/?authuser=0",
      },
    ],
  },
  {
    title: "Ecosystems",
    resources: [
      {
        name: "Communities and Ecosystems slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch4%2FCommunities%20and%20Ecosystems%20Miller%20Levin%20Chp%204.pdf?alt=media&token=4c795748-0114-47fa-be89-f834114af7b8",
      },
    ],
  },
  {
    title: "Population Ecology",
    resources: [
      {
        name: "Population Dynamics slides (page 1-9)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch5and6%2FPopulation%20and%20Ecosystem%20Dynamics%20Miller%20Levin%20Chp%205%20and%206.pdf?alt=media&token=21fb4419-98a1-48a8-a0ee-9edc0c66f4d3",
      },
    ],
  },
  {
    title: "Community Ecology",
    resources: [
      {
        name: "Communities and Ecosystems Dynamics slides (page 10-18)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch5and6%2FPopulation%20and%20Ecosystem%20Dynamics%20Miller%20Levin%20Chp%205%20and%206.pdf?alt=media&token=21fb4419-98a1-48a8-a0ee-9edc0c66f4d3",
      },
      {
        name: "TedEd Biodiversity video (4 min)",
        to: "https://www.youtube.com/watch?v=GK_vRtHJZu4",
      },
      {
        name: "Keystone Species Yellowstone Wolves video (4 min)",
        to: "https://www.youtube.com/watch?v=ysa5OBhXz-Q",
      },
      {
        name: "Keystone Species Discovery video (19 min)",
        to: "https://www.youtube.com/watch?v=hRGg5it5FMI",
      },
    ],
  },
  {
    title: "Human Impact",
    resources: [
      {
        name: "Human Impact slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch7%2FHuman%20Impact%20BIO_CH07%20student%20slides.pdf?alt=media&token=53f9d660-44c8-4722-9c9a-55dd2ee7b803",
      },
    ],
  },
  {
    title: "Cell Structure and Function",
    resources: [
      {
        name: "Part 1 slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch8%2FCells%20-%20Chp%208%20student%20slides%20Part%201.pdf?alt=media&token=9fbaf601-8920-4f42-9c66-041435ed6f61",
      },
      {
        name: "Part 2 slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch8%2FCells%20%E2%80%93%20Chapter%208%20part%202%20student%20slides.pdf?alt=media&token=32b2f4e2-5355-478f-9e15-c86580e0aa7d",
      },
      {
        name: "Endosymbiotic Theory TedEd video (4 min)",
        to: "https://www.youtube.com/watch?v=dO2xx-aeZ4w",
      },
      {
        name: "Endosymbiotic Theory Under the Microscope video (10 min)",
        to: "https://www.youtube.com/watch?v=4LhBZ2H5SwM",
      },
      {
        name: "Membrane Transport video (3 min)",
        to: "https://www.youtube.com/watch?v=oxX2fq2DBBo",
      },
      {
        name: "Sodium Potassium Pump video (2 min)",
        to: "https://www.youtube.com/watch?v=_bPFKDdWlCg",
      },
      {
        name: "Membrane Channel PhET simulation",
        to: "https://phet.colorado.edu/en/simulations/membrane-channels",
      },
    ],
  },
  {
    title: "Metabolism and Photosynthesis",
    resources: [
      {
        name: "AP Metabolism slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch9%2FNew%20Chapter%208%20minus%20enzymes.pdf?alt=media&token=bfc5aa91-4fed-4c37-80a9-c9938f7b3878",
      },
      {
        name: "AP Enzyme slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch9%2Fchp%209%20photosynthesis%20student%20slides.pdf?alt=media&token=d7c7152a-7a5f-43b6-91d8-c85c2de0548b",
      },
      {
        name: "Photosynthesis slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch9%2Fchp%209%20photosynthesis%20student%20slides.pdf?alt=media&token=d7c7152a-7a5f-43b6-91d8-c85c2de0548b",
      },
    ],
  },
  {
    title: "Cellular Respiration",
    resources: [
      {
        name: "Cellular Respiration slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch10%2FCELLULAR%20RESPIRATION%20student%20slides.pdf?alt=media&token=30c71fbf-65bf-4441-a335-8e94b7c059db",
      },
      {
        name: "Calvin Cycle video (6 min)",
        to: "https://www.youtube.com/watch?v=0UzMaoaXKaM",
      },
      {
        name: "Cellular Respiration fill-in-the-blank",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch10%2F%5BTemplate%5D%20cellular%20respiration%20worksheet.pdf?alt=media&token=c306f1c5-0ee0-4832-8cc0-a71f3b54fd74",
      },
    ],
  },
  {
    title: "Cell Cycle",
    resources: [
      {
        name: "Mitosis slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch11%2Fcell%20growth%20and%20division%20chp%2011%20student%20slides.pdf?alt=media&token=5e4c72ac-ba19-4284-a382-42c2d0341073",
      },
      {
        name: "Mitosis video (6 min)",
        to: "https://www.youtube.com/watch?v=C6hn3sA0ip0",
      },
      {
        name: "Features of Cancer video (6 min)",
        to: "https://www.youtube.com/watch?v=tbsCjwYDE0M",
      },
      {
        name: "Cancer 3D Visual video (15 min)",
        to: "https://www.youtube.com/watch?v=akALHORX9MY",
      },
      {
        name: "Oncogenetics video (11 min)",
        to: "https://www.youtube.com/watch?v=1mo80kTZgW4",
      },
    ],
  },
  {
    title: "Meiosis and Inheritance",
    resources: [
      {
        name: "Mendel and Meiosis slides",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch12%2FChp%2012%20slides%20mendel%20and%20meiosis%20student%20slides.pdf?alt=media&token=b62cad1d-672a-456f-9592-0c8e0ba0db0e",
      },
      {
        name: "Mendel TedEd video (3 min)",
        to: "https://www.youtube.com/watch?v=Mehz7tCxjSE",
      },
      {
        name: "Mendel SciShow video (11 min)",
        to: "https://www.youtube.com/watch?v=GTiOETaZg4w",
      },
      {
        name: "Non-Mendelian Genetics video (7 min)",
        to: "https://www.youtube.com/watch?v=YJHGfbW55l0",
      },
      {
        name: "X-linked Inheritance video (9 min)",
        to: "https://www.youtube.com/watch?v=IShS60Azqjg",
      },
      {
        name: "X Inactivation video (5 min)",
        to: "https://www.youtube.com/watch?v=veB31XmUQm8",
      },
      {
        name: "Monohybrid Cross problems",
        to: "http://www.biology.arizona.edu/mendelian_genetics/problem_sets/monohybrid_cross/monohybrid_cross.html?authuser=0",
      },
      {
        name: "Sex-Linked Inheritance problems",
        to: "http://www.biology.arizona.edu/mendelian_genetics/problem_sets/sex_linked_inheritance/sex_linked_inheritance.html?authuser=0",
      },
      {
        name: "AP Genetics problems",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch12%2Fgenetics%20problems.pdf?alt=media&token=c1c9cd06-72d6-4d3e-b2d3-10354c4075da",
      },
      {
        name: "Pedigree Rules",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch12%2Fpedigree%20analysis%20general%20rules.pdf?alt=media&token=bb791b58-21ad-4cb4-9c78-283210e9a470",
      },
    ],
  },
  {
    title: "DNA Structure and Function",
    resources: [
      {
        name: "DNA slides (page 1-13)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch13and14%2FChp%2013%20and%2014%20bio.pdf?alt=media&token=a7c9c08c-fc70-4fa4-a696-64a93f04e206",
      },
      {
        name: "DNA Structure and Function 3D Visual video (7 min)",
        to: "https://www.youtube.com/watch?v=7Hk9jct2ozY",
      },
      {
        name: "DNA Replication 3D Visual video (2 min)",
        to: "https://www.youtube.com/watch?v=oCFN5WUoLRI",
      },
      {
        name: "Advanced DNA Replication 3D Visual video (6 min)",
        to: "https://www.youtube.com/watch?v=0Ha9nppnwOc",
      },
      {
        name: "Advanced Replication Fork Coupling 3D Visual video (3 min)",
        to: "https://www.youtube.com/watch?v=QMX7IpME7X8",
      },
      {
        name: "Telomere info",
        to: "https://www.science.org.au/curious/people-medicine/what-are-telomeres",
      },
    ],
  },
  {
    title: "Gene Expression and Regulation",
    resources: [
      {
        name: "Gene Expression and Regulation slides (page 14-37)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch13and14%2FChp%2013%20and%2014%20bio.pdf?alt=media&token=a7c9c08c-fc70-4fa4-a696-64a93f04e206",
      },
      {
        name: "Transcription/Translation interactive",
        to: "https://learn.genetics.utah.edu/content/basics/txtl/",
      },
    ],
  },
  {
    title: "The Human Genome",
    resources: [
      {
        name: "Human Genome slides (page 1-13)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch15and16%2FBIO%2015%20and%20mostly%2016%2020_21.pdf?alt=media&token=3189dae6-0bff-4313-9823-cd436d3c5472",
      },
    ],
  },
  {
    title: "Biotechnology",
    resources: [
      {
        name: "Biotechnology slides (page 14-51)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch15and16%2FBIO%2015%20and%20mostly%2016%2020_21.pdf?alt=media&token=3189dae6-0bff-4313-9823-cd436d3c5472",
      },
      {
        name: "Gel Electrophoresis video (8 min)",
        to: "https://www.youtube.com/watch?v=ZDZUAleWX78&t=390s",
      },
      {
        name: "Restriction Enzymes video (10 min)",
        to: "https://www.youtube.com/watch?v=67qylRSop1Q",
      },
      {
        name: "PCR video (8 min)",
        to: "https://www.youtube.com/watch?v=c07_5BfIDTw",
      },
      {
        name: "DNA Sequencing 3D Visual video (5 min)",
        to: "https://www.youtube.com/watch?v=ONGdehkB8jU",
      },
      {
        name: "CRISPR/Cas-9 video (5 min)",
        to: "https://www.youtube.com/watch?v=4YKFw2KZA5o",
      },
      {
        name: "Gene Cloning Tutorial with Animations video (22 min)",
        to: "https://www.youtube.com/watch?v=-kHOEtaWntA",
      },
      {
        name: "Gene Cloning Lecture video (27 min)",
        to: "https://www.youtube.com/watch?v=oU-lDXBZofM",
      },
      {
        name: "DNA Fingerprinting (8 min)",
        to: "https://www.youtube.com/watch?v=ijps41MkSzw&t=4s",
      },
      {
        name: "Horizontal Gene Transfer video (6 min)",
        to: "https://www.youtube.com/watch?v=7tLV20dk-FM",
      },
    ],
  },
  {
    title: "Darwin's Theory of Evolution",
    resources: [
      {
        name: "Darwin slides (page 1-12)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch17to20%2FBio%20evolution%20unit%20student%20slides.pdf?alt=media&token=a4d60d5c-31a4-4c80-923c-7de0a762b6c9",
      },
      {
        name: "Homologous and Analogous Structures video (2 min)",
        to: "https://www.youtube.com/watch?v=2N3OPRodRvk",
      },
      {
        name: "Vestigial Structures video (2 min)",
        to: "https://www.youtube.com/watch?v=lMrPxwl4OUo",
      },
    ],
  },
  {
    title: "Evolution of Populations",
    resources: [
      {
        name: "Genetic Variation and Speciation slides (page 13-24)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch17to20%2FBio%20evolution%20unit%20student%20slides.pdf?alt=media&token=a4d60d5c-31a4-4c80-923c-7de0a762b6c9",
      },
      {
        name: "Speciation video (7 min)",
        to: "https://www.youtube.com/watch?v=udZUaNKXbJA",
      },
      {
        name: "Genetic Drift video (2 min)",
        to: "https://www.youtube.com/watch?v=-UfrN11V9SM",
      },
      {
        name: "Homeobox Genes video (4 min)",
        to: "https://www.youtube.com/watch?v=bu_OQA6WmiU",
      },
      {
        name: "Hox Genes Advanced video (12 min)",
        to: "https://www.youtube.com/watch?v=1Ecm8UgiXBU",
      },
      {
        name: "Evolution of Chromosome 2 (8 min)",
        to: "https://www.youtube.com/watch?v=2GfKZlTRNjA",
      },
    ],
  },
  {
    title: "Classification",
    resources: [
      {
        name: "Phlogeny and Cladistics slides (page 25-31)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch17to20%2FBio%20evolution%20unit%20student%20slides.pdf?alt=media&token=a4d60d5c-31a4-4c80-923c-7de0a762b6c9",
      },
      {
        name: "Taxonomy video (12 min)",
        to: "https://www.youtube.com/watch?v=F38BmgPcZ_I",
      },
      {
        name: "Cladogram video (2 min)",
        to: "https://www.youtube.com/watch?v=46L_2RI1k3k",
      },
    ],
  },
  {
    title: "History of Life",
    resources: [
      {
        name: "Evolution slides (page 32-40)",
        to: "https://firebasestorage.googleapis.com/v0/b/biology-mhs.appspot.com/o/ch17to20%2FBio%20evolution%20unit%20student%20slides.pdf?alt=media&token=a4d60d5c-31a4-4c80-923c-7de0a762b6c9",
      },
      {
        name: "Origins of Life video (5 min)",
        to: "https://www.youtube.com/watch?v=de1hiS_XjWg",
      },
      {
        name: "RNA World Hypothesis video (7 min)",
        to: "https://www.youtube.com/watch?v=K1xnYFCZ9Yg",
      },
      {
        name: "Endosymbiotic Theory video (5 min)",
        to: "https://www.youtube.com/watch?v=FGnS-Xk0ZqU",
      },
    ],
  },
];
