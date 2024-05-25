import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../config/config";
import { QuizQuestionList } from "./Chapter1Questions";

const Home = () => {
  const [name, setName] = useState<string | null>(null);
  const [wrongs, setWrongs] = useState<QuizQuestionList | undefined>(undefined);
  const units = [];
  for (let i = 1; i <= 15; i++) {
    units.push(
      <NavLink
        to={`/ch${i}`}
        className="bg-purple-300 text-center text-2xl font-semibold rounded-lg p-4"
      >
        <button>Chapter {i}</button>
      </NavLink>
    );
  }

  const auth = getAuth();
  // const user = auth.currentUser;
  console.log("authstuff");
  // console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setName(user.displayName);

        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("showing data");
          console.log(docSnap.data().wrongQuestions);
          setWrongs(docSnap.data().wrongQuestions);
        }
      }
    });
  }, [auth]);

  return (
    <div className="bg-red-300">
      <div className="p-24 bg-blue-300">
        {name && <p>Hi {name}</p>}
        <button onClick={() => signOut(auth)}>Sign Out</button>
        <p>Here are the questions you missed:</p>
        <ul>
          {wrongs?.map((questionMetadata) => (
            <li key={questionMetadata.question}>{questionMetadata.question}</li>
          ))}
        </ul>
        <div className="flex flex-col gap-5 text-white max-w-[72rem] mx-auto lg:mb-24 mb-6">
          {units}
        </div>
      </div>
    </div>
  );
};

export default Home;
