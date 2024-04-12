import "./Phrases.css";
import { useState } from "react";
const Phrases = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    if (currentIndex < Math.min(data.greeting.length) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentPhrase = data.greeting[currentIndex];

  return (
    <div className="phrases-main">
      <div className="phrases-title">
        <h2>Basic Phrases</h2>
        <div key={currentPhrase.id} className="each-phrase">
          <div className="main-item">
            <span>{currentPhrase.word}</span>
            <button className="button-7">Hear it loud</button>
          </div>
          <div className="phrase-item">
            {" "}
            <div className="phrase-numbers">
              <span>{currentPhrase.english}</span>
            </div>
            <div className="phrase-numbers">
              <span>{currentPhrase.phonetic}</span>
            </div>
          </div>
        </div>
        <div className="button-container">
          {currentIndex >= Math.min(data.greeting.length) - 1 ? (
            <button className="button-7" onClick={() => setCurrentIndex(0)}>
              Learn again
            </button>
          ) : (
            <button className="button-7" onClick={showNext}>
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phrases;
