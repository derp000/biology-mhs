import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth, db } from "../config/config";
// import { QuizQuestionList } from "../typings/quizTypes";
import { Quiz } from "@emotion-icons/material-rounded/Quiz";
import { Khanacademy } from "@emotion-icons/simple-icons/Khanacademy";
import { Pencil } from "@emotion-icons/icomoon/Pencil";
import { LightBulb } from "@emotion-icons/heroicons-solid/LightBulb";
import { chapters } from "../utils/chapters";
// TODO: put comments on gc into the website as extra resources
const Home = () => {
  const [name, setName] = useState<string | null>(null);
  // const [wrongs, setWrongs] = useState<QuizQuestionList | undefined>(undefined);
  const units = [];
  for (let i = 0; i < 20; i++) {
    units.push(
      <NavLink
        to={`/chapter/${i + 1}`}
        className="bg-slate-100 text-center text-2xl font-semibold rounded-lg p-4"
      >
        <button>
          Chapter {i + 1}: {chapters[i]}
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

        try {
          const docRef = doc(db, "users", auth.currentUser?.uid as string);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log("showing data");
            console.log(docSnap.data().wrongQuestions);
            // setWrongs(docSnap.data().wrongQuestions);
          }
        } catch (e) {
          console.log(e);
        }
      }
    });
  }, [auth]);

  return (
    <div className="p-12 bg-background">
      <div className="flex flex-col gap-5 text-text max-w-[72rem] mx-auto">
        {name && (
          <div className="text-text text-2xl mb-2">
            <span>Welcome back, </span>
            <span className="font-bold">{name.split(" ")[0]}</span>!
          </div>
        )}
        {/* <p>Here are the questions you missed:</p>
          <ul>
            {wrongs?.map((questionMetadata) => (
              <li key={questionMetadata.question}>
                {questionMetadata.question}
              </li>
            ))}
          </ul> */}
        <div className="bg-primary p-5 rounded-md">
          <div className="m-5">
            <h2 className="font-bold text-3xl mb-5 text-white text-center">
              Review gaps in knowledge
            </h2>
            <div className="flex flex-row justify-center text-white gap-3 text-xl">
              <NavLink
                to={`/cumulativereview`}
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center">
                  <Quiz height={50} width={50} />
                  Cumulative Review Quiz
                </button>
              </NavLink>
              <NavLink
                to={`https://www.khanacademy.org/science/ap-biology`}
                target="_blank"
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center">
                  <Khanacademy height={50} width={50} />
                  Khan Academy Biology
                </button>
              </NavLink>
              <NavLink
                to={`https://www.excelatscience.com/post/ap-biology-past-frqs-by-topic`}
                target="_blank"
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center">
                  <Pencil height={50} width={50} />
                  FRQ Practice by Topic
                </button>
              </NavLink>
              <NavLink
                to={""}
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button className="flex flex-row items-center">
                  <LightBulb height={50} width={50} />
                  Personal Advice
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-accent-200 p-5 rounded-md">
          <div className="m-5">
            <h2 className="font-bold text-3xl text-white text-center mb-5">
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
