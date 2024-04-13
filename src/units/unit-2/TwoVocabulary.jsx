import Vocabulary from "../Vocabulary.unit";
import data from "./twoVocab.json";
const TwoVocabulary = () => {
  //   console.log(oneVocab);
  return (
    <div className="">
      <Vocabulary data={data} />
    </div>
  );
};
export default TwoVocabulary;
