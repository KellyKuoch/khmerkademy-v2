import { useState } from "react";
import "./Conversation.unit.css";
import { Link } from "react-router-dom";
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

  const renderMessage = (studentData, className, index) => (
    <div className={className}>
      <span>{studentData[index].english}</span> <br />
      <span>
        <strong>Khmer: </strong>
        {studentData[index].khmer}
      </span>{" "}
      <br />
      <span>
        <strong>Phonetic: </strong>
        {studentData[index].phonetic}
      </span>
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

      <div className="button-container">
        {currentIndex >=
        Math.min(data.student_a.length, data.student_b.length) - 1 ? (
          <>
            <button className="button-8" onClick={() => setCurrentIndex(0)}>
              Learn again
            </button>{" "}
            <Link to="/lessons" className="each-unit">
              <button className="button-8">Back to Lessons</button>{" "}
            </Link>
          </>
        ) : (
          <button className="button-8" onClick={handleContinue}>
            Continue
          </button>
        )}
      </div>
    </div>
  );
};
export default Conversation;
