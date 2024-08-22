import { QuizQuestionList } from "../typings/quizTypes";

const CH_NUM = 8;

const questions: QuizQuestionList = [
  {
    question:
      "Which of the following is the simplest collection of matter that can live?",
    options: ["community", "molecules", "cell", "tissue"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "A researcher wants to film the movement of chromosomes during cell division. Which type of microscope should she choose and why is it the best choice?",
    options: [
      "transmission electron microscope, because of its high resolving power",
      "light microscope, because the specimen is alive",
      "transmission electron microscope, because of its high magnifying power",
      "scanning electron microscope, because of its ability to visualize the surface of subcellular objects",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
  {
    question:
      "Consider two cells with the same volume but with very different surface areas due to differences in their shapes. The cell with the larger surface area is likely to __________. ",
    options: [
      "be involved in the rapid uptake of compounds from the cell's environment",
      "be buried deep in the interior of an organism",
      "be nearly spherical in shape",
      "have a very high metabolic rate",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following structures is found in eukaryotic but NOT prokaryotic cells?",
    options: ["DNA", "cytosol", "ribosomes", "mitochondria"],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "Bacterial cells are prokaryotic. Unlike a typical eukaryotic cell, they __________. ",
    options: [
      "have no ribosomes",
      "lack a plasma membrane",
      "have no membrane-bounded organelles in their cytoplasm",
      "have a smaller nucleus",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "What is the functional connection between the nucleolus, nuclear pores, and the nuclear membrane?",
    options: [
      "The nucleolus contains messenger RNA (mRNA), which crosses the nuclear envelope through the nuclear pores.",
      "Membrane of the endoplasmic reticulum is produced in the nucleolus and leaves the nucleus through the nuclear pores.",
      "Subunits of ribosomes are assembled in the nucleolus and pass through the nuclear membrane via the nuclear pores.",
      "The nuclear pores are connections between the nuclear membrane and the endoplasmic reticulum that permit ribosomes to assemble on the surface of the ER.",
    ],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Your intestine is lined with individual cells. No fluids leak between these cells from the gut into your body. Why?",
    options: [
      "The intestinal cells are bound together by tight junctions.",
      "The intestinal cells are bound together by gap junctions.",
      "The intestinal cells are bound together by the extracellular matrix.",
      "The intestinal cells are bound together by plasmodesmata.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      'The plasma membrane is referred to as a "fluid mosaic" structure. Which of the following statements about that model is true?',
    options: [
      "The fluid aspect of the membrane is due to the lateral and rotational movement of phospholipids, and embedded proteins account for the mosaic aspect.",
      "The mosaic aspect of the membrane is due to the glycosylation of phospholipids on the cytoplasmic side of the membrane.",
      "The fluid aspect of the membrane is due to the behavior of phospholipids, and the mosaic aspect is due to the presence of carbohydrates.",
      "The fluid aspect of the membrane describes its structure at normal temperatures, and the mosaic aspect describes the behavior of the membrane as the temperature is lowered.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question: "Which of the following is NOT a function of membrane proteins?",
    options: [
      "energy, carbon, and nitrogen storage",
      "cell-cell recognition",
      "enzymatic activity",
      "transport",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following would be LEAST likely to diffuse through a plasma membrane without the help of a transport protein?",
    options: [
      "a small, nonpolar molecule",
      "dissolved gases such as oxygen or carbon dioxide",
      "a large, nonpolar molecule",
      "a large, polar molecule",
    ],
    correctIndex: 3,
    chapter: CH_NUM,
  },
  {
    question:
      "The internal solute concentration of a plant cell is about 0.8 M. To demonstrate plasmolysis, it would be necessary to suspend the cell in what solution?",
    options: ["0.8 M", "0.4 M", "1.0 M", "100 mM"],
    correctIndex: 2,
    chapter: CH_NUM,
  },
  {
    question:
      "Glucose can be moved into cells via an active transport mechanism when the concentration of glucose inside the cell is higher than the concentration of glucose outside of the cell. This active transport mechanism moves glucose and sodium into the cell at the same time. The glucose moves up its gradient and the sodium moves down its gradient. Which of the following statements about this mechanism is accurate?",
    options: [
      "To pump glucose up its concentration gradient, sodium moves down its concentration gradient, and the distribution of sodium ions across the membrane forms an electrochemical gradient that drives this mechanism.",
      "Sodium and glucose move together into the cell via facilitated diffusion, and to pump glucose up its concentration gradient, sodium moves down its concentration gradient.",
      "To pump glucose up its concentration gradient, sodium moves down its concentration gradient.",
      "The distribution of sodium ions across the membrane forms an electrochemical gradient that drives this mechanism.",
    ],
    correctIndex: 0,
    chapter: CH_NUM,
  },
  {
    question:
      "Which of the following statements about cotransport of solutes across a membrane is correct?",
    options: [
      "A cotransport protein is most commonly an ion channel.",
      "Cotransport proteins allow a single ATP-powered pump to drive the active transport of many different solutes.",
      "The sodium-potassium pump is an example of a cotransport protein.",
      "In cotransport, both solutes that are being transported are moving down their chemical gradients.",
    ],
    correctIndex: 1,
    chapter: CH_NUM,
  },
];

export default questions;
