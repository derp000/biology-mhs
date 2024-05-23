import { NavLink } from "react-router-dom";

import ch1PDF from "../assets/ch1.pdf";

const Chapter1Home = () => {
  return (
    <div className="bg-red-300">
      <div className="p-24 bg-blue-300">
        <div className="flex flex-col gap-5 text-white max-w-[72rem] mx-auto lg:mb-24 mb-6">
          <NavLink
            to="/ch1/quiz"
            className="bg-purple-300 text-center rounded-lg p-4"
          >
            <button>Quiz</button>
          </NavLink>
          <a href={ch1PDF} className="bg-purple-300 text-center rounded-lg p-4">
            <button>Chapter Summary</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Home;
