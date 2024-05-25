import { NavLink } from "react-router-dom";

import ch1PDF from "../assets/ch1.pdf";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../config/config";

// https://firebase.google.com/docs/firestore/query-data/get-data
// https://www.youtube.com/watch?v=2hR-uWjBAgw
// https://github.com/machadop1407/react-firebase-course/blob/main/src/App.js
// https://firebase.google.com/docs/web/modular-upgrade

// TODO: Refactor into generic Chapter component

const Chapter1Home = () => {
  // const usersListRef = collection(db, `users/${auth.currentUser?.uid}`);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log(docSnap.data());
        }
      } catch (e) {
        console.log(e);
      }
    };

    getUsers();
  });

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
