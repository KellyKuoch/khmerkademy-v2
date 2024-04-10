import Vocabulary from "../Vocabulary.unit";
import data from "./oneVocab.json";
const OneVocabulary = () => {
  //   console.log(oneVocab);
  return (
    <div className="">
      <Vocabulary data={data} />
    </div>
  );
};
export default OneVocabulary;
