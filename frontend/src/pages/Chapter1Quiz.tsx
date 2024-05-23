import { useState } from "react";
import questions from "./Chapter1Questions";

const Chapter1Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const [wrongs, setWrongs] = useState<Array<number>>([]);

  const handleAnswerOptionClick = (index: number) => {
    console.log(index);
    console.log("index above");
    if (index + 1 === questions[currentQuestion].correct) {
      setScore(score + 1);
    } else {
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
                      {questions[wrongIndex].questionText} (correct answer is{" "}
                      {
                        questions[wrongIndex].answerOptions[
                          questions[wrongIndex].correct-1
                        ]["answerText"]
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
                  {questions[currentQuestion].questionText}
                </h1>
                {questions[currentQuestion].answerOptions.map((ans, i) => (
                  <button
                    key={ans.answerText}
                    onClick={() => handleAnswerOptionClick(i)}
                    className="bg-purple-300 text-left rounded-lg p-4"
                  >
                    {ans.answerText}
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

export default Chapter1Quiz;
