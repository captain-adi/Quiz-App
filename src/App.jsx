import React, { useRef, useState, useEffect } from "react";
import { Data } from "./Data";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Data[index]);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    setQuestion(Data[index]);
    setSelectedOption(null);
  }, [index]);

  return (
    <div className="h-screen flex items-center bg-gray-700">
      <div className="p-6 max-w-md mx-auto text-center border border-gray-300 rounded-lg shadow-lg bg-gray-800">
        {/* Question Text */}
        <h2 className="text-xl font-semibold mb-4 text-white">
          {index + 1} . {question.question}
        </h2>

        {/* Options */}
        <ul className="space-y-3 mb-5">
          {question.options.map((option, idx) => (
            <li
              onClick={() => setSelectedOption(option)}
              key={idx}
              className={`py-2 px-4 rounded cursor-pointer text-white bg-gray-600 ${
                selectedOption === option
                  ? selectedOption === question.answer
                    ? "bg-green-500" // Correct answer
                    : "bg-red-500" // Incorrect answer
                  : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>

        {/* Next Question Button */}
        <div className="flex items-center justify-center flex-col">

        <button
          className="mb-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold"
        disabled={selectedOption == null}
          onClick={() => {
            {
              index < Data.length - 1 && setIndex(index + 1);
            }
          }}
        >
          Next Question
        </button>
        <button
          className="mb-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold"
         onClick={()=>setIndex(0)}
        >
        Play Again
        </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
