import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import Start from "./components/Start/Start";
import { Quiz_stages } from "./constants/constant";
import React, { useState } from "react";

function App() {
  const [quizStage, setQuizStage] = useState(Quiz_stages.Start);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // Track answers

  return (
    <>
      {quizStage === Quiz_stages.Start ? (
        <Start setQuizStage={setQuizStage} />
      ) : quizStage === Quiz_stages.In_Progress ? (
        <Quiz
          score={score}
          setScore={setScore}
          setQuizStage={setQuizStage}
          setAnswers={setAnswers} // Pass setAnswers to Quiz
        />
      ) : (
        <Result
          score={score}
          setScore={setScore}
          setQuizStage={setQuizStage}
          answers={answers} // Pass answers to Result
        />
      )}
    </>
  );
}

export default App;