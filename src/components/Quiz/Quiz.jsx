import React, { useState } from "react";
import "./Quiz.css";
import Questions from "../../Data/quizQuestions";
import Option from "../Option/Option";
import { Quiz_stages } from "../../constants/constant";
import Timer from "../Timer/Timer";

const Quiz = ({ score, setScore, setQuizStage, setAnswers }) => {
  const totalQuestions = Questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setLocalAnswers] = useState(Array(totalQuestions).fill(null)); // Local answers state

  // Called when timer runs out
  const onTimeUp = () => {
    alert("Time's up!");
    setQuizStage(Quiz_stages.Ended);
    setAnswers(answers); // Pass answers to parent
  };

  // When user selects an option
  const handleSelectOption = (option) => {
    // Update answer for current question
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setLocalAnswers(newAnswers);
    setAnswers(newAnswers); // Update parent state
  };

  // Next button click
  const onNextClick = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Previous button click
  const onPreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Submit button click
  const onSubmitClick = () => {
    // Validate all questions answered
    const allAnswered = answers.every((ans) => ans !== null);

    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    // Calculate final score for all questions
    let finalScore = 0;
    answers.forEach((ans, idx) => {
      const correctAnswer = Questions[idx].options[Questions[idx].answer];
      if (ans === correctAnswer) finalScore++;
    });

    setScore(finalScore);
    setQuizStage(Quiz_stages.Ended);
    setAnswers(answers); // Pass answers to parent
  };

  // Navigate to specific question
  const handleQuestionNav = (index) => {
    setCurrentQuestion(index);
  };

  const correctAnswer = Questions[currentQuestion].options[Questions[currentQuestion].answer];
  const selectedOption = answers[currentQuestion]; // get selected option from answers array

  return (
    <div className="quiz-container">
      {/* Question Navigation Sidebar */}
      <div className="question-nav">
        {Questions.map((_, index) => (
          <button
            key={index}
            className={`nav-btn ${currentQuestion === index ? 'active' : ''} ${
              answers[index] !== null ? 'answered' : ''
            }`}
            onClick={() => handleQuestionNav(index)}
            aria-label={`Go to question ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="quiz-wrapper">
        {/* Timer at top */}
        <Timer duration={300} onTimeUp={onTimeUp} />

        <div className="header">
          <p>
            {currentQuestion + 1} of {totalQuestions} questions
          </p>
        </div>

        <div className="quiz">
          <p className="question">{Questions[currentQuestion].question}</p>
        </div>

        {Questions[currentQuestion].options.map((option, index) => (
          <Option
            key={index}
            data={option}
            correctOption={correctAnswer}
            selectedOption={selectedOption}
            setSelectedOption={handleSelectOption}
            showAnswer={false} // keep false while quiz in progress
          />
        ))}

        <div className="button-group">
          {/* Previous button */}
          <button
            id="previous"
            onClick={onPreviousClick}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {/* Next or Submit button */}
          {currentQuestion < totalQuestions - 1 ? (
            <button
              id="next"
              onClick={onNextClick}
              disabled={selectedOption === null} // Require selection before next
            >
              Next
            </button>
          ) : (
            <button
              id="submit"
              onClick={onSubmitClick}
              disabled={selectedOption === null} // Require selection before submit
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;