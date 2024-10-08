import { NavLink, useParams } from "react-router-dom";

import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/config";
import { chapters } from "../utils/chapters";

// https://firebase.google.com/docs/firestore/query-data/get-data
// https://www.youtube.com/watch?v=2hR-uWjBAgw
// https://github.com/machadop1407/react-firebase-course/blob/main/src/App.js
// https://firebase.google.com/docs/web/modular-upgrade

const ChapterHome = () => {
  // const usersListRef = collection(db, `users/${auth.currentUser?.uid}`);

  const { chapterNumber } = useParams();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data().wrongQuestions);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getUsers();
  });

  return (
    <div className="bg-background min-h-[100dvh] flex justify-center items-center">
      <div className="flex flex-col gap-5 text-black w-[72rem] lg:m-0 m-4">
        <h1 className="lg:text-4xl text-2xl font-bold">
          Chapter {chapterNumber}: {chapters[Number(chapterNumber) - 1].title}
        </h1>
        <div className="bg-background-200 p-5 rounded-md">
          <div className="lg:m-5">
            <h2 className="font-semibold lg:text-2xl text-xl lg:mb-5 mb-2 text-white text-center">
              Resources
            </h2>
            <div className="flex flex-wrap justify-center text-white gap-3 lg:text-xl text-md">
              {chapters[Number(chapterNumber) - 1].resources.map(
                ({ name, to }) => (
                  <NavLink
                    to={to}
                    key={to}
                    target={"_blank"}
                    className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
                  >
                    <button className="flex flex-row items-center">
                      {name}
                    </button>
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>

        <div className="bg-secondary-100 p-5 rounded-md">
          <div className="lg:m-5">
            <h2 className="font-semibold lg:text-2xl text-xl lg:mb-5 mb-2 text-white text-center">
              Test your knowledge
            </h2>
            <div className="flex flex-row justify-center text-white gap-3 lg:text-xl text-md">
              <NavLink
                to="quiz"
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button>Randomized Quiz</button>
              </NavLink>
              <NavLink
                to="chapterreview"
                className="bg-secondary-600 text-text font-semibold rounded-lg p-4"
              >
                <button>Review Quiz</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterHome;
