import Phrases from "../Phrases.unit";
import data from "./onePhrases.json";
const OnePhrases = () => {
  return (
    <div className="">
      <Phrases data={data} />
    </div>
  );
};

export default OnePhrases;
