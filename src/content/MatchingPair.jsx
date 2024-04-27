import "./MatchingPair.css";
const MatchingPair = () => {
  const firstWord = [
    {
      id: 1,
      english: "Hello",
      khmer: "",
      phonetic: "",
    },
    {
      id: 2,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 3,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
    {
      id: 1,
      english: "",
      khmer: "",
      phonetic: "",
    },
  ];

  return (
    <div className="main-matching-pair">
      <h2>Match the correct words</h2>
      <div className="matching-pair-container">
        <div className="left-container">
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
          <div className="pair-boxes" tabindex="0">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
        </div>
        <div className="right-container">
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
          <div className="pair-boxes">
            <span>Hello</span>
            <span>Sour Sdey</span>
          </div>
        </div>
      </div>
      <button className="button-8">Check the answer</button>
    </div>
  );
};

export default MatchingPair;
