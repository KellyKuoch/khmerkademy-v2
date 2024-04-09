import { useState } from "react";
import "./Conversation.unit.css";
const Conversation = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleContinue = () => {
    if (
      currentIndex <
      Math.min(data.student_a.length, data.student_b.length) - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // const handleReset = () => {
  //   setCurrentIndex(0);
  // };

  const renderMessage = (studentData, className, index) => (
    <div className={className}>
      <p>{studentData[index].english}</p> <br />
      <p>
        <strong>Khmer: </strong>
        {studentData[index].khmer}
      </p>{" "}
      <br />
      <p>
        <strong>Phonetic: </strong>
        {studentData[index].phonetic}
      </p>
    </div>
  );

  return (
    <div className="convo-main">
      <div className="convo-outer">
        <div className="convo-component">
          <div className="convo-border">
            {currentIndex < data.student_a.length &&
              renderMessage(data.student_a, "convo-left", currentIndex)}
          </div>
          <img
            src="../section-img/sonic.png"
            alt="left-person"
            className="convo-img"
          />
        </div>
        <div className="convo-component">
          <div className="convo-border">
            {currentIndex < data.student_b.length &&
              renderMessage(data.student_b, "convo-right", currentIndex)}
          </div>
          <img
            src="../section-img/toroto.png"
            alt="left-person"
            className="convo-img"
          />
        </div>
      </div>
      {/* <div className="convo-people">
        <div className="left-person">
          <img src="../section-img/pngegg.png" alt="left-person" />
        </div>
        <div className="right-person">
          <img src="" alt="right-person" />
        </div>
      </div> */}

      <div className="button-container">
        <button
          onClick={handleContinue}
          disabled={
            currentIndex >=
            Math.min(data.student_a.length, data.student_b.length) - 1
          }
          className="button-7"
        >
          Continue
        </button>
        {currentIndex >=
          Math.min(data.student_a.length, data.student_b.length) - 1 && (
          <button className="button-7" onClick={() => setCurrentIndex(0)}>
            Learn again
          </button>
        )}
      </div>
    </div>
  );
};
export default Conversation;
