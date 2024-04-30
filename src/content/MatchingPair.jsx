import "./MatchingPair.css";
const MatchingPair = () => {
  const matchingWord = [
    {
      id: 1,
      firstEnglish: "Hello",
      firstKhmer: "សួស្តី / Sous Sdei",
      secondEnglish: "",
      secondKhmer: "",
      thirdEnglish: "",
      thirdKhmer: "",
      fourthEnglish: "",
      fourthKhmer: "",
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
          {matchingWord.map((item) => (
            <div className="pair-boxes">
              <span>{item.firstEnglish}</span>
              <span>{item.firstKhmer}</span>
            </div>
          ))}
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
