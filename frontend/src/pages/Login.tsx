import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../config/config";
import { doc, setDoc } from "firebase/firestore";
import { Google } from "@emotion-icons/boxicons-logos/Google";

const Login = () => {
  const navigate = useNavigate();
  const [authing, setAuthing] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (response) => {
        if (getAdditionalUserInfo(response)?.isNewUser) {
          console.log("isnewuser");
          await setDoc(doc(db, "users", response.user.uid), {
            wrongQuestions: [
              {
                question: "Can't review yet, you're a new user!",
                options: ["ok"],
                correctIndex: 0,
                chapter: 1,
              },
            ],
          });
        } else {
          console.log("not new user");
        }
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#24d035] to-[#00d4ff] min-h-[100dvh] flex justify-center items-center">
      <div className="flex flex-col bg-background p-12 rounded-xl max-w-[24rem]">
        <h1 className="text-2xl text-text font-bold text-center">
          Magnet BioMentor
        </h1>
        <h2 className="text-text italic text-center mb-4">
          First time? Click{" "}
          <NavLink to="/about" className="underline">
            here
          </NavLink>{" "}
          to get started.
        </h2>
        <button
          className="text-lg mx-auto text-white font-bold p-4 flex flex-row items-center gap-2 shadow-md bg-primary rounded-md"
          onClick={() => signInWithGoogle()}
          disabled={authing}
        >
          <Google width={30} height={30} /> Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
