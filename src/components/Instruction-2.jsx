import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Instruction.css";

const instructionData = [
  {
    title: "Congratulation!",
    content:
      "You have finished the first half of the lesson. There more to explore...",
  },
  {
    title: "Your new journey",
    content: "Your journey of learning a new language is waiting for you",
  },
  {
    title: "What to explore next...",
    content:
      "Now, you can explore the rest of the lessons and practic at your own pace",
  },
  //   {
  //     title: "Step 3: Daily phrases that would refresh everyday",
  //     content:
  //       "There are many words that would refresh everyday so that you would get a joy of learning new words.",
  //   },
];

const Instructions2 = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < instructionData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/lessons");
    }
  };

  const handleSkip = () => {
    navigate("/lessons");
  };
  return (
    <div className="outer-all-component">
      <div className="main-instruction">
        <div className="instruction-picture">
          <img src="https://placehold.co/600x400.png" alt="instruction-pic" />
        </div>
        <div className="instruction-body">
          <div className="instruction-title">
            <h2>{instructionData[currentStep].title}</h2>
          </div>
          <div className="instruction-content">
            <p>{instructionData[currentStep].content}</p>
          </div>
          <div className="instruction-button">
            <button className="button-8" onClick={handleNextStep}>
              {currentStep === instructionData.length - 1
                ? "Start learning now"
                : "Next"}
            </button>
            {currentStep !== instructionData.length - 1 ? (
              <button className="button-8" onClick={handleSkip}>
                Skip
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions2;
