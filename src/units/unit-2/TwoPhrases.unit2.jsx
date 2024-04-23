import Phrases from "../Phrases.unit";
import data from "./twoVocab.json";
import { useNavigate } from "react-router-dom";
const TwoPhrases = ({ printTest, incrementScore, score, setScore }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/unit/conversation-2");
  };
  return (
    <div className="">
      <Phrases
        data={data}
        printTest={printTest}
        incrementScore={incrementScore}
        score={score}
        setScore={setScore}
        handleNext={handleNext}
      />
    </div>
  );
};

export default TwoPhrases;
