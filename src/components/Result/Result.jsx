import React, { useEffect, useState } from 'react';
import './Result.css';
import { Quiz_stages } from '../../constants/constant';
import Questions from '../../Data/quizQuestions';

const Result = ({ score, setScore, setQuizStage, answers, maxScore = 10 }) => {
  const [progress, setProgress] = useState(0);

  // Animate progress from 0 to score * 10 (percentage)
  useEffect(() => {
    let start = 0;
    const end = (score / maxScore) * 100;
    const duration = 2000; // 2 seconds animation
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setProgress(start);
    }, 20);

    return () => clearInterval(timer);
  }, [score, maxScore]);

  const onRestart = () => {
    setScore(0);
    setQuizStage(Quiz_stages.In_Progress);
  };

  // Filter incorrect answers
  const incorrectAnswers = Questions.filter((q, index) => {
    const correctAnswer = q.options[q.answer];
    return answers[index] !== null && answers[index] !== correctAnswer;
  }).map((q, index) => ({
    question: q.question,
    selected: answers[Questions.findIndex((ques) => ques.question === q.question)],
    correct: q.options[q.answer],
  }));

  return (
    <div className="result">
      <div className="score-card">
        <div className="progress-circle">
          <svg className="progress-ring" width="140" height="140">
            <circle
              className="progress-ring__circle"
              stroke="#C9A47D"
              strokeWidth="8"
              fill="transparent"
              r="60"
              cx="70"
              cy="70"
              style={{
                strokeDasharray: 2 * Math.PI * 60,
                strokeDashoffset:
                  2 * Math.PI * 60 - (progress / 100) * 2 * Math.PI * 60,
              }}
            />
          </svg>
          <div className="progress-text">
            {Math.round((progress / 100) * maxScore)}
          </div>
        </div>
        <div className="score-text">Your Result: {score} / {maxScore}</div>
        
        {/* Review Section for Incorrect Answers */}
        {incorrectAnswers.length > 0 ? (
          <div className="review-section">
            <h2 className="review-title">Review Incorrect Answers</h2>
            <div className="review-list">
              {incorrectAnswers.map((item, index) => (
                <div key={index} className="review-item">
                  <p className="review-question">{index + 1}. {item.question}</p>
                  <p className="review-selected">
                    Your Answer: <span className="incorrect">{item.selected}</span>
                  </p>
                  <p className="review-correct">
                    Correct Answer: <span className="correct">{item.correct}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="no-incorrect">All answers correct! Great job!</p>
        )}
        
        <button id="restart" onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
};

export default Result;