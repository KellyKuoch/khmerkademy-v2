import Phrases from "../Phrases.unit";
import data from "./twoVocab.json";
const TwoPhrases = ({ printTest, incrementScore, score, setScore }) => {
  return (
    <div className="">
      <Phrases
        data={data}
        printTest={printTest}
        incrementScore={incrementScore}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

export default TwoPhrases;
