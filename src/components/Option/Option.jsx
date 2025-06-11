import React from "react";
import "./Option.css";

const Option = ({ 
  data, 
  correctOption, 
  selectedOption, 
  setSelectedOption, 
  isDisabled,  // can ignore this now
  showAnswer 
}) => {
  const isSelected = data === selectedOption;
  const isCorrect = data === correctOption;

  let className = "option";

  if (showAnswer) {
    if (isCorrect) className += " correct";
    else if (isSelected && !isCorrect) className += " incorrect";
  } else {
    // Highlight the selected option while picking
    if (isSelected) className += " selected";
  }

  return (
    <button
      className={className}
      onClick={() => {
        if (!showAnswer) setSelectedOption(data);
      }}
      disabled={showAnswer}
    >
      {data}
    </button>
  );
};

export default Option;
