import { useEffect, useState } from "react";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../config/config";
import { useLocation, useParams } from "react-router-dom";
import questionLists from "../questions/questionLists";
import { onAuthStateChanged } from "firebase/auth";
import { QuizQuestion, QuizQuestionList } from "../typings/quizTypes";

// https://highered.mheducation.com/sites/0072919345/student_view0/chapter1/multiple_choice_quiz.html
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const [wrongs, setWrongs] = useState<Array<number>>([]);
  const [questions, setQuestions] = useState<QuizQuestionList>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { chapterNumber } = useParams();

  const path = useLocation();
  useEffect(() => {
    if (path.pathname.endsWith("review")) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "users", auth.currentUser?.uid as string);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              let reviewList = docSnap.data().wrongQuestions;

              if (path.pathname.endsWith("chapterreview")) {
                reviewList = reviewList.filter(
                  (question: QuizQuestion) =>
                    question.chapter === Number(chapterNumber)
                );
              }

              setQuestions(reviewList);
              setIsLoading(false);
            }
          } catch (e) {
            console.log(e);
          }
        }
      });
    } else if (path.pathname.endsWith("quiz")) {
      setQuestions(questionLists[Number(chapterNumber) - 1]);
      setIsLoading(false);
    }
  }, [setIsLoading]);

  if (isLoading) {
    return <p>Loading!</p>;
  }

  const handleAnswerOptionClick = async (index: number) => {
    console.log(index);
    console.log("index above");
    if (index === questions[currentQuestion].correctIndex) {
      try {
        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        updateDoc(docRef, {
          wrongQuestions: arrayRemove(questions[currentQuestion]),
        });
      } catch (e) {
        console.log(e);
      }
      setScore(score + 1);
    } else {
      try {
        const docRef = doc(db, "users", auth.currentUser?.uid as string);
        updateDoc(docRef, {
          wrongQuestions: arrayUnion(questions[currentQuestion]),
        });
      } catch (e) {
        console.log(e);
      }

      setWrongs([...wrongs, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="">
      <div className="bg-text-700 min-h-[100dvh] flex justify-center items-center">
        <div>
          <div className="text-white w-[72rem]">
            {showScore ? (
              <div className="text-center">
                <h1 className="text-5xl mb-5">
                  You got{" "}
                  <span className="font-semibold">
                    {score}/{questions.length}
                  </span>{" "}
                  questions correct!
                </h1>
                <p className="text-4xl mb-3">
                  You got the following questions wrong:
                </p>
                <ul>
                  {wrongs.map((wrongIndex) => (
                    <li key={wrongIndex} className="text-3xl font-bold">
                      {questions[wrongIndex].question} (
                      {
                        questions[wrongIndex].options[
                          questions[wrongIndex].correctIndex
                        ]
                      }
                      )
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <div className="flex flex-col mb-8 leading-none">
                  <h1 className="text-2xl font-semibold">
                    Question {currentQuestion + 1}/{questions.length}
                  </h1>
                  <p className="text-5xl font-bold">
                    {questions[currentQuestion].question}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {questions[currentQuestion].options.map((ans, i) => (
                    <button
                      key={ans}
                      onClick={() => handleAnswerOptionClick(i)}
                      className="bg-text-200 text-left text-xl font-semibold rounded-lg p-4"
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
