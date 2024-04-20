import "./Figure.css";
const Figure = ({ activeConsonant }) => {
  return (
    <div className="main-figure">
      <img
        src={`../alphabet-img/pic${activeConsonant.id}.png`}
        alt="consonant-img"
        className="left-figure-img"
      />
    </div>
  );
};

export default Figure;
