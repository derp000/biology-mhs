import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/config";
import { doc, setDoc } from "firebase/firestore";

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
                question: "hiworld?",
                options: ["aa", "bbb"],
                correctIndex: 0,
                chapter: 1,
              },
              {
                question: "hiworld?2",
                options: ["aa", "bbb"],
                correctIndex: 0,
                chapter: 3,
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
    <div>
      <p>Login Page</p>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
