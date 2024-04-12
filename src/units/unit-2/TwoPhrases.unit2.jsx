import Phrases from "../Phrases.unit";
import data from "./twoVocab.json";
const TwoPhrases = () => {
  return (
    <div className="">
      <Phrases data={data} />
    </div>
  );
};

export default TwoPhrases;
