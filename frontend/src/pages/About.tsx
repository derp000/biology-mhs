import { NavLink } from "react-router-dom";
import { ExternalLinkOutline } from "@emotion-icons/evaicons-outline/ExternalLinkOutline";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#24d035] to-[#00d4ff]">
      <div className="max-w-[72rem] mx-auto bg-slate-100 p-12 shadow-[0_6px_10px_5px_rgb(241_245_249)]">
        <h1 className="font-bold text-3xl">Purpose</h1>
        <p className="text-xl">
          Magnet BioMentor was created as a study tool for Dr. Gupta's
          Freshman-year Biology course. Magnet freshmen may find Biology
          daunting at first but incredibly rewarding in the end; in fact, many
          motivated freshmen have gotten 5's on the AP Biology test based on the
          freshman-year content alone. In other words, Dr. Gupta's class will
          ultimately prepare Magnet students for the rigor and styles of
          teaching found in college. However, it's necessary for freshmen to
          learn how to adapt to the elevated course rigor, which many may
          struggle to do at the beginning of the year. Magnet BioMentor aims to
          facilitate this transition.
        </p>
        <h1 className="font-bold text-3xl mt-4">Features</h1>
        <p className="text-xl">
          Two key goals for Magnet BioMentor are Accessibility and
          Self-Sufficiency.
        </p>
        <h2 className="font-bold text-2xl mt-2">Accessibility</h2>
        <p className="text-xl">
          Magnet BioMentor follows the same chapters/curriculum as taught in Dr.
          Gupta's class. Within each chapter, you will find resources ranging
          from lecture slides to videos and worksheet PDFs. These resources
          originate from Freshman/AP Biology Google Classroom posts and videos I
          personally found beneficial. This way, students do not need to search
          through Classroom posts themselves and can readily use helpful study
          materials.
        </p>
        <h2 className="font-bold text-2xl mt-2">Self-Sufficiency</h2>
        <p className="text-xl">
          Each chapter also comes with quiz questions curated from{" "}
          <NavLink
            to={`https://highered.mheducation.com/sites/0072919345/student_view0/chapter1/multiple_choice_quiz.html`}
            target="_blank"
            className={"underline inline-block"}
          >
            Freshman Biology Quizzes{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>
          {" and "}
          <div className="inline-block">
            <NavLink
              to={`https://media.pearsoncmg.com/bc/bc_campbell_biology_11/msa/content/practice-test/app/`}
              target="_blank"
              className={"underline"}
            >
              AP Biology Quizzes{""}
              <sup>
                <ExternalLinkOutline height={15} width={15} />
              </sup>
            </NavLink>
            {"."}
          </div>{" "}
          These hand-picked questions place emphasis on key concepts and
          critical thinking. Incorrectly-answered questions are tied to the
          user's Google account, enabling customized review. The Advice page
          also provides insight into effective learning/study techniques.
        </p>
        <h1 className="font-bold text-3xl mt-4">About the Developer</h1>
        <p className="text-xl">
          I'm Christopher Cao, Magnet class of 2025, and have taken Freshman
          Biology, AP Biology, and Fundamentals of Biomedical Engineering with
          Dr. Gupta. You may learn more about me on my{" "}
          <NavLink
            to={`https://derp000.github.io/`}
            target="_blank"
            className={"underline inline-block"}
          >
            website{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>{" "}
          or connect with me on{" "}
          <NavLink
            to={`https://www.linkedin.com/in/christopher-cao-1b9000244`}
            target="_blank"
            className={"underline inline-block"}
          >
            LinkedIn{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>
          . This project was created with React and Firebase using Typescript,
          Tailwind, and Vite (source on{" "}
          <NavLink
            to={`https://github.com/derp000/biology-mhs`}
            target="_blank"
            className={"underline inline-block"}
          >
            GitHub{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>
          ). I hope that you find this web app helpful!
        </p>
      </div>
    </div>
  );
};

export default About;
