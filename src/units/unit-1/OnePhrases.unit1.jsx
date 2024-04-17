import Phrases from "../Phrases.unit";
import data from "./onePhrases.json";
const OnePhrases = ({ printTest, incrementScore, score, setScore }) => {
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

export default OnePhrases;
