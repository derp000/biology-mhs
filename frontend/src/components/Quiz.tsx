import { useEffect, useState } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/config";
import { useLocation, useParams } from "react-router-dom";
import questionLists from "../questions/questionLists";
import { onAuthStateChanged } from "firebase/auth";
import { QuizQuestion, QuizQuestionList } from "../typings/quizTypes";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const [wrongs, setWrongs] = useState<Array<number>>([]);
  const [questions, setQuestions] = useState<QuizQuestionList>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { chapterNumber } = useParams();
  // if (!chapterNumber) {
  //   return <p>Error loading quiz.</p>;
  // }

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
    <div className="bg-red-300">
      <div className="p-24 bg-blue-300">
        <div>
          <div className="flex flex-col gap-5 text-white max-w-[72rem] mx-auto lg:mb-24 mb-6">
            {showScore ? (
              <>
                <p>
                  You got {score}/{questions.length} correct!
                </p>
                <p>You got the following wrong:</p>
                <ul>
                  {wrongs.map((wrongIndex) => (
                    <li key={wrongIndex}>
                      {questions[wrongIndex].question} (correct answer is{" "}
                      {
                        questions[wrongIndex].options[
                          questions[wrongIndex].correctIndex
                        ]
                      }
                      )
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h1 className="lg:text-5xl text-3xl font-bold">
                  Question {currentQuestion + 1}/{questions.length}{" "}
                  {questions[currentQuestion].question}
                </h1>
                {questions[currentQuestion].options.map((ans, i) => (
                  <button
                    key={ans}
                    onClick={() => handleAnswerOptionClick(i)}
                    className="bg-purple-300 text-left rounded-lg p-4"
                  >
                    {ans}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
