import { useState } from "react";
import "./FillTheBlank.css";
import { Link } from "react-router-dom";
const blankWords = [
  {
    id: 1,
    prompt: "Good evening ",
    translation: "_____សួស្តី",
    phonetic: "_____ soursdei",
    options: [
      { text: "ទិវា", phonetic: "Tivea" },
      { text: "អរុណ", phonetic: "Ahrun" },
      { text: "សាយ័ន្ត", phonetic: "Sayaun" },
      { text: "រាត្រី", phonetic: "Reatrei" },
    ],
    answer: "សាយ័ន្ត",
  },
  {
    id: 2,
    prompt: "How are you doing?",
    translation: "តើ______សុខសប្បាយទេ? (មិត្តភ័ក្ដិ)",
    phonetic: "Ter _____ sok sabbay te?",
    options: [
      { text: "អ្នក", phonetic: "Neak" },
      { text: "ខ្ញុំ", phonetic: "Khnom" },
      { text: "ឯង", phonetic: "Aeng" },
      { text: "លោក", phonetic: "Lok" },
    ],
    answer: "ឯង",
  },
  {
    id: 3,
    prompt: "What is your name?",
    translation: "តើអ្នកមាន____អ្វី?",
    phonetic: "Ter neak mean ______ avey?",
    options: [
      { text: "អាយុ", phonetic: "Ah Yuk" },
      { text: "បងប្អូន", phonetic: "Bong Paoun" },
      { text: "បងស្រី", phonetic: "Bong Srei" },
      { text: "ឈ្មោះ", phonetic: "Chamous" },
    ],
    answer: "ឈ្មោះ",
  },
  {
    id: 4,
    prompt: "I’m Devy.",
    translation: "ខ្ញុំមាន____ថា ទេវី។",
    phonetic: "Khnom mean _____ tha Devy",
    options: [
      { text: "លោក", phonetic: "Lok" },
      { text: "អ្នក", phonetic: "Neak" },
      { text: "អាយុ", phonetic: "Ah yuk" },
      { text: "ឈ្មោះ", phonetic: "Chamous" },
    ],
    answer: "ឈ្មោះ",
  },
  {
    id: 5,
    prompt: "Great to hear that",
    translation: "_____ណាស់ដែរបានដឹង។",
    phonetic: "_____ nas dae ban deong",
    options: [
      { text: "រីករាយ", phonetic: "Rik Reay" },
      { text: "ស្អប់", phonetic: "Saorb" },
      { text: "មិនចូលចិត្ត", phonetic: "Min Chol Chet" },
      { text: "ស្រលាញ់", phonetic: "Srolanh" },
    ],
    answer: "រីករាយ",
  },
  {
    id: 6,
    prompt: "Where are you from?",
    translation: "តើអ្នកមកពី_______ណា?",
    phonetic: "Ter neak mok pi ______ na",
    options: [
      { text: "កន្លែង", phonetic: "Kon laeng" },
      { text: "ស្អប់", phonetic: "Saorb" },
      { text: "ប្រទេស", phonetic: "Bro tes" },
      { text: "ស្រលាញ់", phonetic: "Srolanh" },
    ],
    answer: "ប្រទេស",
  },
];
const FillTheBlank = () => {
  //useState
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showContinue, setShowContinue] = useState(false);

  const currentQuestion = blankWords[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setFeedback("Correct");
      setShowContinue(true);
    } else {
      setFeedback("Incorrect");
      setShowContinue(false);
    }
  };

  const handleContinue = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < blankWords.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCurrentQuestionIndex(-1);
    }
    setFeedback("");
    setShowContinue(false);
  };

  if (currentQuestionIndex === -1) {
    return (
      <div className="congratulations">
        Congrats{" "}
        <Link to="/lessons" className="each-unit">
          <button className="button-8">Back to Lessons</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="fillintheblank">
      <h2>Fill in the blank</h2>
      <div className="blank-components">
        <div>
          <div className="blank-prompt">
            <h3>{currentQuestion.prompt}</h3>
            <h3>{currentQuestion.translation}</h3>
            <h3>{currentQuestion.phonetic}</h3>
            <button>🔊</button>
          </div>
          <div className="blank-answers-choice">
            Possible answers:
            <div className="correct-answer-choice">
              {currentQuestion.options.map((option) => (
                <button
                  className=""
                  key={option.text}
                  onClick={() => {
                    handleOptionClick(option.text);
                  }}
                >
                  {option.text}
                  {"\n"}
                  {option.phonetic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="blank-feedback">{feedback}</div>
      <div className="blank-buttons-container">
        {showContinue && (
          <button className="button-8" onClick={handleContinue}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default FillTheBlank;
