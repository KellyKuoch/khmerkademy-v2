import { useState } from "react";
import "./Flashcard.css";
import { Link } from "react-router-dom";

const Flashcard = () => {
  const cards = [
    {
      id: 1,
      term: "ថ្ងៃចន្ទ",
      phonetic: "Thgai Chan",
      definition: "1. Monday",
    },
    {
      id: 2,
      term: "ថ្ងៃអង្គារ",
      phonetic: "Thgai Angkea",
      definition: "2. Tuesday",
    },
    {
      id: 3,
      term: "ថ្ងៃពុធ",
      phonetic: "Thgai Puth",
      definition: "3. Wednesday",
    },
    {
      id: 4,
      term: "ថ្ងៃព្រហស្បតិ",
      phonetic: "Thgai Prahuous",
      definition: "4. Thursday",
    },
    {
      id: 5,
      term: "ថ្ងៃសុក្រ",
      phonetic: "Thgai Sokh",
      definition: "5. Friday",
    },
    {
      id: 6,
      term: "ថ្ងៃសៅរ៍",
      phonetic: "Thgai Sao",
      definition: "6. Saturday",
    },
    {
      id: 7,
      term: "ថ្ងៃអាទិត្យ",
      phonetic: "Thgai ah tith",
      definition: "7. Sunday",
    },
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    if (currentIndex < Math.min(cards.length) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentTerm = cards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="main-flashcard">
      <h2>Learn the Day in Khmer</h2>
      <div
        key={currentTerm.id}
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card-front">
          <h2>{currentTerm.definition}</h2>
        </div>
        <div className="card-back">
          <h2>
            {currentTerm.term} ({currentTerm.phonetic})
          </h2>
        </div>
      </div>
      <div className="button-container">
        {currentIndex >= Math.min(cards.length) - 1 ? (
          <>
            <button
              className="button-8"
              onClick={() => {
                setCurrentIndex(0);
              }}
            >
              Learn again
            </button>
            <Link to="/lessons" className="each-unit">
              <button className="button-8">Back to Lessons</button>{" "}
            </Link>
          </>
        ) : (
          <button
            className="button-8"
            onClick={() => {
              showNext();
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Flashcard;
