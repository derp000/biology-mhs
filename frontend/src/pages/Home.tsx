import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../config/config";
import { Quiz } from "@emotion-icons/material-rounded/Quiz";
import { Khanacademy } from "@emotion-icons/simple-icons/Khanacademy";
import { Pencil } from "@emotion-icons/icomoon/Pencil";
import { LightBulb } from "@emotion-icons/heroicons-solid/LightBulb";
import { chapters } from "../utils/chapters";

// TODO: put comments on gc into the website as extra resources

const Home = () => {
  const [name, setName] = useState<string | null>(null);
  const units = [];
  for (let i = 0; i < 20; i++) {
    units.push(
      <NavLink
        to={`/chapter/${i + 1}`}
        className="bg-slate-100 text-center lg:text-2xl text-md font-semibold rounded-lg p-4"
      >
        <button>
          Chapter {i + 1}: {chapters[i].title}
        </button>
      </NavLink>
    );
  }

  console.log("authstuff");

  // auth needed as dependency otherwise rerenders nonstop
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setName(user.displayName);
      }
    });
  }, [auth]);

  return (
    <div className="lg:p-12 p-6 bg-slate-100">
      <div className="flex flex-col gap-5 text-text max-w-[72rem] mx-auto">
        {name && (
          <div className="text-text lg:text-2xl text-lg lg:mb-2">
            <span>Welcome back, </span>
            <span className="font-bold">{name.split(" ")[0]}</span>!
          </div>
        )}
        <div className="bg-primary p-5 rounded-md">
          <div className="lg:m-5">
            <h2 className="font-bold lg:text-3xl text-xl mb-5 text-white text-center">
              Review gaps in knowledge
            </h2>
            <div className="flex lg:flex-row flex-col justify-center text-white gap-3 lg:text-xl text-lg">
              <NavLink
                to={`/cumulativereview`}
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center lg:gap-0 gap-2">
                  <Quiz height={50} width={50} />
                  Cumulative Review Quiz
                </button>
              </NavLink>
              <NavLink
                to={`https://www.khanacademy.org/science/ap-biology`}
                target="_blank"
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center lg:gap-0 gap-2">
                  <Khanacademy height={50} width={50} />
                  Khan Academy Biology
                </button>
              </NavLink>
              <NavLink
                to={`https://www.excelatscience.com/post/ap-biology-past-frqs-by-topic`}
                target="_blank"
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center lg:gap-0 gap-2">
                  <Pencil height={50} width={50} />
                  FRQ Practice by Topic
                </button>
              </NavLink>
              <NavLink
                to={"advice"}
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center lg:gap-0 gap-2">
                  <LightBulb height={50} width={50} />
                  Study Advice
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-accent-200 p-5 rounded-md">
          <div className="lg:m-5">
            <h2 className="font-bold lg:text-3xl text-xl text-white text-center mb-5">
              Study by chapter
            </h2>
            <div className="gap-3 flex flex-col">{units}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
