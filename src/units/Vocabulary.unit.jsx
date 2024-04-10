import "./Vocabulary.css";
const Vocabulary = ({ data }) => {
  return (
    <div className="vocab-main">
      <div className="english-main">
        <h2>Vocabulary 1</h2>
        <div className="vocab-header">
          <div className="header-item">English</div>
          <div className="header-item">Khmer</div>
          <div className="header-item">Phonetic</div>
        </div>
        {data.greeting.map((word) => (
          <div key={word.id} className="each-english">
            <div className="vocab-item">
              <p>{word.english}</p>
            </div>
            <div className="vocab-item">
              <p>{word.word}</p>
            </div>
            <div className="vocab-item">
              <p>{word.phonetic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;
