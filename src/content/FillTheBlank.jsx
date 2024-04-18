import "./FillTheBlank.css";
const FillTheBlank = () => {
  return (
    <div className="fillintheblank">
      <div className="blank-components">
        <div className="blank-prompt">
          <h3>I love Cambodia.</h3>
          <h3>ខ្ញុំ___ប្រទេសកម្ពុជា។</h3>
          <button>🔊</button>
        </div>
        <div className="blank-answers-choice">
          Possible answers:
          <div className="correct-answer-choice">
            <button>ស្អប់</button>
            <button>ស្រលាញ់</button>
            <button>ចូលចិត្ត</button>
            <button>បារម្ភ</button>
          </div>
        </div>
      </div>
      <div className="blank-buttons-container">
        <button className="button-8">Previous</button>
        <button className="button-8">Continue</button>
      </div>
    </div>
  );
};

export default FillTheBlank;
