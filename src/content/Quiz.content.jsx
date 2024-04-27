import { useState } from "react";
import "./Quiz.css";
const questions = [
  {
    prompt: "A Boy",
    options: [
      { text: "ក្មេងស្រី", phonetic: "kmeng srey" },
      { text: "ក្មេងប្រុស", phonetic: "kmeng bros" },
      { text: "មនុស្សប្រុស", phonetic: "monus bros" },
      { text: "មនុស្សស្រី", phonetic: "monus srey" },
    ],
    answer: "ក្មេងប្រុស",
  },
  {
    prompt: "A Girl",
    options: [
      { text: "ក្មេងស្រី", phonetic: "kmeng srey" },
      { text: "ក្មេងប្រុស", phonetic: "kmeng bros" },
      { text: "មនុស្សប្រុស", phonetic: "monus bros" },
      { text: "មនុស្សស្រី", phonetic: "monus srey" },
    ],
    answer: "ក្មេងស្រី",
  },
  {
    prompt: "A Man",
    options: [
      { text: "ក្មេងស្រី", phonetic: "kmeng srey" },
      { text: "ក្មេងប្រុស", phonetic: "kmeng bros" },
      { text: "មនុស្សប្រុស", phonetic: "monus bros" },
      { text: "មនុស្សស្រី", phonetic: "monus srey" },
    ],
    answer: "មនុស្សប្រុស",
  },
  {
    prompt: "A Woman",
    options: [
      { text: "ក្មេងស្រី", phonetic: "kmeng srey" },
      { text: "ក្មេងប្រុស", phonetic: "kmeng bros" },
      { text: "មនុស្សប្រុស", phonetic: "monus bros" },
      { text: "មនុស្សស្រី", phonetic: "monus srey" },
    ],
    answer: "មនុស្សស្រី",
  },
];

const Quiz = ({ incrementScore, setScore, score }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
      } else {
        setCurrentQuestionIndex(-1);
      }
    }
  };

  if (currentQuestionIndex === -1) {
    setScore = 0;
    return <div className="congratulations"> Congratulations!</div>;
  }

  return (
    <div className="top">
      <h1>Choose the correct answer</h1>
      <h2 className="prompt">{currentQuestion.prompt}</h2>
      <div className="box">
        {currentQuestion.options.map((option) => (
          <button
            className="button-93"
            key={option.text}
            onClick={() => {
              handleOptionClick(option.text);
              incrementScore(1);
            }}
          >
            {option.text}
            {"\n"} {option.phonetic}
          </button>
        ))}
      </div>
      {/* <progress value={score} max={questions.length} /> */}
    </div>
  );
};

export default Quiz;
