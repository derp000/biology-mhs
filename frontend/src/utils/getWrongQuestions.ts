import { Auth, onAuthStateChanged } from "firebase/auth";
import { Firestore, doc, getDoc } from "firebase/firestore";
import { QuizQuestionList } from "../typings/quizTypes";

export const getAllWrongQuestions = (
  auth: Auth,
  db: Firestore
): QuizQuestionList | undefined => {
  let wrongs: QuizQuestionList | undefined = undefined;
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // console.log("showing data");
          // console.log(docSnap.data().wrongQuestions);
          wrongs = docSnap.data().wrongQuestions;
          console.log("wrongs from within utils below");
          console.log(wrongs);
        }
      } catch (e) {
        console.log(e);
      }
    }
  });
  return wrongs;
};

export const getChapterWrongQuestions = () => {};
